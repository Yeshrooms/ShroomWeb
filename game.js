class game extends Phaser.Scene{
    constructor(){
        super("game");
    }
    preload(){
        this.load.image("background", "pixil-frame-0-2.png");
        this.load.image("player", "pxiil-frame-0.png");
    }
    create(){
        this.add.tileSprite(,0,0,1000,1000,"background").setScale(3);
        this.player = this.physics.add.sprite(100,100,"player").setScale(3);
        this.keys = this.input.keyboard.createCursorKeys()
    }

    update(){
        this.player.setVelocity(0);
        if(this.keys.left.isDown){
            this.player.setVelocityX(-100);
        } else if (this.keys.right.isDown){
            this.player.setVelocityX(100);
        }
        
        if (this.keys.up.isDown){
            this.player.setVelocityY(100);
        } else if (this.keys.down.isDown){
            this.player.setVelocityY(-100);
        }
        this.player.body.velocity.normalize().scale(100);

    }
}
