// export default class gameSceneTutorial extends Phaser.Scene {
//     constructor() {
//         super("gameSceneTutorial");
//     }
//     preload() {           
//     }

//     create() {
//         // Set the world bounds to match the size of the tile map
//         this.cameras.main.setBounds(0, 0, 1580, 900);
//         this.cameras.main.setBackgroundColor('#bcdeff');
    
//         // Creating Tilemap
//         const map = this.make.tilemap({ key: "Tutorial" });
//         const tileset = map.addTilesetImage("Tileset1", 'tiles1');
    
//         // Create layers
//         const ground = map.createLayer('Ground', tileset, 0, 0);
//         const collision = map.createLayer('Collision', tileset, 0, 0);
//         const barClosed = map.createLayer('Bar-Tome', tileset, 0, 0);
//         const tome = map.createLayer('Tome', tileset, 0, 0);
//         const doorOpen = map.createLayer('Finish-Line', tileset, 0, 0);
//         const doorClose = map.createLayer('Door-Closed', tileset, 0, 0);
//         const leverUnpulled = map.createLayer('Lever-Unpulled', tileset, 0, 0);
//         const leverPulled = map.createLayer('Lever-Pulled', tileset, 0, 0);
//         const key = map.createLayer('Key', tileset, 0, 0);
//         const trapsOff = map.createLayer('Traps-Off', tileset, 0, 0);
//         const trapsOn = map.createLayer('Traps-On', tileset, 0, 0);
//         const background = map.createLayer('Background', tileset, 0, 0);

//          // Create the player sprite and enable physics
//          // Create the player sprite
//         player = this.physics.add.sprite(400, 300, 'player');

//             // Create animations from the sprite sheet
//         this.anims.create({
//             key: 'walk_up',
//             frames: this.anims.generateFrameNumbers('player', { start: 12, end: 17 }),
//             frameRate: 10,
//             repeat: -1
//         });

//         this.anims.create({
//             key: 'walk_down',
//             frames: this.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
//             frameRate: 10,
//             repeat: -1
//         });

//         this.anims.create({
//             key: 'walk_left',
//             frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
//             frameRate: 10,
//             repeat: -1
//         });

//         this.anims.create({
//             key: 'walk_right',
//             frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
//             frameRate: 10,
//             repeat: -1
//         });

//     // Input keys
//     cursors = this.input.keyboard.createCursorKeys();
//         // Calculate scale ratio to fit the scene size
//         const mapWidth = map.widthInPixels;
//         const mapHeight = map.heightInPixels;
    
//         const scaleX = 1580 / mapWidth;
//         const scaleY = 900 / mapHeight;
    
//         // Set scale for each layer
//         ground.setScale(scaleX, scaleY);
//         collision.setScale(scaleX, scaleY);
//         barClosed.setScale(scaleX, scaleY);
//         tome.setScale(scaleX, scaleY);
//         doorOpen.setScale(scaleX, scaleY);
//         doorClose.setScale(scaleX, scaleY);
//         leverUnpulled.setScale(scaleX, scaleY);
//         leverPulled.setScale(scaleX, scaleY);
//         key.setScale(scaleX, scaleY);
//         trapsOff.setScale(scaleX, scaleY);
//         trapsOn.setScale(scaleX, scaleY);
//         background.setScale(scaleX, scaleY);
    
//         // Make the 'Lever-Pulled' layer invisible
//         leverPulled.setVisible(false);
    
//         // Center the camera on the scaled map
//         const scaledMapWidth = mapWidth * scaleX;
//         const scaledMapHeight = mapHeight * scaleY;
    
//         const screenWidth = 1580; // Width of your scene
//         const screenHeight = 900; // Height of your scene
    
//         this.cameras.main.setSize(screenWidth, screenHeight);
//         this.cameras.main.centerOn(scaledMapWidth / 2, scaledMapHeight / 2);
        
        
//     }
    
//     update() {
   
//     }

//  }



//----------------Version 2------------------//


// export default class gameSceneTutorial extends Phaser.Scene {
//     constructor() {
//         super("gameSceneTutorial");
//     }

//     preload() {
//     }

//     create() {
//         // Set the world bounds to match the size of the tile map
//         this.cameras.main.setBounds(0, 0, 1570, 890);
//         this.cameras.main.setBounds(0, 0, 1570, 890);
//         this.cameras.main.setBackgroundColor('#bcdeff');

//         // Creating Tilemap
//         const map = this.make.tilemap({ key: "Tutorial" });
//         const tileset = map.addTilesetImage("Tileset1", 'tiles1');

//         // Create layers
//         const ground = map.createLayer('Ground', tileset, 0, 0);
//         const collision = map.createLayer('Collision', tileset, 0, 0);
//         const barClosed = map.createLayer('Bar-Tome', tileset, 0, 0);
//         const tome = map.createLayer('Tome', tileset, 0, 0);
//         const doorOpen = map.createLayer('Finish-Line', tileset, 0, 0);
//         const doorClose = map.createLayer('Door-Closed', tileset, 0, 0);
//         const leverUnpulled = map.createLayer('Lever-Unpulled', tileset, 0, 0);
//         const leverPulled = map.createLayer('Lever-Pulled', tileset, 0, 0);
//         const key = map.createLayer('Key', tileset, 0, 0);
//         const trapsOff = map.createLayer('Traps-Off', tileset, 0, 0);
//         const trapsOn = map.createLayer('Traps-On', tileset, 0, 0);
//         const background = map.createLayer('Background', tileset, 0, 0);

