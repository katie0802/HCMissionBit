var game = new Phaser.Game(1500,1000,Phaser.AUTO);

game.state.add('state1',demo.state1);
game.state.start('state1');