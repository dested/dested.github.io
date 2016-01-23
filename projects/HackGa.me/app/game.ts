//"use strict";

import {Hero} from "./hero";
import {Level} from "./level";
export class Game {
    private level:Level;
    private hero:Hero;
    private canvas:HTMLCanvasElement;
    private context:CanvasRenderingContext2D;

    constructor() {
        console.log('hi');

        this.level = new Level();
        this.hero = new Hero(this.level);
        this.level.setHero(this.hero, 5, 5);


        this.canvas = <HTMLCanvasElement>document.getElementById('game');
        this.context = this.canvas.getContext('2d');


        window.addEventListener('resize', this.resizeCanvas, false);

        setInterval(()=> {
            this.tick();
        }, 1000 / 16);
        this.renderFrame();
        this.resizeCanvas();
    }

    private tick():void {
        this.level.tick();
    }

    private render():void {
        this.context.save();
        this.context.scale(3,3);
        this.level.render(this.context);
        this.context.restore();
    }

    private resizeCanvas():void {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    private renderFrame() {
        window.requestAnimationFrame(()=> {
            window.stats.begin();
            this.canvas.width = this.canvas.width;
            this.context.msImageSmoothingEnabled=false;
            this.context.imageSmoothingEnabled=false;
            this.render();
            this.renderFrame();
            window.stats.end();
        });
    }
}