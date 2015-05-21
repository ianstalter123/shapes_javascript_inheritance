var Rectangle = require("../src/rectangle");

var rectangle;

describe("Rectangle", function() {
  beforeEach(function() {
    rectangle = new Rectangle(4,6, "blue");
  });

  describe("Area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(rectangle.area()).toEqual(24);
    });
  });

  describe("Perimeter", function() {
    it("should be 20 for a rect with side lengths 4,6", function() {
      expect(rectangle.perimeter()).toEqual(20);
    });
  });

  describe("GetRGB", function() {
    it("should be (0,0,0)for a square with color red", function() {
      expect(rectangle.getRGB()).toEqual("rgb(0,0,0)");
    });
  });

    describe("draw", function() {
    it("should be '***,***' for a rectangle with side 4 and 6", function() {
      expect(rectangle.draw()).toEqual("******\n******\n******\n******\n");
    });
  });

  // Write more specs!!
});
