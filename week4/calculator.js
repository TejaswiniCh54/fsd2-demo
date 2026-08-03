import { PI } from "./Constants";
export class Calculator {
    static areaOfCircle(radius) {
        return PI * radius * radius;
    }
    static circumference(radius) {
        return 2 * PI * radius;
    }
}
