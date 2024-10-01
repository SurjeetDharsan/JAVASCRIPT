let m=prompt("Enter the value:");
let n=prompt("Enter the value:");
let sum=0;
if(m>n){
    console.log(0);
}
else{
    for(let i=m;i<=n;i++){
        let a=i*i*i;
        sum+=a;
    }
    console.log(sum);
}