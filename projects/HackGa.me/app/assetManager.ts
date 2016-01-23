//"use strict";

export class AssetManager {


    private static assets:{[key:string]:HTMLImageElement};

    static loadAssets():PromiseLike<void> {
        this.assets = {};
        return Promise.all([
            this.loadAsset("hero", "assets/hero.png"),
            this.loadAsset("block", "assets/block.png")
        ]);
    }

    private static loadAsset(key:string, url:string):PromiseLike<HTMLImageElement> {
        return new Promise<HTMLImageElement>((resolve)=> {
            let image = new Image();

            image.onload = ()=> {
                resolve(image);
            };
            image.src = url;
            this.assets[key] = image;
        });
    }

    static getAsset(key:string):HTMLImageElement {
        return this.assets[key];
    }
}