//         // Create the player sprite and enable physics
//         this.player = this.physics.add.sprite(300, 150, 'player');
//         this.player.setScale(.76);
//         // // Create animations from the sprite sheet
//         // this.anims.create({
//         //     key: 'walk_down',
//         //     frames: this.anims.generateFrameNumbers('player', { start: 0, end: 7 }),
//         //     frameRate: 10,
//         //     repeat: -1
//         // });

//         // this.anims.create({
//         //     key: 'walk_left',
//         //     frames: this.anims.generateFrameNumbers('player', { start: 8, end: 15 }),
//         //     frameRate: 10,
//         //     repeat: -1
//         // });

//         // this.anims.create({
//         //     key: 'walk_right',
//         //     frames: this.anims.generateFrameNumbers('player', { start: 16, end: 23 }),
//         //     frameRate: 10,
//         //     repeat: -1
//         // });

//         // this.anims.create({
//         //     key: 'walk_up',
//         //     frames: this.anims.generateFrameNumbers('player', { start: 24, end: 31 }),
//         //     frameRate: 10,
//         //     repeat: -1
//         // });

//         // Input keys
//         this.cursors = this.input.keyboard.createCursorKeys();

//         //Collision
//         collision.setCollisionByExclusion([-1]);
//         doorClose.setCollisionByExclusion([-1]);
//         barClosed.setCollisionByExclusion([1]);

//         //Enable Collision
//         this.physics.add.collider(this.player, collision);
//         this.physics.add.collider(this.player, doorClose);
//         this.physics.add.collider(this.player, barClosed );

//         // Calculate scale ratio to fit the scene size
//         const mapWidth = map.widthInPixels;
//         const mapHeight = map.heightInPixels;

//         const scaleX = 1580 / mapWidth;
//         const scaleY = 900 / mapHeight;

//         // Set scale for each layer
//         ground.setScale(scaleX, scaleY);
//         collision.setScale(scaleX, scaleY);
//         barClosed.setScale(scaleX, scaleY);
//         tome.setScale(scaleX, scaleY);
//         doorOpen.setScale(scaleX, scaleY);
//         doorClose.setScale(scaleX, scaleY);
//         leverUnpulled.setScale(scaleX, scaleY);
//         leverPulled.setScale(scaleX, scaleY);
//         key.setScale(scaleX, scaleY);
//         trapsOff.setScale(scaleX, scaleY);
//         trapsOn.setScale(scaleX, scaleY);
//         background.setScale(scaleX, scaleY);

//         // Make the 'Lever-Pulled' layer invisible
//         leverPulled.setVisible(false);


//         // Center the camera on the scaled map
//         const scaledMapWidth = mapWidth * scaleX;
//         const scaledMapHeight = mapHeight * scaleY;

//         const screenWidth = 1580; // Width of your scene
//         const screenHeight = 900; // Height of your scene

//         this.cameras.main.setSize(screenWidth, screenHeight);
//         this.cameras.main.centerOn(scaledMapWidth / 2, scaledMapHeight / 2);

//         // Make the camera follow the player
//         this.cameras.main.startFollow(this.player);

//         // Set initial zoom level (e.g., 2x zoom)
//         this.cameras.main.setZoom(1); // set to 3.5

  
//     }

//     update() {
//         const playerSpeed = 300;

//         // Reset player velocity
//         this.player.setVelocity(0);

//         // Horizontal movement
//         if (this.cursors.left.isDown) {
//             this.player.setVelocityX(-playerSpeed);
//             // this.player.anims.play('walk_left', true);
//         } else if (this.cursors.right.isDown) {
//             this.player.setVelocityX(playerSpeed);
//             // this.player.anims.play('walk_right', true);
//         }

//         // Vertical movement
//         if (this.cursors.up.isDown) {
//             this.player.setVelocityY(-playerSpeed);
//             // this.player.anims.play('walk_up', true);
//         } else if (this.cursors.down.isDown) {
//             this.player.setVelocityY(playerSpeed);
//             // this.player.anims.play('walk_down', true);
//         }

//         // Idle animation
//         if (!this.cursors.left.isDown && !this.cursors.right.isDown && !this.cursors.up.isDown && !this.cursors.down.isDown) {
//             this.player.anims.stop();
//         }   
//     }
// }

//------------------------VERSION-3-TOME---------------------//

// export default class gameSceneTutorial extends Phaser.Scene {
//     constructor() {
//         super("gameSceneTutorial");
//     }

//     preload() {
//     }

//     create() {
//         // Set the world bounds to match the size of the tile map
//         this.cameras.main.setBounds(0, 0, 1570, 890);
//         this.cameras.main.setBackgroundColor('#bcdeff');

//         // Creating Tilemap
//         const map = this.make.tilemap({ key: "Tutorial" });
//         const tileset = map.addTilesetImage("Tileset1", 'tiles1');

//         // Create layers
//         const ground = map.createLayer('Ground', tileset, 0, 0);
//         const collision = map.createLayer('Collision', tileset, 0, 0);
//         this.barClosed = map.createLayer('Bar-Tome', tileset, 0, 0);
//         this.tome = map.createLayer('Tome', tileset, 0, 0);
//         const doorOpen = map.createLayer('Finish-Line', tileset, 0, 0);
//         const doorClose = map.createLayer('Door-Closed', tileset, 0, 0);
//         const leverUnpulled = map.createLayer('Lever-Unpulled', tileset, 0, 0);
//         const leverPulled = map.createLayer('Lever-Pulled', tileset, 0, 0);
//         const key = map.createLayer('Key', tileset, 0, 0);
//         const trapsOff = map.createLayer('Traps-Off', tileset, 0, 0);
//         const trapsOn = map.createLayer('Traps-On', tileset, 0, 0);
//         const background = map.createLayer('Background', tileset, 0, 0);

