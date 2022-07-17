module.exports =(r,callback)=>{
    if(r<=0)
    console.log(new Error("Circle is not valid for the radius"),null);

    else
    {
        callback(null,{
            perimeter:()=>2*(3.14*r),
            area:()=>3.14*(r*r)
        })
    }
}