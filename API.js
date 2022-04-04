const fs = require('fs');
const axios = require('axios');
//async function dowloadFile () 
axios.get("https://jsonplaceholder.typicode.com/todos")
.then( response => {
            const Nadya = response.data;
            console.log(response);
            const json = JSON.stringify(Nadya);
            console.log(typeof json); // получение строки
            console.log(json);
            fs.writeFile('todos.json', json, function (err) {
                if (err) return console.log(err);
                console.log('Привет мир');
            });
        }
    )
    .catch(function (error) {
        console.log(error);
    })

