var game = new Phaser.Game(0,0,Phaser.AUTO);

game.state.add('tilemap.js',demo.tilemap.js);
game.state.start('tilemap.js');