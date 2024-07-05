// export default class gameSceneLevel2 extends Phaser.Scene {
//     constructor() {
//         super("gameSceneLevel2");

        
//     }

//     create() {
//         // Set the world bounds 
//             this.cameras.main.setBounds(0, 0, 1580, 900);
//             this.cameras.main.setBackgroundColor('#141414');

//         // Tilemap
//             const mapTwo = this.make.tilemap({ key: "Level2" });
//             const tilesetThree = mapTwo.addTilesetImage("Tileset3", 'tiles3');


//         // mapTwo Layers 
//             const Ground = mapTwo.createLayer('Ground', tilesetThree, 0, 0);
//             this.Tome = mapTwo.createLayer('Tome', tilesetThree, 0, 0);
//             const collisionLayer = mapTwo.createLayer('Collision', tilesetThree, 0, 0);
//             const backgroundLayer = mapTwo.createLayer('Background', tilesetThree, 0, 0);
//             this.endLayer = mapTwo.createLayer('Final-Line', tilesetThree, 0, 0);
//             this.barClosed = mapTwo.createLayer('Bar-Closed', tilesetThree, 0, 0);


//          // Scale ratio
//             const mapWidth = mapTwo.widthInPixels;
//             const mapHeight = mapTwo.heightInPixels;
 
//             const scaleX = 1580 / mapWidth;
//             const scaleY = 900 / mapHeight;

//          // Layers Scale
//             //  collisionLayer.setScale(scaleX, scaleY);
//             // this.fenceClosed.setScale(scaleX, scaleY);
//             Ground.setScale(scaleX, scaleY);
//             this.Tome.setScale(scaleX, scaleY);
//             collisionLayer.setScale(scaleX, scaleY);
//             backgroundLayer.setScale(scaleX, scaleY);
//             this.endLayer.setScale(scaleX, scaleY);
//             this.barClosed.setScale(scaleX, scaleY);

//         // Center Cam
//             const scaledMapWidth = mapWidth * scaleX;
//             const scaledMapHeight = mapHeight * scaleY;
//             const screenWidth = 1580; // Width of your scene
//             const screenHeight = 900; // Height of your scene

//         // Camera size
//             this.cameras.main.setSize(screenWidth, screenHeight);
//             this.cameras.main.centerOn(scaledMapWidth / 2, scaledMapHeight / 2);

//         // Character
//             this.player = this.physics.add.sprite(790, 860, 'player');
//             this.player.setScale(.76);
            
//         // Movement Keys
//             this.cursors = this.input.keyboard.createCursorKeys();

//         // camera follow 
//             this.cameras.main.startFollow(this.player);
//             this.cameras.main.setZoom(3.5);

//         // Collision
//             collisionLayer.setCollisionByExclusion([-1]);
//             this.key.setCollisionByExclusion([-1]);
//             this.endLayer.setCollisionByExclusion([-1]);


//         // Enable Collision
//             this.physics.add.collider(this.player, collisionLayer);
//             this.physics.add.collider(this.player, this.Tome, this.disableClosedLayer, null, this); 
//             this.physics.add.collider(this.player, this.endLayer, this.endOfGame, null, this); 
//     }

//         collectBook(player,tile) {
//             this.Tome.setVisible(false);
//             this.barClosed.setVisible(false);
//         }

//         endOfGame(player, tile){
//             this.scene.start(WinningScene)
//         }

//     update() {
//         const playerSpeed = 300;
//         this.player.setVelocity(0);

//         // Horizontal movement
//         if (this.cursors.left.isDown) {
//             this.player.setVelocityX(-playerSpeed);
//         } else if (this.cursors.right.isDown) {
//             this.player.setVelocityX(playerSpeed);
//         }

//         // Vertical movement
//         if (this.cursors.up.isDown) {
//             this.player.setVelocityY(-playerSpeed);
//         } else if (this.cursors.down.isDown) {
//             this.player.setVelocityY(playerSpeed);
//         }

//         // Idle animation
//         if (!this.cursors.left.isDown && !this.cursors.right.isDown && !this.cursors.up.isDown && !this.cursors.down.isDown) {
//             this.player.anims.stop();
//         }
//     }

// }



//---------------VERSION-2--------------Fixing-bugs----//
export default class gameSceneLevel2 extends Phaser.Scene {
    constructor() {
        super("gameSceneLevel2");
    }

