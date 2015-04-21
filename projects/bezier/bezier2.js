function Point(x, y) {
    this.x = x;
    this.y = y;
}

function Line(p1, p2) {
    this.Point1 = p1;
    this.Point2 = p2;
}

Line.prototype.lerp = function(f) {
    return new Point(lerp(this.Point1.x, this.Point2.x, f), lerp(this.Point1.y, this.Point2.y, f));
}

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');



var circleRadius = 10;
var rangeStep = 0.005;
var scale = 2;
var currentAnimateOffset = 0.5;

var p1 = new Point(250, 400);
var p2 = new Point(350, 400);

var p1Handle = new Point(100, 150);
var p2Handle = new Point(500, 150);
var p3Handle = new Point(300, 50);


var bezierPoints = [];
var l1, l2, l3,l4;

function calculateBezier() {

    l1 = new Line(p1, p1Handle);
    l2 = new Line(p1Handle, p3Handle);
    l3 = new Line(p3Handle, p2Handle);
    l4 = new Line(p2Handle, p2);
    bezierPoints = [];

    for (var f = 0; f <= 1+rangeStep; f += rangeStep) {

        bezierPoints.push(calcBezierLerp(f));

    };

}

function calcBezierLerp(f) {
    var pl1 = l1.lerp(f);
    var pl2 = l2.lerp(f);
    var pl3 = l3.lerp(f);
    var pl4 = l4.lerp(f);

    var bpl1 = new Line(pl1, pl2);
    var bpl2 = new Line(pl2, pl3);
    var bpl3 = new Line(pl3, pl4);

    var cpl1 = bpl1.lerp(f);
    var cpl2 = bpl2.lerp(f);
    var cpl3 = bpl3.lerp(f);

    var dpl1 = new Line(cpl1, cpl2);
    var dpl2 = new Line(cpl2, cpl3);
    
    var p1 = dpl1.lerp(f);
    var p2 = dpl2.lerp(f);

    var pl=new Line(p1,p2);

    var p=pl.lerp(f);

    return {
        pl1: pl1,
        pl2: pl2,
        pl3: pl3,
        pl4: pl4,
        bpl1: bpl1,
        bpl2: bpl2,
        bpl3: bpl3,
        cpl1: cpl1,
        cpl2: cpl2,
        cpl3: cpl3,
        dpl1: dpl1,
        dpl2: dpl2,
        p1: p1,
        p2: p2,
        pl: pl,
        p: p
    };

}

function draw() {
    canvas.width = canvas.width;
    context.save();
    context.scale(scale, scale)

    context.save();
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(bezierPoints[0].p.x, bezierPoints[0].p.y);
    for (var i = 1; i < bezierPoints.length; i++) {
        context.lineTo(bezierPoints[i].p.x, bezierPoints[i].p.y);
    };
    context.stroke();
    context.restore();


    context.save();
    context.beginPath();
    context.moveTo(l1.Point1.x, l1.Point1.y);
    context.lineTo(l1.Point2.x, l1.Point2.y);
    context.stroke();
    context.restore();

    context.save();
    context.setLineDash([4, 4])
    context.beginPath();
    context.moveTo(l2.Point1.x, l2.Point1.y);
    context.lineTo(l2.Point2.x, l2.Point2.y);
    context.stroke();
    context.restore();  

    context.save();
    context.setLineDash([4, 4])
    context.beginPath();
    context.moveTo(l3.Point1.x, l3.Point1.y);
    context.lineTo(l3.Point2.x, l3.Point2.y);
    context.stroke();
    context.restore();

    context.save();
    context.beginPath();
    context.moveTo(l4.Point1.x, l4.Point1.y);
    context.lineTo(l4.Point2.x, l4.Point2.y);
    context.stroke();
    context.restore();

    context.save();
    drawCircle(p1Handle, circleRadius, 5);
    drawCircle(p2Handle, circleRadius, 5);
    drawCircle(p3Handle, circleRadius, 5);


    drawCircle(p1, circleRadius, 5);
    drawCircle(p2, circleRadius, 5);
    context.restore();

    context.restore();

    drawLerp(currentAnimateOffset);
}


function drawLine(point1, point2, width) {
    context.save();
    context.lineWidth = width;
    context.beginPath();
    context.moveTo(point1.x, point1.y);
    context.lineTo(point2.x, point2.y);
    context.stroke();
    context.restore();
}

function drawLerp(f) {
    context.save();
    context.scale(scale, scale);

    var bp = bezierPoints[(1 / rangeStep * f) | 0];


    drawLine(bp.pl1, bp.pl2, 1);
    drawLine(bp.pl2, bp.pl3, 1);
    drawLine(bp.pl3, bp.pl4, 1);
    drawCircle(bp.pl1, 5, 3);
    drawCircle(bp.pl2, 5, 3);
    drawCircle(bp.pl3, 5, 3);
    drawCircle(bp.pl4, 5, 3);



    drawLine(bp.cpl1, bp.cpl2, 1);
    drawLine(bp.cpl2, bp.cpl3, 1);
    drawCircle(bp.cpl1, 3, 2);
    drawCircle(bp.cpl2, 3, 2);
    drawCircle(bp.cpl3, 3, 2);

    drawLine(bp.p2, bp.p1, 1); 
    drawCircle(bp.p2, 3, 2);
    drawCircle(bp.p1, 3, 2);

    drawCircle(bp.p, 6, 1, 'red');

    context.restore();
}



function drawCircle(point, radius, lineWidth, color) {
    var centerX = point.x;
    var centerY = point.y;
    color = color || 'green';
    context.save();
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = lineWidth;
    context.strokeStyle = '#003300';
    context.stroke();
    context.restore();
}



function lerp(a, b, f) {
    return a + f * (b - a);
}

function pointInCircle(point, centerOfCircle, radius) {
    var x = point.x;
    var y = point.y;
    var centerX = centerOfCircle.x;
    var centerY = centerOfCircle.y;
    return Math.pow((x - centerX), 2) + Math.pow((y - centerY), 2) <= Math.pow(radius, 2);
}

var selectPoint;

canvas.onmousedown = function(e) {
    var ePoint = new Point(e.x / scale, e.y / scale);

    if (pointInCircle(ePoint, p1, circleRadius)) {
        selectPoint = p1;
    } else if (pointInCircle(ePoint, p2, circleRadius)) {
        selectPoint = p2;
    } else if (pointInCircle(ePoint, p1Handle, circleRadius)) {
        selectPoint = p1Handle;
    } else if (pointInCircle(ePoint, p2Handle, circleRadius)) {
        selectPoint = p2Handle;
    }else if (pointInCircle(ePoint, p3Handle, circleRadius)) {
        selectPoint = p3Handle;
    }
}
canvas.onmouseup = function(e) {
    selectPoint = undefined;
}

canvas.onmousemove = function(e) {
    if (!selectPoint) return;

    var ePoint = new Point(e.x / scale, e.y / scale);

    selectPoint.x = ePoint.x;
    selectPoint.y = ePoint.y;


    calculateBezier();
    draw();


    return false;
}

function updateBezier(f) {
    currentAnimateOffset = f;
    draw();
}

calculateBezier();
draw();