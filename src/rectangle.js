var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.
function Rectangle(width,height,color) {
    Shape.call(this);
    this.height = height;
    this.width = width;
    this.color = color;   
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.area = function(width,height) {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function(width,height) {
  return this.width * 2 + this.height * 2;
};

Rectangle.prototype.draw = function(width,height) {
  var str = "";
  for (var i = 0; i < this.width; i++)
  {
  	for (var j = 0; j < this.height; j++)
  	{
  		str += "*";
  	}
  	str += "\n";
  }
  return str;
};

module.exports = Rectangle;
