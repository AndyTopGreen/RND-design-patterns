var generator = new Random(1);

var Dot = function(config) {
    this.x = config.x || width/2;
    this.y = config.y || height/2;
    this.color = color(this.x, this.y);
};

Dot.prototype.display = function() {
    stroke(this.color);
    point(this.x, this.y);
};

Dot.prototype.move = function() {
    var standardDeviation = 1;
    var mean = 0;
    
    var xMove = standardDeviation*generator.nextGaussian()+mean;
    var yMove = standardDeviation*generator.nextGaussian()+mean;
    
    this.x += xMove;
    this.y += yMove;
    
    this.color = color(this.x, this.y, 0);
    strokeWeight(xMove*yMove+2);
};

var dots = [new Dot({})];

var mouseClicked = function() {
    dots.push(new Dot({x: mouseX, y: mouseY}));
};

var draw = function() {
    for(var i = 0; i < dots.length; i++) {
        dots[i].display();
        dots[i].move();
    }
};

//Created by: drnaia100
