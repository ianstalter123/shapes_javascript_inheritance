var Square = require("../src/square");

var square;

describe("Square", function() {
  beforeEach(function() {
    square = new Square(2, "red");
  });

  describe("Area", function() {
    it("should be 4 for a square", function() {
      expect(square.area()).toEqual(4);
    });
  });

  describe("Perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.perimeter()).toEqual(8);
    });
  });

  describe("GetRGB", function() {
    it("should be (0,0,0) for a square with color red", function() {
      expect(square.getRGB()).toEqual("rgb(0,0,0)");
    });
  });

  describe("toString", function() {
    it("should be sides and color for a square with side 2", function() {
      expect(square.toString()).toEqual("[Shape sides:2, color:red ]");
    });
  });

  // Write more specs!!
});
