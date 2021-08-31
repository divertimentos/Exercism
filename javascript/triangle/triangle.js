export class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.a = sides[0];
    this.b = sides[1];
    this.c = sides[2];
  }

  get isTriangle() {
    return (
      this.a + this.b > this.c &&
      this.a + this.c > this.b &&
      this.b + this.c > this.a
    );
  }

  get sumSides() {
    return this.sides.reduce((sum, curr) => sum + curr);
  }

  get isEquilateral() {
    return this.sumSides > 0 && this.a === this.b && this.b === this.c;
  }

  get isIsosceles() {
    if (this.isTriangle) {
      return (
        this.sides.sort()[0] == this.sides.sort()[1] ||
        this.sides.sort()[1] == this.sides.sort()[2]
      );
    }

    return false;
  }

  get isScalene() {
    if (this.isTriangle) {
      return !this.isEquilateral && !this.isIsosceles;
    }

    return false;
  }
}
