var demo = {};


demo.state0 = function(){};

demo.state0.prototype = {
    
   preload: function(){
       game.load.image('mazes','Assets/background/maze.png');
       game.load.spritesheet('adam','Assets/spritesheets/adamSpritesheet.png',240,370);
       
       
     },
    
    create: function(){
         game.world.setBounds(0,0, 2013,1000);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
         var mazes = game.add.sprite(0,0,'mazes');
        adam = game.add.sprite(0,450,'adam');
        
         game.physics.enable(adam);
        
        adam.body.collideWorldBounds = true;
        
        adam.scale.setTo(0.7,0.7);
        
        adam.animations.add('walk',[0,1,2,3,4]);
        
    },
        
        
        
    update: function(){
        
       if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
           adam.animations.play('walk');
           adam.scale.setTo(0.7,0.7);
           adam.x = adam.x + speed; 
       } 
       if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
           adam.animations.play('walk');
           adam.scale.setTo(-0.7,0.7);
           adam.x = adam.x - speed;
       }
       if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
           
           if(adam.y < 200){
               adam.y = 200;
               
           }
           adam.animations.play('walk');
           adam.y = adam.y - speed;
       }
       if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            adam.animations.play('walk');
           adam.y = adam.y + speed;
       }
    }
};
   