//         // Create the player sprite and enable physics
//         this.player = this.physics.add.sprite(300, 150, 'player');
//         this.player.setScale(.76);
        
//         // Input keys
//         this.cursors = this.input.keyboard.createCursorKeys();

//         // Collision
//         collision.setCollisionByExclusion([-1]);
//         doorClose.setCollisionByExclusion([-1]);
//         this.barClosed.setCollisionByExclusion([-1]);

//         // Enable Collision
//         this.physics.add.collider(this.player, collision);
//         this.physics.add.collider(this.player, doorClose);
//         this.physics.add.collider(this.player, this.barClosed);

//         // Calculate scale ratio to fit the scene size
//         const mapWidth = map.widthInPixels;
//         const mapHeight = map.heightInPixels;

//         const scaleX = 1580 / mapWidth;
//         const scaleY = 900 / mapHeight;

//         // Set scale for each layer
//         ground.setScale(scaleX, scaleY);
//         collision.setScale(scaleX, scaleY);
//         this.barClosed.setScale(scaleX, scaleY);
//         this.tome.setScale(scaleX, scaleY);
//         doorOpen.setScale(scaleX, scaleY);
//         doorClose.setScale(scaleX, scaleY);
//         leverUnpulled.setScale(scaleX, scaleY);
//         leverPulled.setScale(scaleX, scaleY);
//         key.setScale(scaleX, scaleY);
//         trapsOff.setScale(scaleX, scaleY);
//         trapsOn.setScale(scaleX, scaleY);
//         background.setScale(scaleX, scaleY);

//         // Make the 'Lever-Pulled' layer invisible
//         leverPulled.setVisible(false);

//         // Center the camera on the scaled map
//         const scaledMapWidth = mapWidth * scaleX;
//         const scaledMapHeight = mapHeight * scaleY;

//         const screenWidth = 1580; // Width of your scene
//         const screenHeight = 900; // Height of your scene

//         this.cameras.main.setSize(screenWidth, screenHeight);
//         this.cameras.main.centerOn(scaledMapWidth / 2, scaledMapHeight / 2);

//         // Make the camera follow the player
//         this.cameras.main.startFollow(this.player);

//         // Set initial zoom level (e.g., 2x zoom)
//         this.cameras.main.setZoom(1);

//         // Create an Arcade Physics Group for tome tiles
//         this.tomeGroup = this.physics.add.staticGroup();
//         this.tome.forEachTile(tile => {
//             if (tile.index !== -1) {
//                 const tomeTile = this.tomeGroup.create(tile.getCenterX(), tile.getCenterY(), null);
//                 tomeTile.body.width = tile.width;
//                 tomeTile.body.height = tile.height;
//                 tomeTile.setOrigin(0, 0);
//             }
//         });

//         // Add overlap check for tome
//         this.physics.add.overlap(this.player, this.tomeGroup, this.collectTome, null, this);
//     }

//     collectTome(player, tomeTile) {
//         // Make the tome invisible
//         this.tome.setVisible(false);

//         // Disable the barClosed layer
//         this.barClosed.setCollisionByExclusion([-1], false);
//         this.barClosed.setVisible(false);
//     }
    
//     update() {
//         const playerSpeed = 300;

//         // Reset player velocity
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




//---------------------------VERSION---4-------KEY+TRAPS------------------------//
// export default class gameSceneTutorial extends Phaser.Scene {
//     constructor() {
//         super("gameSceneTutorial");
//     }

//     preload() {
//     }

//     create() {
//         // Set the world bounds to match the size of the tile map
//         this.cameras.main.setBounds(0, 0, 1570, 890);
//         this.cameras.main.setBackgroundColor('#bcdeff');

//         // Creating Tilemap
//         const map = this.make.tilemap({ key: "Tutorial" });
//         const tileset = map.addTilesetImage("Tileset1", 'tiles1');

//         // Create layers
//         const ground = map.createLayer('Ground', tileset, 0, 0);
//         const collision = map.createLayer('Collision', tileset, 0, 0);
//         this.barClosed = map.createLayer('Bar-Tome', tileset, 0, 0);
//         this.tome = map.createLayer('Tome', tileset, 0, 0);
//         const doorOpen = map.createLayer('Finish-Line', tileset, 0, 0);
//         this.doorClose = map.createLayer('Door-Closed', tileset, 0, 0);
//         this.leverUnpulled = map.createLayer('Lever-Unpulled', tileset, 0, 0);
//         this.leverPulled = map.createLayer('Lever-Pulled', tileset, 0, 0);
//         this.keyLayer = map.createLayer('Key', tileset, 0, 0);
//         this.trapsOff = map.createLayer('Traps-Off', tileset, 0, 0);
//         this.trapsOn = map.createLayer('Traps-On', tileset, 0, 0);
//         const background = map.createLayer('Background', tileset, 0, 0);

//         // Create the player sprite and enable physics
//         this.player = this.physics.add.sprite(300, 150, 'player');
//         this.player.setScale(.76);
        
//         // Input keys
//         this.cursors = this.input.keyboard.createCursorKeys();

//         // Collision
//         collision.setCollisionByExclusion([-1]);
//         this.doorClose.setCollisionByExclusion([-1]);
//         this.barClosed.setCollisionByExclusion([-1]);

