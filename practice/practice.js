const flag = true;

if(!flag) {
    console.log("satisfied")
}

else {
console.log("not satisfied")
}


let i = 0;
while(i>0)
{
    i++
console.log(i)
}

do{
i++
}while(i>10);
console.log(i);

console.log("********************************")
let n = 0;
for(let k = 1; k<=100; k++)
{
    if(k%5  == 0 && k%2 == 0)
    {
        n++
        console.log(k);
        if(n==3)
        break;
    }
}