const { readFileSync } = require('fs');
const http=require('http')
// get all files
const homepage = readFileSync('./index.html')
// const homeImage=readFileSync(./file path) bulid this type then you can each every file on the browser
const server=http.createServer((req,res)=>{
    // console.log(req);
    // console.log(req.method);
    console.log(req.url)
    const url =req.url;
    if(url === '/'){

        res.writeHead(200,{'content-type':'text/html'})  //http headers
        // res.write('<h1>Thank You For Watching this Video </h1>')
        res.write(homepage)
        res.end()
        // we can Access the Css files ans js file also anything js under stand the syntax
    }
    //about page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html '})   // write instead of css or js depends on the file to be publish
        res.write(homepage)

        // res.write('<h1>about html</h1>')
        res.end()

    }
    // 404 page
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1> page Is not Found </h1>')    // 200 for successful request
        res.end()
    }

    // res.end('home page')
})

server.listen(5000)
//  https Status code
