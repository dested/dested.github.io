//"use strict";

import {Game} from "./game";

import {AssetManager} from './assetManager';
import {KeyManager} from './keyManager';

KeyManager.start();

AssetManager.loadAssets().then(()=> {
    new Game();
});

