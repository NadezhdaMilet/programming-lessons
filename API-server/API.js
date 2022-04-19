//Милетенко Н.И. 904 взвод
const fs = require('fs');
const axios = require('axios');
let Nadya = new Promise(async function (resolve, reject) {
    function dowload() {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
                response => {
                    const a = response.data;
                    console.log(response);
                    let json = JSON.stringify(a); //•	JSON.stringify для преобразования объектов в JSON
                    console.log(typeof json);
                    console.log(json);
                    fs.writeFile('todos1.json', json, function (err) {
                        if (err) return console.log(err);
                        console.log('json file has created');
                        resolve('json файл создан')

                    });
                }
            )
            .catch(function (error) {
                console.log(error);
            })
    }
    resolve(download());
})
Nadya.then(function upload() {
            fs.readFileSync('todos1.json', 'utf8', (err, data) => { //открыть файл асинхронно
                if (err) {
                    console.error(err)
                    return
                }
                const todos = JSON.parse(data);
                console.log(todos);
                console.log("Загрузка совершена");
            })