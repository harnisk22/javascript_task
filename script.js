function hello(){
    console.log("Hello Everyone");
}
hello();
function welcome(){
    console.log("Welcome to JavaScript");
}
welcome();
function navi(){
    console.log("My name is Harni SK");
}
navi();
function message(){
    console.log("Good Morning");
    console.log("How are you?");
    console.log("Have a nice day");
}
message();
function numbers(){
for(let i=1;i<=5;i++){
    console.log(i);
}
}
numbers();
function check(){
    let age=20;
    if(age >= 18){
        console.log("You are eligible");
    }
}
check();
function details(){
    console.log("Name:Harni SK");
    console.log("Qualification:B.E");
    console.log("Role:Full Stack");
}
details();
function company(){
    console.log("Company:Stackly");
}
company();
function welcomeUser(){
    console.log("Welcome User");
}
welcomeUser();
welcomeUser();
welcomeUser();
function first(){
    console.log("This is first function");
}
function second(){
    console.log("This is second function");
}
first();
second();
function oneParameter(name){
console.log(name);
}
oneParameter("Harni");
function twoParameters(name,age){
    console.log(name,age);
}
twoParameters("Harni",21);
function add(a,b){
    console.log(a+b);
}
add(10,20);
function sub(a,b){
    console.log(a-b);
}
sub(20,10);
function multiply(a,b){
    console.log(a*b);
}
multiply(5,4);
function divide(a,b){
    console.log(a/b);
}
divide(20,4);
function student(name,age){
    console.log("StudentNmae:"+name);
    console.log("Student Age:"+age);
}
student("Harni SK",21);
function employee(name,role,salary){
    console.log("Name:"+name);
    console.log("Role:",+role);
    console.log("salary:",+salary);
}
employee("Harni SK","Full Stack","30000");
function fourParameters(a,b,c,d){
    console.log(a,b,c,d);
}
fourParameters("Harni",21,"B.E","Full Stack");
function sixParameters(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f);
}
sixParameters(1,2,3,4,5,6);
function studentInfo(name,department="CSE",cgpa){
    console.log(name,department,cgpa);
}
studentInfo("Harni","CSE",8.5);
studentInfo("Harni",undefined,8.5);
function user(name,age=18){
    console.log(name,age);
}
user("Harni");
function employeeInfo(name,role="Full Stack"){
    console.log(name,role);
}
employeeInfo("Harni SK");
function form(name,department,cgpa,disability="n0"){
    console.log(name,department,cgpa,disability);
}
form("Harni","CSE",8.5);
form("Butter","ECE",9.0,"yes");
function details2(name,age,city="Chennai"){
    console.log(name,age,city);
}
details2("Harni",21);
details2("Harni",21,"Bangalore");
function addReturn(a,b){
    return a + b;
}
console.log(addReturn(10,20));
function subReturn(a,b){
    return a -b;
}
console.log(subReturn(20,5));
function multiplyReturn(a,b){
    return a*b;
}
console.log(multiplyReturn(4,5));
function divideReturn(a,b){
    return a/b;
}
console.log(divideReturn(20,4));
function salary(){
    return 40000;
}
let mySalary=salary();
console.log(mySalary);
function getSalary(salary){
    return salary;
}
console.log(getSalary(35000));
function getName(){
    return "HarniSK";
}
let personName=getName();
console.log(personName);
function checkResult(marks){
    if(marks>=35){
        return "Pass";
    }else{
        return"Fail";
    }
}
console.log(checkResult(50));
console.log(checkResult(20));
function getDiscount(price,discount){
    return(price*discount)/100;
}
console.log(getDiscount(1000,10));
function addNumbers(a,b){
    return a+b;
}
function doubleValue(num){
    return num *2;
}
let result=addNumbers(10,20);
console.log(doubleValue(result));
let city="Chennai";
function showCity(){
    console.log(city);
}
showCity();
let employeeObj={
    name:"Harni",
    designation:"Full Stack"
};
function showEmployee(){
console.log(employeeObj.name,employeeObj.designation);
}
showEmployee();
let salaryOut=30000;
function addBonus(){
    let bonus=5000;
    console.log(salaryOut+bonus);
}
addBonus();
let empDetails={
    name:"Harni SK",
    role:"Full Stack",
    salary:40000
};
function printEmpDetails(){
    console.log(empDetails.name);
    console.log(empDetails.role);
    console.log(empDetails.salary);
}
printEmpDetails();
let commonVar="I am Outside Variable";
function firstFunction(){
    console.log("firstFunction:"+ commonVar);
}
function secondFunction(){
    console.log("secondFunction:" +commonVar);
}
firstFunction();
secondFunction();
function namedFunc(name){
    console.log(name);
}
namedFunc("Harni SK");
let anonFunc=function(){
    console.log("This is Anonymous Function");
};
anonFunc();
let arrowOne=(name)=>{
    console.log(name);
};
arrowOne("Arrow Function");
let arrowAdd=(a,b)=>{
    console.log(a+b);
};
arrowAdd(10,20);
function namedAdd(a,b){
    console.log(a+b);
}
let anonAdd=function(a,b){
    console.log(a+b);
};
let arrowAdd2=(a,b)=>{
    console.log(a+b);
};
namedAdd(5,5);
namedAdd(5,5);
namedAdd(5,5);
(function(){
    console.log("Hello JavaScript");
})();
(function(name){
    console.log("Hello" +name);
})("Harni");
(function(product,discount){
console.log("Special Offer on "+ product+":"+discount+ "%OFF");
})("Laptop",20);
function addWithCallback(callback,num1,num2){
    let sum=num1+num2;
    console.log("Addition:",+sum);
    callback(10,5);
}
function sub1(a,b){
    console.log("Subtraction:",(a-b));
}
addWithCallback(sub1,20,30);
function addFinal(a,b,cb){
console.log("Addition Result:"+(a+b));
cb(a, b);
}
function subFinal(a,b){
    console.log("Subtraction Result:"+(a-b));
}
addFinal(50,20,subFinal);