    create() {
        // Set the world bounds
        this.cameras.main.setBounds(0, 0, 1580, 900);
        this.cameras.main.setBackgroundColor('#141414');

        // Tilemap
        const mapTwo = this.make.tilemap({ key: "Level2" });
        const tilesetThree = mapTwo.addTilesetImage("Tileset3", 'tiles3');

        // Map layers
        const Ground = mapTwo.createLayer('Ground', tilesetThree, 0, 0);
        this.Tome = mapTwo.createLayer('Tome', tilesetThree, 0, 0);
        const collisionLayer = mapTwo.createLayer('Collision', tilesetThree, 0, 0);
        const backgroundLayer = mapTwo.createLayer('Background', tilesetThree, 0, 0);
        this.shieldProject = mapTwo.createLayer('Shield', tilesetThree, 0, 0);
        this.Potion = mapTwo.createLayer('Potion', tilesetThree, 0, 0);
        this.Damageup = mapTwo.createLayer('Damageup', tilesetThree, 0, 0);
        this.endLayer = mapTwo.createLayer('Final-Line', tilesetThree, 0, 0);
        this.barClosed = mapTwo.createLayer('Bar-Closed', tilesetThree, 0, 0);

        // Scale ratio
        const mapWidth = mapTwo.widthInPixels;
        const mapHeight = mapTwo.heightInPixels;
        const scaleX = 1580 / mapWidth;
        const scaleY = 900 / mapHeight;

        // Scale layers
        Ground.setScale(scaleX, scaleY);
        this.Tome.setScale(scaleX, scaleY);
        collisionLayer.setScale(scaleX, scaleY);
        backgroundLayer.setScale(scaleX, scaleY);
        this.shieldProject.setScale(scaleX, scaleY);
        this.Potion.setScale(scaleX, scaleY);
        this.Damageup.setScale(scaleX, scaleY);
        this.endLayer.setScale(scaleX, scaleY);
        this.barClosed.setScale(scaleX, scaleY);

       
        // Center camera
        const scaledMapWidth = mapWidth * scaleX;
        const scaledMapHeight = mapHeight * scaleY;
        const screenWidth = 1580;
        const screenHeight = 900;

        // Camera size
        this.cameras.main.setSize(screenWidth, screenHeight);
        this.cameras.main.centerOn(scaledMapWidth / 2, scaledMapHeight / 2);

        // Character
        this.player = this.physics.add.sprite(790, 860, 'player');
        this.player.setScale(.76);

        // Ghost and enable physics
        this.ghost1 = this.physics.add.sprite(400, 860, 'ghost');
        this.ghost2 = this.physics.add.sprite(600, 860, 'ghost');
        this.ghost3 = this.physics.add.sprite(1000, 860, 'ghost');
        this.ghost1.setScale(.76);
        this.ghost2.setScale(.76);
        this.ghost3.setScale(.76);
        this.ghost1.setCollideWorldBounds(true);
        this.ghost2.setCollideWorldBounds(true);
        this.ghost3.setCollideWorldBounds(true);

        // Movement keys
        this.cursors = this.input.keyboard.createCursorKeys();
        this.eKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        // Camera follow
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setZoom(1);

        // Collision
        collisionLayer.setCollisionByExclusion([-1]);
        this.Tome.setCollisionByExclusion([-1]);
        this.endLayer.setCollisionByExclusion([-1]);

        // Enable collision
        this.physics.add.collider(this.player, collisionLayer);
        this.physics.add.collider(this.player, this.Tome, this.showInteractionImage, null, this);
        this.physics.add.collider(this.player, this.endLayer, this.endOfGame, null, this);
        this.physics.add.collider(this.player, this.ghost1, this.resetPlayerPosition, null, this);
        this.physics.add.collider(this.player, this.ghost2, this.resetPlayerPosition, null, this);
        this.physics.add.collider(this.player, this.ghost3, this.resetPlayerPosition, null, this);

        // Create interaction image and hide it initially
        this.interactionImage = this.add.image(0, 0, 'eKey').setVisible(false).setDepth(1);
        this.interactionType = null;
    }

    resetPlayerPosition(player, tile) {
        this.player.setPosition(790, 860);
    }

    showInteractionImage(player, tile) {
        this.interactionImage.setPosition(this.player.x, this.player.y - 50);
        this.interactionImage.setVisible(true);
        this.interactionType = 'tome';
    }

    collectBook() {
        this.Tome.setVisible(false);
        this.barClosed.setVisible(false);
        this.barClosed.setCollisionByExclusion([]);
        this.Tome.setCollisionByExclusion([]);
        this.interactionImage.setVisible(false);
    }

    endOfGame(player, tile) {
        this.scene.start("WinningScene");
    }

    update() {
        const playerSpeed = 300;
        this.player.setVelocity(0);

        // Horizontal movement
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-playerSpeed);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(playerSpeed);
        }

        // Vertical movement
        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-playerSpeed);
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(playerSpeed);
        }

        // Idle animation
        if (!this.cursors.left.isDown && !this.cursors.right.isDown && !this.cursors.up.isDown && !this.cursors.down.isDown) {
            this.player.anims.stop();
        }

        // Check for interaction key press
        if (this.interactionImage.visible && Phaser.Input.Keyboard.JustDown(this.eKey)) {
            if (this.interactionType === 'tome') {
                this.collectBook();
            }
        }

        // Make the ghosts follow Kore
        this.physics.moveToObject(this.ghost1, this.player, 20);
        this.physics.moveToObject(this.ghost2, this.player, 20);
        this.physics.moveToObject(this.ghost3, this.player, 20);
    }
}
