export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super("GameOverScene");
    }

    // init(data){
    //     this.score = data.score;
    //     this.coin = data.coin;
    //     this.hearts = data.hearts;
    // }

    preload() {
    }

    create() {
        // Display the background image
        this.winningBackground = this.add.image(0, 0, 'GOBackground').setOrigin(0, 0);
        this.winningBackground.setDisplaySize(this.cameras.main.width, this.cameras.main.height);


        // Add a restart button
        const restartButton = this.add.image(this.cameras.main.width / 1.3, this.cameras.main.height + -400, 'restartButton');
        restartButton.setScale(0.3);
        restartButton.setOrigin(0.5);
        restartButton.setInteractive();
        restartButton.on('pointerdown', () => {
            this.scene.start('LevelOneBootScene');
        });

        const mainButton = this.add.image(this.cameras.main.width / 1.7, this.cameras.main.height + -400, 'mainButton');
        mainButton.setScale(0.3);
        mainButton.setOrigin(0.5);
        mainButton.setInteractive();
        mainButton.on('pointerdown', () => {
            this.scene.start('MainMenuScene');
        });  
    }
}