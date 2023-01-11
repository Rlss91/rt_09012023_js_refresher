import Point from "./Point.js";
class Rect {
  point;
  #w; // private
  #h; // private
  #a; //area - private
  #p; //per - private
  constructor(point, w, h) {
    this.point = point;
    this.#w = w;
    this.#h = h;
    this.#a = this.calcArea();
    this.#p = this.calcPer();
  }
  calcArea() {
    return this.#w * this.#h;
  }
  calcPer() {
    return (this.#w + this.#h) * 2;
  }
  set w(width) {
    if (width < 0) {
      return;
    }
    this.#w = width;
    this.#a = this.calcArea();
    this.#p = this.calcPer();
  }
  set h(height) {
    if (height < 0) {
      return;
    }
    this.#h = height;
    this.#a = this.calcArea();
    this.#p = this.calcPer();
  }
  get w() {
    return this.#w;
  }
  get h() {
    return this.#h;
  }
  get a() {
    return this.#a;
  }
  get p() {
    return this.#p;
  }
}

const rect = new Rect(new Point(0, 0), 5, 5);
/*
    let rect = {
        point:{
            x:0,
            y:0
        },
        w:5,
        h:5,
        calcArea: ()=>{
            return this.w * this.h;
        },
        calcPer: ()=>{
            return (this.w + this.h) * 2;
        }
    }
*/
// console.log("Area", rect.calcArea());
// console.log("rect.a", rect.a);
rect.w = 10;
// rect.p = rect.calcPer();
// rect.a = rect.calcArea();
console.log("a", rect.a);
// rect.a = 100;
console.log("🚀 ~ file: Rect.js:42 ~ rect", rect);

//const rect2 = new Rect(0, 0, 10, 5);
