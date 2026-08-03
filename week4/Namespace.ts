namespace Name {
  export const PI = 3.14

  export function square(x: number): number {
    return x * x
  }

  export class Circle { 
    constructor(public radius: number) {}
    area(): number {
      return Name.PI * this.radius * this.radius
    }
  }
}
const cir = new Name.Circle(5)
console.log(cir.area())
console.log(Name.square(4))
