"use strict";
//"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("./game");
var assetManager_1 = require("./assetManager");
var keyManager_1 = require("./keyManager");
keyManager_1.KeyManager.start();
assetManager_1.AssetManager.loadAssets().then(function () {
    new game_1.Game();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGVBQWU7O0FBRWYsK0JBQTRCO0FBRTVCLCtDQUE0QztBQUM1QywyQ0FBd0M7QUFFeEMsdUJBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUVuQiwyQkFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQztJQUMzQixJQUFJLFdBQUksRUFBRSxDQUFDO0FBQ2YsQ0FBQyxDQUFDLENBQUMifQ==