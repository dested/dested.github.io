"use strict";
//"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assetManager_1 = require("./assetManager");
var Level = /** @class */ (function () {
    function Level() {
        console.log('hilevel');
        this.tiles = [];
        for (var x = 0; x < 100; x++) {
            this.tiles[x] = [];
            for (var y = 0; y < 20; y++) {
                this.tiles[x][y] = (y == 15);
                if (x == 27) {
                    this.tiles[x][y] = true;
                }
                if (x == 24 && y < 14) {
                    this.tiles[x][y] = true;
                }
                if (x == 15 && y < 11) {
                    this.tiles[x][y] = true;
                }
            }
        }
    }
    Level.prototype.setHero = function (hero, x, y) {
        this.hero = hero;
        this.hero.x = x;
        this.hero.y = y;
    };
    Level.prototype.render = function (context) {
        this.hero.render(context);
        var blockAsset = assetManager_1.AssetManager.getAsset('block');
        for (var x = 0; x < 100; x++) {
            for (var y = 0; y < 20; y++) {
                if (this.tiles[x][y]) {
                    context.drawImage(blockAsset, x * 16, y * 16);
                }
            }
        }
    };
    Level.prototype.tick = function () {
        this.hero.tick();
    };
    Level.prototype.isBlocking = function (x, y, xa, ya) {
        var block = this.tiles[x][y];
        return block;
        /*        var blocking = ((TILE_BEHAVIORS[block & 0xff]) & BIT_BLOCK_ALL) > 0;
         blocking |= (ya > 0) && ((TILE_BEHAVIORS[block & 0xff]) & BIT_BLOCK_UPPER) > 0;
         blocking |= (ya < 0) && ((TILE_BEHAVIORS[block & 0xff]) & BIT_BLOCK_LOWER) > 0;

         return blocking;*/
    };
    return Level;
}());
exports.Level = Level;
//http://gamedev.stackexchange.com/questions/74387/platformer-collision-detection-order
//http://hamaluik.com/posts/super-mario-world-physics/
//http://s276.photobucket.com/user/jdaster64/media/smw_physics.png.html 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsZXZlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZUFBZTs7QUFHZiwrQ0FBNEM7QUFDNUM7SUFJSTtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFaEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNuQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUUsRUFBRSxDQUFDLENBQUEsQ0FBQztvQkFDTixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDNUIsQ0FBQztnQkFDRCxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUUsRUFBRSxJQUFJLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDO29CQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBRSxFQUFFLElBQUksQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUM7b0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLENBQUM7WUFFTCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCx1QkFBTyxHQUFQLFVBQVEsSUFBUyxFQUFFLENBQVEsRUFBRSxDQUFRO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBTyxPQUFnQztRQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxQixJQUFJLFVBQVUsR0FBRywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVoRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQixPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO0lBR0wsQ0FBQztJQUVELG9CQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwwQkFBVSxHQUFWLFVBQVcsQ0FBUSxFQUFFLENBQVEsRUFBRSxFQUFTLEVBQUUsRUFBUztRQUMvQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRzdCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDYjs7OzsyQkFJbUI7SUFDdkIsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBakVELElBaUVDO0FBakVZLHNCQUFLO0FBa0VsQix1RkFBdUY7QUFDdkYsc0RBQXNEO0FBQ3RELHVFQUF1RSJ9