//         // Enable Collision
//         this.physics.add.collider(this.player, collision);
//         this.physics.add.collider(this.player, this.doorClose);
//         this.physics.add.collider(this.player, this.barClosed);

//         // Calculate scale ratio to fit the scene size
//         const mapWidth = map.widthInPixels;
//         const mapHeight = map.heightInPixels;

//         const scaleX = 1580 / mapWidth;
//         const scaleY = 900 / mapHeight;

//         // Set scale for each layer
//         ground.setScale(scaleX, scaleY);
//         collision.setScale(scaleX, scaleY);
//         this.barClosed.setScale(scaleX, scaleY);
//         this.tome.setScale(scaleX, scaleY);
//         doorOpen.setScale(scaleX, scaleY);
//         this.doorClose.setScale(scaleX, scaleY);
//         this.leverUnpulled.setScale(scaleX, scaleY);
//         this.leverPulled.setScale(scaleX, scaleY);
//         this.keyLayer.setScale(scaleX, scaleY);
//         this.trapsOff.setScale(scaleX, scaleY);
//         this.trapsOn.setScale(scaleX, scaleY);
//         background.setScale(scaleX, scaleY);

//         // Make the 'Lever-Pulled' layer and trapsOff invisible
//         this.leverPulled.setVisible(false);
//         this.trapsOff.setVisible(false);

//         // Center the camera on the scaled map
//         const scaledMapWidth = mapWidth * scaleX;
//         const scaledMapHeight = mapHeight * scaleY;

//         const screenWidth = 1580; // Width of your scene
//         const screenHeight = 900; // Height of your scene

//         this.cameras.main.setSize(screenWidth, screenHeight);
//         this.cameras.main.centerOn(scaledMapWidth / 2, scaledMapHeight / 2);

//         // Make the camera follow the player
//         this.cameras.main.startFollow(this.player);

//         // Set initial zoom level (e.g., 2x zoom)
//         this.cameras.main.setZoom(1);

//         // Create an Arcade Physics Group for tome tiles
//         this.tomeGroup = this.physics.add.staticGroup();
//         this.tome.forEachTile(tile => {
//             if (tile.index !== -1) {
//                 const tomeTile = this.tomeGroup.create(tile.getCenterX(), tile.getCenterY(), null);
//                 tomeTile.body.width = tile.width;
//                 tomeTile.body.height = tile.height;
//                 tomeTile.setOrigin(0, 0);
//             }
//         });

//         // Create an Arcade Physics Group for key tiles
//         this.keyGroup = this.physics.add.staticGroup();
//         this.keyLayer.forEachTile(tile => {
//             if (tile.index !== -1) {
//                 const keyTile = this.keyGroup.create(tile.getCenterX(), tile.getCenterY(), null);
//                 keyTile.body.width = tile.width;
//                 keyTile.body.height = tile.height;
//                 keyTile.setOrigin(0, 0);
//             }
//         });

//         // Create an Arcade Physics Group for lever tiles
//         this.leverGroup = this.physics.add.staticGroup();
//         this.leverUnpulled.forEachTile(tile => {
//             if (tile.index !== -1) {
//                 const leverTile = this.leverGroup.create(tile.getCenterX(), tile.getCenterY(), null);
//                 leverTile.body.width = tile.width;
//                 leverTile.body.height = tile.height;
//                 leverTile.setOrigin(0, 0);
//             }
//         });

//         // Add overlap check for tome
//         this.physics.add.overlap(this.player, this.tomeGroup, this.collectTome, null, this);

//         // Add overlap check for key
//         this.physics.add.overlap(this.player, this.keyGroup, this.collectKey, null, this);

//         // Add overlap check for lever
//         this.physics.add.overlap(this.player, this.leverGroup, this.pullLever, null, this);
//     }

//     collectTome(player, tomeTile) {
//         // Make the tome invisible
//         this.tome.setVisible(false);

//         // Disable the barClosed layer
//         this.barClosed.setCollisionByExclusion([-1], false);
//         this.barClosed.setVisible(false);
//     }

//     collectKey(player, keyTile) {
//         // Make the key invisible
//         this.keyLayer.setVisible(false);

//         // Disable the doorClose layer
//         this.doorClose.setCollisionByExclusion([-1], false);
//         this.doorClose.setVisible(false);
//     }

//     pullLever(player, leverTile) {
//         // Make the leverUnpulled invisible and leverPulled visible
//         this.leverUnpulled.setVisible(false);
//         this.leverPulled.setVisible(true);

//         // Disable the trapsOn layer and enable the trapsOff layer
//         this.trapsOn.setVisible(false);
//         this.trapsOff.setVisible(true);
//     }

//     update() {
//         const playerSpeed = 300;

//         // Reset player velocity
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


// // Comment: There is a bug that the player goes inside the border after the door




//---------------------------VERSION-5----------------Player-goes-back-to-beginning-when-step-on-the-spike--------//

// export default class gameSceneTutorial extends Phaser.Scene {
//     constructor() {
//         super("gameSceneTutorial");
//     }

//     preload() {
//     }

//     create() {
//         // Set the world bounds to match the size of the tile map
//         this.cameras.main.setBounds(0, 0, 1570, 890);
//         this.cameras.main.setBackgroundColor('#bcdeff');

//         // Creating Tilemap
//         const map = this.make.tilemap({ key: "Tutorial" });
//         const tileset = map.addTilesetImage("Tileset1", 'tiles1');

