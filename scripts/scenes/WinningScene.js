export default class WinningScene extends Phaser.Scene {
    constructor() {
        super("WinningScene");
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
        this.winningBackground = this.add.image(0, 0, 'gSBackground').setOrigin(0, 0);
        this.winningBackground.setDisplaySize(this.cameras.main.width, this.cameras.main.height);


        // Add a restart button
        const restartButton = this.add.image(this.cameras.main.width / 8, this.cameras.main.height + -300, 'restartButton');
        restartButton.setScale(0.3);
        restartButton.setOrigin(0.5);
        restartButton.setInteractive();
        restartButton.on('pointerdown', () => {
            this.scene.start('LevelOneBootScene');
        });

        const mainButton = this.add.image(this.cameras.main.width / 3.5, this.cameras.main.height + -300, 'mainButton');
        mainButton.setScale(0.3);
        mainButton.setOrigin(0.5);
        mainButton.setInteractive();
        mainButton.on('pointerdown', () => {
            this.scene.start('MainMenuScene');
        });  
    }
}