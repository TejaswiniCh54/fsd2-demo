import { PI } from "./Constants"

export class Calculator {
  public static areaOfCircle(radius: number): number {
    return PI * radius * radius
  }

  public static circumference(radius: number): number {
    return 2 * PI * radius
  }
}