//         // Create layers
//         const ground = map.createLayer('Ground', tileset, 0, 0);
//         const collision = map.createLayer('Collision', tileset, 0, 0);
//         this.barClosed = map.createLayer('Bar-Tome', tileset, 0, 0);
//         this.tome = map.createLayer('Tome', tileset, 0, 0);
//         const doorOpen = map.createLayer('Finish-Line', tileset, 0, 0);
//         this.doorClose = map.createLayer('Door-Closed', tileset, 0, 0);
//         this.leverUnpulled = map.createLayer('Lever-Unpulled', tileset, 0, 0);
//         this.leverPulled = map.createLayer('Lever-Pulled', tileset, 0, 0);
//         this.keyLayer = map.createLayer('Key', tileset, 0, 0);
//         this.trapsOff = map.createLayer('Traps-Off', tileset, 0, 0);
//         this.trapsOn = map.createLayer('Traps-On', tileset, 0, 0);
//         const background = map.createLayer('Background', tileset, 0, 0);

//         // Create the player sprite and enable physics
//         this.player = this.physics.add.sprite(300, 150, 'player');
//         this.player.setScale(.76);
        
//         // Store the initial player position
//         this.initialPlayerPosition = { x: 300, y: 150 };

//         // Input keys
//         this.cursors = this.input.keyboard.createCursorKeys();

//         // Collision
//         collision.setCollisionByExclusion([-1]);
//         this.doorClose.setCollisionByExclusion([-1]);
//         this.barClosed.setCollisionByExclusion([-1]);
//         this.trapsOn.setCollisionByExclusion([-1]);

//         // Enable Collision
//         this.physics.add.collider(this.player, collision);
//         this.physics.add.collider(this.player, this.doorClose);
//         this.physics.add.collider(this.player, this.barClosed);
//         this.physics.add.collider(this.player, this.trapsOn, this.hitTrap, null, this);

//         // Calculate scale ratio to fit the scene size
//         const mapWidth = map.widthInPixels;
//         const mapHeight = map.heightInPixels;

//         const scaleX = 1580 / mapWidth;
//         const scaleY = 900 / mapHeight;

//         // Set scale for each layer
//         ground.setScale(scaleX, scaleY);
//         collision.setScale(scaleX, scaleY);
//         this.barClosed.setScale(scaleX, scaleY);
//         this.tome.setScale(scaleX, scaleY);
//         doorOpen.setScale(scaleX, scaleY);
//         this.doorClose.setScale(scaleX, scaleY);
//         this.leverUnpulled.setScale(scaleX, scaleY);
//         this.leverPulled.setScale(scaleX, scaleY);
//         this.keyLayer.setScale(scaleX, scaleY);
//         this.trapsOff.setScale(scaleX, scaleY);
//         this.trapsOn.setScale(scaleX, scaleY);
//         background.setScale(scaleX, scaleY);

//         // Make the 'Lever-Pulled' layer and trapsOff invisible
//         this.leverPulled.setVisible(false);
//         this.trapsOff.setVisible(false);

//         // Center the camera on the scaled map
//         const scaledMapWidth = mapWidth * scaleX;
//         const scaledMapHeight = mapHeight * scaleY;

//         const screenWidth = 1580; // Width of your scene
//         const screenHeight = 900; // Height of your scene

//         this.cameras.main.setSize(screenWidth, screenHeight);
//         this.cameras.main.centerOn(scaledMapWidth / 2, scaledMapHeight / 2);

//         // Make the camera follow the player
//         this.cameras.main.startFollow(this.player);

//         // Set initial zoom level (e.g., 2x zoom)
//         this.cameras.main.setZoom(1);

//         // Create an Arcade Physics Group for tome tiles
//         this.tomeGroup = this.physics.add.staticGroup();
//         this.tome.forEachTile(tile => {
//             if (tile.index !== -1) {
//                 const tomeTile = this.tomeGroup.create(tile.getCenterX(), tile.getCenterY(), null);
//                 tomeTile.body.width = tile.width;
//                 tomeTile.body.height = tile.height;
//                 tomeTile.setOrigin(0, 0);
//             }
//         });

//         // Create an Arcade Physics Group for key tiles
//         this.keyGroup = this.physics.add.staticGroup();
//         this.keyLayer.forEachTile(tile => {
//             if (tile.index !== -1) {
//                 const keyTile = this.keyGroup.create(tile.getCenterX(), tile.getCenterY(), null);
//                 keyTile.body.width = tile.width;
//                 keyTile.body.height = tile.height;
//                 keyTile.setOrigin(0, 0);
//             }
//         });

//         // Create an Arcade Physics Group for lever tiles
//         this.leverGroup = this.physics.add.staticGroup();
//         this.leverUnpulled.forEachTile(tile => {
//             if (tile.index !== -1) {
//                 const leverTile = this.leverGroup.create(tile.getCenterX(), tile.getCenterY(), null);
//                 leverTile.body.width = tile.width;
//                 leverTile.body.height = tile.height;
//                 leverTile.setOrigin(0, 0);
//             }
//         });

//         // Add overlap check for tome
//         this.physics.add.overlap(this.player, this.tomeGroup, this.collectTome, null, this);

//         // Add overlap check for key
//         this.physics.add.overlap(this.player, this.keyGroup, this.collectKey, null, this);

//         // Add overlap check for lever
//         this.physics.add.overlap(this.player, this.leverGroup, this.pullLever, null, this);
//     }

//     collectTome(player, tomeTile) {
//         // Make the tome invisible
//         this.tome.setVisible(false);

//         // Disable the barClosed layer
//         this.barClosed.setCollisionByExclusion([-1], false);
//         this.barClosed.setVisible(false);
//     }

//     collectKey(player, keyTile) {
//         // Make the key invisible
//         this.keyLayer.setVisible(false);

