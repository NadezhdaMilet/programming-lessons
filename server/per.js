const fs = require("fs");
const http = require("http");
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log(request.headers);
    let Nadya = JSON.stringify(request.headers);

    fs.appendFileSync("log.txt", request.url);
    fs.appendFileSync("log.txt", request.method);
    fs.appendFileSync("log.txt", Nadya);
};
http.createServer(requestHandler).listen(3000);