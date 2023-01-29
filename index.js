// Your code here

class Polygon{
    constructor(array) {
        this.array = array;
    }

    get countSides() {
        return this.array.length;
    }

    get perimeter() {
        let sum = 0;

        for (let i = 0; i < this.array.length; i++) {
            sum += this.array[i];
        }
        return sum;
    }
}

class Triangle extends Polygon {
    get isValid() {
  
        for (let i = 0; i < this.array.length; i++) {
          let s1 = this.array[i];
          let s2 = this.array[i + 1];
          let s3 = this.array[i + 2];
  
          if (s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1) {
            return true;
          }
          else {
            return false;
          }
        }
      
    }
  }

  class Square extends Polygon {

    get isValid() {
        for (let i = 0; i < this.array.length; i++) {
            if (this.perimeter / this.countSides === this.array[i]) {
              return true;
            }
            else {
              return false;
            }
          }
    }

    get area() {

        if (this.isValid){
            return this.array[0] * this.array[0];
        }
    
}
  }