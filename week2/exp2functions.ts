//parameter & return type
function add(a:number,b:number):number{
return a+b;
}
//default parameters
function displayStudentDetails(name:string,college:string=`SVECW`):void{
console.log(`Name :${name} is studying ${college}`);
}
//optional parameters
function Name(name:string,surname?:string):void{
console.log(name);
if(surname)
console.log(surname);
}
//restparameters
function markssum(...marks:number[]):number{
let sum=0;
for(let i=0;i<marks.length;i++)
sum+=marks[i];
return sum;
}

console.log(`addition: ${add(5,3)}`);
console.log(displayStudentDetails("teja"));
console.log(displayStudentDetails("Reeshma","SRKR"));
console.log(Name("teja"));
console.log(Name("teja","ch"));
console.log(markssum(10,20,30,10));
