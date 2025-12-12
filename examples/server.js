import http from "node:http";


const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-type", "text/plain");
    response.end("Hello world!");
})

server.listen("3001", () => {
    console.log("Server running on http://localhost:3001");
})