var geradorColor = new Random(1);

var Walker = function(x, y, media, desvio) {
    this.x = x;
    this.y = y;
    this.media = media || 0;
    this.desvio = desvio || 10; 
};

Walker.prototype.walk = function(color){
    var x = geradorColor.nextGaussian();
    var y = geradorColor.nextGaussian();
    this.x += x * this.desvio + this.media;
    this.y += y * this.desvio + this.media;
    if (this.y > height || this.y < 0){ this.y = 200; }
    if (this.x > width || this.x < 0){ this.x = 200; }
    this.draw(color);
};

Walker.prototype.draw = function(color){
    strokeWeight(6);
    stroke(color);
    point(this.x, this.y);
};
    
var ChanceColor = function(r, g, b){
    var desvio = 30;
    var media  = 180;
    var _r = geradorColor.nextGaussian() * desvio + r;
    var _g = geradorColor.nextGaussian() * desvio + g;
    var _b = geradorColor.nextGaussian() * desvio + b;
    
    return color(_r, _g, _b);
};

var victor = new Walker(200,200, 0, 4);
var biel   = new Walker(200,200, 0, 4);
var glenda = new Walker(200,200, 0, 4);
var winston = new Walker(200,200, 0, 3);
draw = function() {
    victor.walk(ChanceColor(100, 150, 200));
    biel.walk(ChanceColor(150, 230, 100));
    glenda.walk(ChanceColor(230, 100, 100));
    winston.walk(ChanceColor(230, 200, 200));
};
