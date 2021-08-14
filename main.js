function vartest(){
    var x= 1;
    if(true){
        var x=2;
        console.log(x);
    }
    console.log(x);
}
vartest();

function Es6test(){
    let x=1;
    if(true){
        let x=2;
        console.log(x);
    }
    console.log(x);
}
Es6test();

// function

function add(a,b){
    return a + b;
}
 var res=add(2,3);
 console.log(res);

//  function expression

var add=function(a,b){
    return a+b;
}
var res=add(4,5);
console.log(res);

// arrow fuctions
const add1 = (a,b)=>{
    return a+b;
}
var res=add1(2,3);
console.log(res);

// one line 
const mul=(a,b)=>a*b;

var res=mul(2,3);
console.log(res);

//undefined parameter values

function add(l,m,n){
    if(l===undefined){
        l=0;
    }
    if(m===undefined){
        m=0;
    }
    if(n===undefined){
        n=0;
    }
    return l+m+n;
}
var res=add(11,22);
console.log(res);

// using es6
const add3=(a,b=5,c=5) => {
    return a+b+c;
}
 var res=add3(5);
console.log(res);

//string concatination

var Name=' to all';
var greeting='Happy independence day';

var message = greeting + Name;
console.log(message);

//template literals
const mes=`${greeting} ${name}`;
console.log(mes);

//arrays
const array=[1,2,3,4];
const array2=[];
for(let i=0; i<=array -1; i++){
    array2.push(array[i]*2)
}
console.log(array2);

//arrat helper method
const mul2=array.map(function(e){
    console.log(e)
})
const mul3=array.map((item)=>{
    return item*2
})

console.log(array);
console.log(mul3);