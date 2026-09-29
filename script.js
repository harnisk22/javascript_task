let a1=(10>5)&&(20>15);
console.log("Result:",a1);
let a2=(10>15)&&(20>10);
console.log("2.Result:",a2);
let a3=(10>20)||(15>10);
console.log("3.Result:",a3);
let a4=(5>10)||(20<15);
console.log("4.Result:",a4);
let a5=!(10>5);
console.log("5.Result:",a5);
let a6=!(10<5);
console.log("6.Result:",a6);
let a7=(10>5 && 20>15)||(5>10);
console.log("7.Result:",a7);
let a8=(10>5 && 20<30)||!(5>10);
console.log("8.Result:",a8);
let age=20;
let result9=(age>=18)?"Eligible":"Not Eligible";
console.log("9.Result:",result9);
let marks=40;
let result10=(marks>=35)?"Pass":"Fail";
console.log("10.Result:",result10);
let num11=15;
let res11=(num11>10)?"Greater than 10":"Not greater than 10";
console.log("11.Result:",res11);
let num12=7;
let res12=(num12% 2===0)?"Even":"Odd";
console.log("12.Result:",res12);
let salary=35000;
let res13=(salary>30000)?"Good Salary":"Low Salary";
console.log("13.Result:",res13);
let firstName="Harni";
let lastName="SK";
let city="Madurai";
let fullInfo = firstName +" "+ lastName +" "+ city;
console.log("14.Result:",fullInfo);
let name15="Harni";
let age15=21;
console.log("15.Result:",name15 + "is" + age15 + "years old");
let product="Laptop";
let price=50000;
let brand="ASUS";
console.log("16.Result:","I bought" + brand +""+ product + "for" + price + "rupees");
let myName="Harni";
let qualification="BE";
let company="Stackly";
console.log("17.Result:My name is"+ myName +",I completed" + qualification + "and work at" + company);
let name18="Harni";
let age18=21;
let city18="Madurai";
console.log("18.Result:I am" + name18 +","+ age18 + "years old from" + city18);
let str19="10";
let num19=20;
let result19=str19+num19;
console.log("19.Result:",result19,"Type:",typeof result19);
let n1=10;
let n2=20;
let result20=n1+n2;
console.log("Result:",result20,"Type:",typeof result20);
let n21= 10 + true;
console.log("21.Result:",num12,"Type:",typeof n21);
let n22 = 10 + null;
console.log("22.Result:",n22,"Type:",typeof n22);
let n23 = "Hello" + true;
console.log("23.Result:",n23,"Type:",typeof n23);
let n24 = "Hello" + [1,2,3];
console.log("24.Result:",n24,"Type:",typeof n24);
let n25 = 10 + {name:"Harni"};
console.log("25.Result:",n25,"Type:",typeof n25);
let exp1 = 10 + "20";
let exp2 = true + 5;
let exp3 = null + "test";
console.log("26.Result:",exp1,"Type:",typeof exp1);
console.log("26.Result:",exp2,"Type:",typeof exp2);
console.log("26.Result:",exp3,"Type:",typeof exp3);
let s27 = "100";
let c27 = Number(s27);
console.log("27.Result:",c27,"Type:",typeof c27);
let s28 = "25";
let c28 = Number(s28);
console.log("28.Result:",c28,"Type:",typeof c28);
let c29 = Number(true);
console.log("29.Result:",c29,"Type:",typeof c29);
let c30 = Number(false);
console.log("30.Result:",c30,"Type:",typeof c30);
let s31 = "";
let c31 = Number(s31);
console.log("31.Result:",c31,"Type:",typeof c31);
let c32 = Number(null);
console.log("32.Result:",c32,"Type:",typeof c32);
let c33 = Number(undefined);
console.log("33.Result:",c33,"Type:",typeof c33);
let c34 = Boolean("Hello");
console.log("34.Result:",c34,"Type:",typeof c34);
let c35 = Boolean("");
console.log("35.Result:",c35,"Type:",typeof c35);
let c36_0=Boolean(0);
let c36_1=Boolean(1);
let c36_m1=Boolean(-1);
console.log("36.Result 0:",c36_0);
console.log("36.Result 1:",c36_1);
console.log("36.Result -1:",c36_m1);
let c37=Boolean([1,2,3]);
console.log("37.Result:",c37,"Type:",typeof c37);
let c38=Boolean({name:"Harni"});
console.log("38.Result:",c38,"Type:",typeof c38);
let age39=21;
if(age39>=18){
    console.log("39.Result:Eligible");
}
let age40 =16;
if(age40>=18){
    console.log("40.Result:Eligible to vote");
}else{
    console.log("40.Result:Not eligible to vote");
}
let marks41=75;
if(marks41>=40){
    console.log("Pass");
}else{
    console.log("Fail");
}
let time42=10;
if(time42 >=1 && time42 <=6){
    console.log("42.Result:Early Morning");
}else if(time42 >= 7 && time42 <= 12){
    console.log("42.Result:Morning");
}else if(time42 >=13 && time42 <=17){
    console.log("42.Result:Afternoon");
}else if(time42 >=18 && time42 <=19){
    console.log("42.Result:Evening");
}else if(time42 >=20 && time42 <= 24){
    console.log("42.Result:Night");
}else{
    console.log("42.Result:Invalid Time");
}
let temperature43=30;
if(temperature43>35){
    console.log("43.Result:Hot");
}else if(temperature43 >=20&&temperature43 <=35){
    console.log("43.Result:Normal");
}else{
    console.log("43.Result:Cold");
}
let age44=20;
let height44=175;
let weight44=65;
if(age44>=18){
    if(height44>=170){
        if(weight44>=60){
            console.log("44.Result:Eligible");
        }else{
            console.log("44.Result:Not Eligible-Weight less than 60");
        }
    }else{
        console.log("44.Result:Not Eligible-Height less than 170");
    }
}else{
    console.log("44.Result:Not Eligible-Age less than 18");
}
let trafficLight="green";
switch(trafficLight){
    case"red":
    console.log("45.Result:Stop");
    break;
    case"yellow":
    console.log("45.Result:Ready to go/Slow down");
    break;
    case"green":
    console.log("45.Result:Go");
    break;
    default:
        console.log("45.Result:Invalid light");
}
let day="Monday";
switch(day){
    case"Monday":
    console.log("46.Result:Monday");
    break;
    case"Tuesday":
    console.log("46.Result:Tuesday");
    break;
    case"Wednesday":
    console.log("46.Result:Wedenesday");
    break;
    case"Thrusday":
    console.log("46.Result:Thrusday");
    break;
    case"Friday":
    console.log("46.Result:Friday");
    break;
    case"Saturaday":
    console.log("46.Result:Saturday");
    break;
    case"Sunday":
    console.log("46.Result:Sunday");
    break;
    default:
        console.log("46.Result:Invalid Day");
}
let choice=1;
switch(choice){
    case 1:
    console.log("47.Result:Start");
    break;
    case 2:
        console.log("47.Result:Settings");
        break;
        case 3:
        console.log("47.Result:Exit");
        break;
        default:
            console.log("47.Result:Invalid Choice");
}
for(let i=1;i<=10;i++){
    console.log(i);
}
let j=10;
while(j>=1){
    console.log(j);
    j--;
}
let fruits=["apple","mango","banana"];
for(let fruit of fruits){
    console.log(fruit);
}
let person={name:"Harni",role:"Developer",experience:"1 year"};
for(let key in person){
    console.log(key+": "+person[key]);
}

