class Polygon {
  constructor(arr) {
    this._sides = arr
  }

  get countSides(){
    return this._sides.length
  }

  get perimeter(){
    return this._sides.reduce((acc, curr) => acc + curr)
  }
}

class Triangle extends Polygon {
  get isValid(){
    if (this.countSides !== 3){
      return false
    }
    switch (true){
      case this._sides[0] + this._sides[1] <= this._sides[2]:
      case this._sides[0] + this._sides[2] <= this._sides[1]:
      case this._sides[1] + this._sides[2] <= this._sides[0]:
        return false;
      default:
        return true;
    }
  }
}

class Square extends Polygon {
  get isValid(){
    if (this.countSides !== 4){
      return false
    }
    return this._sides.every((elem) => elem === this._sides[0])
  }
  get area(){
    return this._sides[0] ** 2
  }
}