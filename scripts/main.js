import StudioBootScene from './scenes/StudioBootScene.js';
import BootScene from './scenes/BootScene.js';
// import MainMenuScene from './scenes/MainMenuScene.js';
import TutorialBootScene from './scenes/TutorialBootScene.js';
import LevelOneBootScene from './scenes/LevelOneBootScene.js';
import LevelTwoBootScene from './scenes/LevelTwoBootScene.js';
// import GameSceneTutorial from './scenes/gameSceneTutorial.js';
// import winningScene from './scenes/winningScene.js';
// import GameOverScene from './scenes/GameOverScene.js';



var config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 },
            debug: false
        }
    },
    pixelArt: true,

    scene: [StudioBootScene,BootScene, TutorialBootScene, LevelOneBootScene, LevelTwoBootScene]

    // scene: [, MainMenuScene, TutoriaBootScene, GameSceneTutorial, winningScene, GameOverScene]
    
};

new Phaser.Game(config);