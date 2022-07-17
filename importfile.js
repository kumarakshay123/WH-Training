

//importing functions of calculating area ,perimeter of a square,circle,triangle from exportsquare.js, exportcircle.js and export triangle.js


const square=require('./exportsquare.js');

function calSquareArea(side){
    square(side,(err,sqr)=>{
        if(err)
        console.log(err.message);

        else 
        {
            console.log("Perimeter of a square",sqr.perimeter());
            console.log("Area of a square : ",sqr.area());
        }
    })

}

calSquareArea(5);


const triangle=require('./exporttriangle.js')


function caltriangleArea(a,b,c){
    triangle(a,b,c,(err,tri)=>{

        if(err)
        console.log("Triangle parameters are invalid");

        else
        {
            console.log("Perimeter of a triangle ",tri.perimeter());
            console.log("Area of a triangle  is ",tri.area() );
        }

    })

}

caltriangleArea(4,5,6);


const circle=require('./exportcircle.js');

function calCircleArea(radius){
    circle(radius,(err,cir)=>{
        if(err)
        console.log(err.message);

        else
        {
            console.log("Perimeter of a circle is ", cir.perimeter());
            console.log("Area of a circle is : ", cir.area());

        }
    })
}

calCircleArea(4);