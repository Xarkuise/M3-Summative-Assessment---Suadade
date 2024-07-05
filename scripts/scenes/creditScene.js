export default class creditScene extends Phaser.Scene {
    constructor() {
        super("creditScene");
    }

    preload() {
        // Load assets like background images, buttons, etc.
    }

    create() {
        // Add background image
        this.background = this.add.image(0, 0, 'creditBackground').setOrigin(0, 0);
        this.background.setDisplaySize(this.cameras.main.width, this.cameras.main.height);

        const backButton = this.add.image(this.cameras.main.width / 8, this.cameras.main.height + -800, 'backButton');
        backButton.setScale(0.35);
        backButton.setOrigin(0.5);
        backButton.setInteractive();
        backButton.on('pointerdown', () => {
            this.scene.start('MainMenuScene');
            // this.backgroundMusic.stop();

        });
    }
}