//         // Disable the doorClose layer
//         this.doorClose.setCollisionByExclusion([-1], false);
//         this.doorClose.setVisible(false);
//     }

//     pullLever(player, leverTile) {
//         // Make the leverUnpulled invisible and leverPulled visible
//         this.leverUnpulled.setVisible(false);
//         this.leverPulled.setVisible(true);

//         // Disable the trapsOn layer and enable the trapsOff layer
//         this.trapsOn.setCollisionByExclusion([-1], false);
//         this.trapsOn.setVisible(false);
//         this.trapsOff.setVisible(true);
//     }

//     hitTrap(player, trapTile) {
//         // Reset player position to the initial position only if trapsOn is visible
//         if (this.trapsOn.visible) {
//             this.player.setPosition(this.initialPlayerPosition.x, this.initialPlayerPosition.y);
//         }
//     }

//     update() {
//         const playerSpeed = 300;

//         // Reset player velocity
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


//----------VERSION-6--When-player-hits-doorOpen-player-goes-to-Level-1-------//

// export default class gameSceneTutorial extends Phaser.Scene {
//     constructor() {
//         super("gameSceneTutorial");
//     }

//     preload() {
//     }

//     create() {
//         // Set the world bounds to match the size of the tile map
//         this.cameras.main.setBounds(0, 0, 1570, 890);
//         this.cameras.main.setBackgroundColor('#bcdeff');

//         // Creating Tilemap
//         const map = this.make.tilemap({ key: "Tutorial" });
//         const tileset = map.addTilesetImage("Tileset1", 'tiles1');

//         // Create layers
//         const ground = map.createLayer('Ground', tileset, 0, 0);
//         const collision = map.createLayer('Collision', tileset, 0, 0);
//         this.barClosed = map.createLayer('Bar-Tome', tileset, 0, 0);
//         this.tome = map.createLayer('Tome', tileset, 0, 0);
//         const doorOpen = map.createLayer('Finish-Line', tileset, 0, 0);
//         this.doorClose = map.createLayer('Door-Closed', tileset, 0, 0);
//         this.leverUnpulled = map.createLayer('Lever-Unpulled', tileset, 0, 0);
//         this.leverPulled = map.createLayer('Lever-Pulled', tileset, 0, 0);
//         this.keyLayer = map.createLayer('Key', tileset, 0, 0);
//         this.trapsOff = map.createLayer('Traps-Off', tileset, 0, 0);
//         this.trapsOn = map.createLayer('Traps-On', tileset, 0, 0);
//         const background = map.createLayer('Background', tileset, 0, 0);

//         // Create the player sprite and enable physics
//         this.player = this.physics.add.sprite(300, 150, 'player');
//         this.player.setScale(.76);
        
//         // Store the initial player position
//         this.initialPlayerPosition = { x: 300, y: 150 };

//         // Input keys
//         this.cursors = this.input.keyboard.createCursorKeys();

//         // Collision
//         collision.setCollisionByExclusion([-1]);
//         this.doorClose.setCollisionByExclusion([-1]);
//         this.barClosed.setCollisionByExclusion([-1]);
//         this.trapsOn.setCollisionByExclusion([-1]);
//         doorOpen.setCollisionByExclusion([-1]);

//         // Enable Collision
//         this.physics.add.collider(this.player, collision);
//         this.physics.add.collider(this.player, this.doorClose);
//         this.physics.add.collider(this.player, this.barClosed);
//         this.physics.add.collider(this.player, this.trapsOn, this.hitTrap, null, this);
//         this.physics.add.collider(this.player, doorOpen, this.completeLevel, null, this);

//         // Calculate scale ratio to fit the scene size
//         const mapWidth = map.widthInPixels;
//         const mapHeight = map.heightInPixels;

//         const scaleX = 1580 / mapWidth;
//         const scaleY = 900 / mapHeight;

//         // Set scale for each layer
//         ground.setScale(scaleX, scaleY);
//         collision.setScale(scaleX, scaleY);
//         this.barClosed.setScale(scaleX, scaleY);
//         this.tome.setScale(scaleX, scaleY);
//         doorOpen.setScale(scaleX, scaleY);
//         this.doorClose.setScale(scaleX, scaleY);
//         this.leverUnpulled.setScale(scaleX, scaleY);
//         this.leverPulled.setScale(scaleX, scaleY);
//         this.keyLayer.setScale(scaleX, scaleY);
//         this.trapsOff.setScale(scaleX, scaleY);
//         this.trapsOn.setScale(scaleX, scaleY);
//         background.setScale(scaleX, scaleY);

//         // Make the 'Lever-Pulled' layer and trapsOff invisible
//         this.leverPulled.setVisible(false);
//         this.trapsOff.setVisible(false);

//         // Center the camera on the scaled map
//         const scaledMapWidth = mapWidth * scaleX;
//         const scaledMapHeight = mapHeight * scaleY;

//         const screenWidth = 1580; // Width of your scene
//         const screenHeight = 900; // Height of your scene

//         this.cameras.main.setSize(screenWidth, screenHeight);
//         this.cameras.main.centerOn(scaledMapWidth / 2, scaledMapHeight / 2);

//         // Make the camera follow the player
//         this.cameras.main.startFollow(this.player);

//         // Set initial zoom level (e.g., 2x zoom)
//         this.cameras.main.setZoom(3.5);

