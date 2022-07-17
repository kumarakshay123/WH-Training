module.exports=(a,b,c,callback)=>{
    if(a+b<=c || a+c<=b || b+c<=a)
    console.log(new Error ("Triangle parameteres are invalid"),null);

    else
    {
        callback(null,{
            perimeter:()=>a+b+c,
            area:()=>1/2*a*b
        })
    }
}