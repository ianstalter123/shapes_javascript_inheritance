var Shape = require("./shape");

function Square(side,color) {
    Shape.call(this);
    this.side = side;
    this.color = color;   
}

Square.prototype = Object.create(Shape.prototype);

Square.prototype.area = function(side,color) {
  return this.side * this.side;
};

Square.prototype.perimeter = function(side,color) {
  return this.side * 4;
};

Square.prototype.draw = function(side,color) {
  var str = "";
  for (var i = 0; i < this.side; i++)
  {
  	for (var j = 0; j < this.side; j++)
  	{
  		str += "*";
  	}
  	str += "\n";
  }
  return str;
};

Square.prototype.toString = function() {
  return "[Shape sides:" + this.side + ", color:" + this.color +" ]"
};

// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.

module.exports = Square;
