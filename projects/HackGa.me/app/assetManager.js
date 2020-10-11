"use strict";
//"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var AssetManager = /** @class */ (function () {
    function AssetManager() {
    }
    AssetManager.loadAssets = function () {
        this.assets = {};
        this.assetSheet = {};
        return Promise.all([
            this.loadSheet("hero", "assets/hero-sheet.png", new utils_1.Size(32, 32)),
            this.loadAsset("block", "assets/block.png")
        ]);
    };
    AssetManager.loadAsset = function (key, url) {
        var _this = this;
        return new Promise(function (resolve) {
            var image = new Image();
            image.onload = function () {
                _this.assets[key] = image;
                resolve();
            };
            image.src = url;
        });
    };
    AssetManager.loadSheet = function (key, url, dimensions) {
        var _this = this;
        return new Promise(function (resolve) {
            var image = new Image();
            image.onload = function () {
                var w = image.width / dimensions.width;
                var h = image.height / dimensions.height;
                _this.assetSheet[key] = [];
                for (var x = 0; x < w; x++) {
                    _this.assetSheet[key][x] = [];
                    for (var y = 0; y < h; y++) {
                        var canvas = document.createElement("canvas");
                        canvas.width = dimensions.width;
                        canvas.height = dimensions.height;
                        var context = canvas.getContext('2d');
                        context.drawImage(image, x * dimensions.width, y * dimensions.height, dimensions.width, dimensions.height, 0, 0, dimensions.width, dimensions.height);
                        _this.assetSheet[key][x][y] = canvas;
                    }
                }
                resolve();
            };
            image.src = url;
        });
    };
    AssetManager.getAsset = function (key) {
        return this.assets[key];
    };
    AssetManager.getSheet = function (key, x, y) {
        return this.assetSheet[key][x][y];
    };
    return AssetManager;
}());
exports.AssetManager = AssetManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNzZXRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxlQUFlOztBQUVmLGlDQUE2QjtBQUM3QjtJQUFBO0lBNkRBLENBQUM7SUF2RFUsdUJBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLHVCQUF1QixFQUFFLElBQUksWUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQztTQUM5QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRWMsc0JBQVMsR0FBeEIsVUFBeUIsR0FBVSxFQUFFLEdBQVU7UUFBL0MsaUJBVUM7UUFURyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQW1CLFVBQUMsT0FBTztZQUN6QyxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBRXhCLEtBQUssQ0FBQyxNQUFNLEdBQUc7Z0JBQ1gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLE9BQU8sRUFBRyxDQUFDO1lBQ2YsQ0FBQyxDQUFDO1lBQ0YsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRWMsc0JBQVMsR0FBeEIsVUFBeUIsR0FBVSxFQUFFLEdBQVUsRUFBRSxVQUFlO1FBQWhFLGlCQXlCQztRQXhCRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQW1CLFVBQUMsT0FBTztZQUN6QyxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxNQUFNLEdBQUc7Z0JBRVgsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBRXpDLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUUxQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUN6QixLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDekIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDOUMsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO3dCQUNoQyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7d0JBQ2xDLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3RDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUN0SixLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLE1BQU0sQ0FBQztvQkFDdEMsQ0FBQztnQkFDTCxDQUFDO2dCQUNELE9BQU8sRUFBRyxDQUFDO1lBQ2YsQ0FBQyxDQUFDO1lBQ0YsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0scUJBQVEsR0FBZixVQUFnQixHQUFVO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxxQkFBUSxHQUFmLFVBQWdCLEdBQVUsRUFBQyxDQUFRLEVBQUMsQ0FBUTtRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBN0RELElBNkRDO0FBN0RZLG9DQUFZIn0=