//         // Create an Arcade Physics Group for tome tiles
//         this.tomeGroup = this.physics.add.staticGroup();
//         this.tome.forEachTile(tile => {
//             if (tile.index !== -1) {
//                 const tomeTile = this.tomeGroup.create(tile.getCenterX(), tile.getCenterY(), null);
//                 tomeTile.body.width = tile.width;
//                 tomeTile.body.height = tile.height;
//                 tomeTile.setOrigin(0, 0);
//             }
//         });

//         // Create an Arcade Physics Group for key tiles
//         this.keyGroup = this.physics.add.staticGroup();
//         this.keyLayer.forEachTile(tile => {
//             if (tile.index !== -1) {
//                 const keyTile = this.keyGroup.create(tile.getCenterX(), tile.getCenterY(), null);
//                 keyTile.body.width = tile.width;
//                 keyTile.body.height = tile.height;
//                 keyTile.setOrigin(0, 0);
//             }
//         });

//         // Create an Arcade Physics Group for lever tiles
//         this.leverGroup = this.physics.add.staticGroup();
//         this.leverUnpulled.forEachTile(tile => {
//             if (tile.index !== -1) {
//                 const leverTile = this.leverGroup.create(tile.getCenterX(), tile.getCenterY(), null);
//                 leverTile.body.width = tile.width;
//                 leverTile.body.height = tile.height;
//                 leverTile.setOrigin(0, 0);
//             }
//         });

//         // Add overlap check for tome
//         this.physics.add.overlap(this.player, this.tomeGroup, this.collectTome, null, this);

//         // Add overlap check for key
//         this.physics.add.overlap(this.player, this.keyGroup, this.collectKey, null, this);

//         // Add overlap check for lever
//         this.physics.add.overlap(this.player, this.leverGroup, this.pullLever, null, this);
//     }

//     collectTome(player, tomeTile) {
//         // Make the tome invisible
//         this.tome.setVisible(false);

//         // Disable the barClosed layer
//         this.barClosed.setCollisionByExclusion([-1], false);
//         this.barClosed.setVisible(false);
//     }

//     collectKey(player, keyTile) {
//         // Make the key invisible
//         this.keyLayer.setVisible(false);

//         // Disable the doorClose layer
//         this.doorClose.setCollisionByExclusion([-1], false);
//         this.doorClose.setVisible(false);
//     }

//     pullLever(player, leverTile) {
//         // Make the leverUnpulled invisible and leverPulled visible
//         this.leverUnpulled.setVisible(false);
//         this.leverPulled.setVisible(true);

//         // Disable the trapsOn layer and enable the trapsOff layer
//         this.trapsOn.setCollisionByExclusion([-1], false);
//         this.trapsOn.setVisible(false);
//         this.trapsOff.setVisible(true);
//     }

//     hitTrap(player, trapTile) {
//         // Reset player position to the initial position only if trapsOn is visible
//         if (this.trapsOn.visible) {
//             this.player.setPosition(this.initialPlayerPosition.x, this.initialPlayerPosition.y);
//         }
//     }

//     completeLevel(player, doorTile) {
//         // Transition to LevelOneBootScene
//         this.scene.start("LevelOneBootScene");
//     }

//     update() {
//         const playerSpeed = 100;

//         // Reset player velocity
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


//---------------VERSION-7-----Black-surroundings--------------//
export default class gameSceneTutorial extends Phaser.Scene {
    constructor() {
        super("gameSceneTutorial");
    }

    preload() {
    }

