module.exports=(x,callback)=>{
    if(x<=0)
    console.log(new Error("Rectangle is invalid"),null);

    else{
        callback(null,{
            perimeter:()=>4*x,
            area:()=>x*x
        })
    }
}