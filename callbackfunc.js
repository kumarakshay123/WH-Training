
// showing asynchronous behaviour with the help of setTimeout




const square=require('./exportsquare.js');

function calSquareArea(side){

    setTimeout(() => {

        square(side,(err,sqr)=>{
            if(err)
            console.log(err.message);
    
            else 
            {
                console.log("Perimeter of a square",sqr.perimeter());
                console.log("Area of a square : ",sqr.area());
            }
        })
        
    }, 3000);
    

}

calSquareArea(4);

console.log("The function of calSquare Area is calculated ");