    create() {
        // Set the world bounds to match the size of the tile map
        this.cameras.main.setBounds(0, 0, 1580, 900);
        this.cameras.main.setBackgroundColor('#bcdeff');

        // Creating Tilemap
        const map = this.make.tilemap({ key: "Tutorial" });
        const tileset = map.addTilesetImage("Tileset1", 'tiles1');

        // Create layers
        const ground = map.createLayer('Ground', tileset, 0, 0);
        const collision = map.createLayer('Collision', tileset, 0, 0);
        this.barClosed = map.createLayer('Bar-Tome', tileset, 0, 0);
        this.tome = map.createLayer('Tome', tileset, 0, 0);
        const doorOpen = map.createLayer('Finish-Line', tileset, 0, 0);
        this.doorClose = map.createLayer('Door-Closed', tileset, 0, 0);
        this.leverUnpulled = map.createLayer('Lever-Unpulled', tileset, 0, 0);
        this.leverPulled = map.createLayer('Lever-Pulled', tileset, 0, 0);
        this.keyLayer = map.createLayer('Key', tileset, 0, 0);
        this.trapsOff = map.createLayer('Traps-Off', tileset, 0, 0);
        this.trapsOn = map.createLayer('Traps-On', tileset, 0, 0);
        const background = map.createLayer('Background', tileset, 0, 0);

        // Create the player sprite and enable physics
        this.player = this.physics.add.sprite(300, 150, 'player');
        this.player.setScale(.76);
        
        // Store the initial player position
        this.initialPlayerPosition = { x: 300, y: 150 };

        // Input keys
        this.cursors = this.input.keyboard.createCursorKeys();

        // Collision
        collision.setCollisionByExclusion([-1]);
        this.doorClose.setCollisionByExclusion([-1]);
        this.barClosed.setCollisionByExclusion([-1]);
        this.trapsOn.setCollisionByExclusion([-1]);
        doorOpen.setCollisionByExclusion([-1]);

        // Enable Collision
        this.physics.add.collider(this.player, collision);
        this.physics.add.collider(this.player, this.doorClose);
        this.physics.add.collider(this.player, this.barClosed);
        this.physics.add.collider(this.player, this.trapsOn, this.hitTrap, null, this);
        this.physics.add.collider(this.player, doorOpen, this.completeLevel, null, this);

        // Calculate scale ratio to fit the scene size
        const mapWidth = map.widthInPixels;
        const mapHeight = map.heightInPixels;

        const scaleX = 1580 / mapWidth;
        const scaleY = 900 / mapHeight;

        // Set scale for each layer
        ground.setScale(scaleX, scaleY);
        collision.setScale(scaleX, scaleY);
        this.barClosed.setScale(scaleX, scaleY);
        this.tome.setScale(scaleX, scaleY);
        doorOpen.setScale(scaleX, scaleY);
        this.doorClose.setScale(scaleX, scaleY);
        this.leverUnpulled.setScale(scaleX, scaleY);
        this.leverPulled.setScale(scaleX, scaleY);
        this.keyLayer.setScale(scaleX, scaleY);
        this.trapsOff.setScale(scaleX, scaleY);
        this.trapsOn.setScale(scaleX, scaleY);
        background.setScale(scaleX, scaleY);

        // Make the 'Lever-Pulled' layer and trapsOff invisible
        this.leverPulled.setVisible(false);
        this.trapsOff.setVisible(false);

        // Center the camera on the scaled map
        const scaledMapWidth = mapWidth * scaleX;
        const scaledMapHeight = mapHeight * scaleY;

        const screenWidth = 1580; // Width of your scene
        const screenHeight = 900; // Height of your scene

        this.cameras.main.setSize(screenWidth, screenHeight);
        this.cameras.main.centerOn(scaledMapWidth / 2, scaledMapHeight / 2);

        // Make the camera follow the player
        this.cameras.main.startFollow(this.player);

        // Set initial zoom level (e.g., 2x zoom)
        this.cameras.main.setZoom(3.5);

        // Create an Arcade Physics Group for tome tiles
        this.tomeGroup = this.physics.add.staticGroup();
        this.tome.forEachTile(tile => {
            if (tile.index !== -1) {
                const tomeTile = this.tomeGroup.create(tile.getCenterX(), tile.getCenterY(), null);
                tomeTile.body.width = tile.width;
                tomeTile.body.height = tile.height;
                tomeTile.setOrigin(0, 0);
            }
        });

        // Create an Arcade Physics Group for key tiles
        this.keyGroup = this.physics.add.staticGroup();
        this.keyLayer.forEachTile(tile => {
            if (tile.index !== -1) {
                const keyTile = this.keyGroup.create(tile.getCenterX(), tile.getCenterY(), null);
                keyTile.body.width = tile.width;
                keyTile.body.height = tile.height;
                keyTile.setOrigin(0, 0);
            }
        });

        // Create an Arcade Physics Group for lever tiles
        this.leverGroup = this.physics.add.staticGroup();
        this.leverUnpulled.forEachTile(tile => {
            if (tile.index !== -1) {
                const leverTile = this.leverGroup.create(tile.getCenterX(), tile.getCenterY(), null);
                leverTile.body.width = tile.width;
                leverTile.body.height = tile.height;
                leverTile.setOrigin(0, 0);
            }
        });

        // Add overlap check for tome
        this.physics.add.overlap(this.player, this.tomeGroup, this.collectTome, null, this);

        // Add overlap check for key
        this.physics.add.overlap(this.player, this.keyGroup, this.collectKey, null, this);

        // Add overlap check for lever
        this.physics.add.overlap(this.player, this.leverGroup, this.pullLever, null, this);

        // Create a dark overlay
        this.darkOverlay = this.add.graphics({ fillStyle: { color: 0x000000 } });
        this.darkOverlay.fillRect(0, 0, scaledMapWidth, scaledMapHeight);
        this.darkOverlay.alpha = 0.9;

        // Create a mask to light up the area around the player
        this.lightMask = this.make.graphics();
        this.lightMask.fillStyle(0xffffff);
        this.lightMask.fillCircle(0, 0, 150); // Adjust the radius as needed

        // Apply the mask to the dark overlay
        this.darkOverlay.mask = new Phaser.Display.Masks.BitmapMask(this, this.lightMask);
        this.darkOverlay.mask.invertAlpha = true; // Invert the mask to show light around the player
    }

    collectTome(player, tomeTile) {
        // Make the tome invisible
        this.tome.setVisible(false);

        // Disable the barClosed layer
        this.barClosed.setCollisionByExclusion([-1], false);
        this.barClosed.setVisible(false);
    }

    collectKey(player, keyTile) {
        // Make the key invisible
        this.keyLayer.setVisible(false);

        // Disable the doorClose layer
        this.doorClose.setCollisionByExclusion([-1], false);
        this.doorClose.setVisible(false);
    }

    pullLever(player, leverTile) {
        // Make the leverUnpulled invisible and leverPulled visible
        this.leverUnpulled.setVisible(false);
        this.leverPulled.setVisible(true);

        // Disable the trapsOn layer and enable the trapsOff layer
        this.trapsOn.setCollisionByExclusion([-1], false);
        this.trapsOn.setVisible(false);
        this.trapsOff.setVisible(true);
    }

    hitTrap(player, trapTile) {
        // Reset player position to the initial position only if trapsOn is visible
        if (this.trapsOn.visible) {
            this.player.setPosition(this.initialPlayerPosition.x, this.initialPlayerPosition.y);
        }
    }

    completeLevel(player, doorTile) {
        // Transition to LevelOneBootScene
        this.scene.start("LevelOneBootScene");
    }

    update() {
        const playerSpeed = 100;

        // Reset player velocity
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

        // Update the light mask position to follow the player
        this.lightMask.setPosition(this.player.x, this.player.y);
    }
}


