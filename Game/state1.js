var demo = {};
var speed = 3;
var adam;

demo.state1 = function(){};

demo.state1.prototype = {
   preload: function(){
       game.load.image('maze','Assets/background/maze.png');
       game.load.spritesheet('adam','Assets/spritesheets/adamSpritesheet.png',240,370);
       
      
     },
    
    create: function(){
         game.world.setBounds(0,0, 5000,4500);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
         var maze = game.add.sprite(350,350,'maze');
        adam = game.add.sprite(390,380,'adam');
        
         game.physics.enable(adam);
        
        adam.body.collideWorldBounds = true;
        
        adam.scale.setTo(0.1,0.1);
        
        adam.animations.add('walk',[0,1,2,3,4]);
        
        
    },
    
     update: function(){
        
       if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
           adam.animations.play('walk');
           adam.scale.setTo(0.1,0.1);
           adam.x = adam.x + speed; 
       } 
       if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
           adam.animations.play('walk');
           adam.scale.setTo(-0.1,0.1);
           adam.x = adam.x - speed;
       }
       if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
           adam.animations.play('walk');
           adam.y = adam.y - speed;
       }
       if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            adam.animations.play('walk');
           adam.y = adam.y + speed;
       }
    }
};
    
    
    