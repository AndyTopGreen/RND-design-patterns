var WallOffset = 30;
var Splatter = function() {
    this.x = width/2;
    this.y = height/2;
};

Splatter.prototype.col = function() {
    var generator = new Random(1);
    this.num = generator.nextGaussian();
    for (var i = 0; i < 20; i++) {
        this.r = random(0, 30);
        this.g = random(30, 220);
        this.b = random(40, 140);
    }
}; //designed for green palette
Splatter.prototype.display = function() {
    strokeWeight(10);
    stroke(this.r, this.g, this.b); //there must be a better way to do this?
    point(this.x, this.y);
};

Splatter.prototype.walk = function() {
    var StepSize = 10;
    var Dir = random(1, 18) / this.num;
    Dir = Math.floor(Dir);
    
        if (Dir === 3 && this.x < width + WallOffset) {
            this.x += 12;
        }
        else if (Dir === 6 && this.x > WallOffset) {
            this.x -= 12;
        }
        else if (Dir === 9 && this.y < height + WallOffset) {
            this.y += 12;
        }      
        else if (Dir === 12 && this.y > WallOffset) {
            this.y -= 12;
        }
}; //designed to walk in grid (use WallOffset to control bounds)

var s = new Splatter();

var draw = function() {
     s.walk();
     s.col();
     s.display();
};
