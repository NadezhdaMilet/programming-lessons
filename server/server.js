const http = require("http");
const fs = require("fs");
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");

    if (request.url === "/home" || request.url === "/") {
        response.write("<h2>Home</h2>");
    } else if (request.url == "/about") {
        response.write("<h2>About</h2>");
    } else if (request.url == "/contact") {
        response.write("<h2>Contacts</h2>");
    } else {
        response.write("<h2>Not found</h2>");
    }
    response.end();

    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
    let Nadya = JSON.stringify(request.headers);

    fs.appendFileSync("hello.txt", request.url);
    fs.appendFileSync("hello.txt", request.method);
    fs.appendFileSync("hello.txt", Nadya);
    console.log("Запись файла завершена. Содержимое файла:");

};
http.createServer(requestHandler).listen(3000);