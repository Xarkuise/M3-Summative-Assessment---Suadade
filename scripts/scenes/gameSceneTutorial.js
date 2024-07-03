export default class gameSceneTutorial extends Phaser.Scene {
    constructor() {
        super("gameSceneTutorial");
    }
    preload() {           
    }

    create() {
        // Set the world bounds to match the size of the tile map
        this.cameras.main.setBounds(0, 0, 512, 512);
        this.cameras.main.setBackgroundColor('#bcdeff');

        // Creating Tilemap
        const map = this.make.tilemap({ key: "map" });
        const tileset = map.addTilesetImage("Tileset1", 'tiles');
        const ground = map.createLayer('Ground', tileset, 0, 0);
        const collision = map.createLayer('Collision', tileset, 0, 0);
        const barClosed = map.createLayer('Bar-Tome', tileset, 0, 0);
        const tome = map.createLayer('Tome', tileset, 0, 0);
        const doorOpen = map.createLayer('Finish-Line', tileset, 0, 0);
        const doorClose = map.createLayer('Door-Closed', tileset, 0,0);
        const leverUnpulled = map.createLayer('Lever-Unpulled', tileset, 0, 0);
        const leverPulled = map.createLayer('Lever-Pulled', tileset, 0, 0);
        const key = map.createLayer('Key', tileset, 0, 0);
        const trapsOff = map.createLayer('Traps-Off', tileset, 0, 0);
        const trapsOn = map.createLayer('Traps-On', tileset, 0, 0);
        const background = map.createLayer('Background', tileset, 0, 0);
    
        
        // Make the 'Lever-Pulled' layer invisible
        leverPulled.setVisible(false);

    }

    update() {
  
    }

 }