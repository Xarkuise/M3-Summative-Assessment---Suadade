import StudioBootScene from './scenes/StudioBootScene.js';
import BootScene from './scenes/BootScene.js';
import MainMenuScene from './scenes/MainMenuScene.js';
import creditScene from './scenes/creditScene.js';
import TutorialBootScene from './scenes/TutorialBootScene.js';
import LevelOneBootScene from './scenes/LevelOneBootScene.js';
import LevelTwoBootScene from './scenes/LevelTwoBootScene.js';
import GameSceneTutorial from './scenes/gameSceneTutorial.js';
import GameSceneLevelOne from './scenes/gameSceneLevel1.js';
import GameSceneLevelTwo from './scenes/gameSceneLevel2.js';
import WinningScene from './scenes/WinningScene.js';
import GameOverScene from './scenes/GameOverScene.js';

 

var config = {
    type: Phaser.AUTO,
    width: 1580,
    height: 900,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    pixelArt: true,
    
    scene: [ StudioBootScene, BootScene, MainMenuScene, creditScene, TutorialBootScene, GameSceneTutorial, LevelOneBootScene, GameSceneLevelOne ,  LevelTwoBootScene, GameSceneLevelTwo, GameOverScene, WinningScene ]
    
};

new Phaser.Game(config);