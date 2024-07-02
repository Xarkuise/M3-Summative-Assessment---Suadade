export default class StudioBootScene extends Phaser.Scene {
    constructor() {
        super('StudioBootScene');
    }

    preload() {
        //load all assets
        this.load.image('logo', '../assets/Image/logo/StudioImage.png');
        this.load.bitmapFont('font', './assets/fonts/thick_8x8.png', '../assets/fonts/thick_8x8.xml');
    }

    create() {
        this.cameras.main.setBackgroundColor('#000000');

        const centerX = this.sys.game.config.width / 2;
        const centerY = this.sys.game.config.height / 2;

        this.logo = this.add.image(centerX, centerY + -60, 'logo').setOrigin(0.5, 0.5);
        this.logo.setScale(1.2);
        this.logo.setAlpha(0);  // Start with the image completely transparent

        // Fade in the logo over 3.5 seconds
    this.tweens.add({
        targets: this.logo,
        alpha: { from: 0, to: 1 },
        duration: 3500,  // 3.5 seconds
        ease: 'Linear',
        onComplete: () => {
            // Fade out the logo over 3.5 seconds after fading in
            this.tweens.add({
                targets: this.logo,
                alpha: { from: 1, to: 0 },
                duration: 3500,  // 3.5 seconds
                ease: 'Linear'
            });
        }
    });
    
        // Next scene
        this.time.delayedCall(7000, () => {
            this.scene.start('BootScene');
        });
    }
}