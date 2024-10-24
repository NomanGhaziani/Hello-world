console.log("\nHello Word\n");
let a1 = "Country";
let b1 = "Pakistan";
console.log(a1 , b1);
let c1 = 10;
let d = 20;
let e = 30;
let f = 40;
console.log(c1 + d + e + f);
console.log(c1 + d - e * f);
console.log(5 > 2)
console.log(5 < 2)
//console.log(5 = 2)
//console.log(5 ! 2)
//console.log(5 || 2)
//console.log(5 && 2)
//console.log(5 = 2)


let fruit : string[] =
["Mango", "Apple", "Banana","chiko"];
fruit.push("waterMillon")
fruit.pop();
fruit.slice(2);
fruit.splice(2);
fruit.shift();
fruit.unshift("pianaapple");
console.log(fruit);


let email : string ="92nomanattari@gmail.com";
let pass : string = "12345";
if(email == "92nomanattari@gmail" || pass == "12345"){
    console.log("open");
}
else{
    console.log("out");
}
let a : string = "water";
let b : string = "air";
let c : string = "juice";
if(a == "water" && b == "air" && c == "jice"){
    console.log(a,b,c);
}else{
    console.log("poor");
}

let age = 34;
console.log(`my age is"${age}`);

let size : "small" | "medium" | "large"
= "medium"
console.log(size)

let fruits : string [] = ["apple","mango","banana",];
console.log(fruits[1]);
  
let rollno : number[] = [1001,1003,1004 ]
console.log(rollno)

let age4 = 33;
if(age > 34){console.log("buzruk")}
else if(age < 34){console.log("jawan")}
else{console.log("out")}
console.log(5 > 2);
console.log(5 < 2);



function Hello (){
    console.log("how are you")
}Hello()
let person = {
    name : "noman",
    age : 34,
    rollno : 10092,
    city : "karachi",
};