import http from 'http';

http.createServer((request, response)=>{
    response.end('hello world');
})
.listen(4000, ()=>{
    console.log("server started well")
})