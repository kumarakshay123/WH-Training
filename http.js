
// serving http files 



const http=require('http');

const fs=require('fs');

const fileContent=fs.readFileSync('index.html');

const server=http.createServer((req,res)=>{

    res.writeHead(200,{"content-type":"text/html"});

    res.end(fileContent);


})




const hostname='localhost';
const port=8000;






server.listen(port,hostname,() => { 
    console.log("server is running at http://"+hostname+":"+port);
})



