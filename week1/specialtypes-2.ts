let regNo:any=23;
console.log(regNo);
regNo="24B01A4223";
console.log(regNo);
let input: unknown = "Hello World";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}

if (typeof input === "number") {
    console.log(input + 10); 
}
function fun(message: string): void {
    console.log("Log:", message);
}

fun("Hi Teja");
