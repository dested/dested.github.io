"use strict";
//"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeyManager = /** @class */ (function () {
    function KeyManager() {
    }
    KeyManager.start = function () {
        var _this = this;
        this.keys = [];
        keyboardJS.bind('left', function (e) {
            e.preventRepeat();
            _this.keys[Keys.Left] = true;
        }, function (e) {
            _this.keys[Keys.Left] = false;
        });
        keyboardJS.bind('right', function (e) {
            e.preventRepeat();
            _this.keys[Keys.Right] = true;
        }, function (e) {
            _this.keys[Keys.Right] = false;
        });
        keyboardJS.bind('up', function (e) {
            e.preventRepeat();
            _this.keys[Keys.Up] = true;
        }, function (e) {
            _this.keys[Keys.Up] = false;
        });
        keyboardJS.bind('down', function (e) {
            e.preventRepeat();
            _this.keys[Keys.Down] = true;
        }, function (e) {
            _this.keys[Keys.Down] = false;
        });
        keyboardJS.bind('s', function (e) {
            e.preventRepeat();
            _this.keys[Keys.Run] = true;
        }, function (e) {
            _this.keys[Keys.Run] = false;
        });
        keyboardJS.bind('d', function (e) {
            e.preventRepeat();
            _this.keys[Keys.Jump] = true;
        }, function (e) {
            _this.keys[Keys.Jump] = false;
        });
    };
    return KeyManager;
}());
exports.KeyManager = KeyManager;
var Keys;
(function (Keys) {
    Keys[Keys["Left"] = 0] = "Left";
    Keys[Keys["Right"] = 1] = "Right";
    Keys[Keys["Up"] = 2] = "Up";
    Keys[Keys["Down"] = 3] = "Down";
    Keys[Keys["Run"] = 4] = "Run";
    Keys[Keys["Jump"] = 5] = "Jump";
})(Keys = exports.Keys || (exports.Keys = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5TWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImtleU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGVBQWU7O0FBRWY7SUFBQTtJQTZDQSxDQUFDO0lBekNVLGdCQUFLLEdBQVo7UUFBQSxpQkF3Q0M7UUF0Q0csSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFFZixVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNoQyxDQUFDLEVBQUUsVUFBQyxDQUFDO1lBQ0QsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDakMsQ0FBQyxFQUFFLFVBQUMsQ0FBQztZQUNELEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQUMsQ0FBQztZQUNwQixDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUMsRUFBRSxVQUFDLENBQUM7WUFDRCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNoQyxDQUFDLEVBQUUsVUFBQyxDQUFDO1lBQ0QsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDL0IsQ0FBQyxFQUFFLFVBQUMsQ0FBQztZQUNELEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUMsRUFBRSxVQUFDLENBQUM7WUFDRCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDO0FBN0NZLGdDQUFVO0FBOEN2QixJQUFZLElBT1g7QUFQRCxXQUFZLElBQUk7SUFDWiwrQkFBUSxDQUFBO0lBQ1IsaUNBQVMsQ0FBQTtJQUNULDJCQUFNLENBQUE7SUFDTiwrQkFBUSxDQUFBO0lBQ1IsNkJBQU8sQ0FBQTtJQUNQLCtCQUFRLENBQUE7QUFDWixDQUFDLEVBUFcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBT2YifQ==