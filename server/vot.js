fs.writeFile('todos1.json', json, function (err) {
    if (err) return console.log(err);
    console.log('json file has created');
    resolve('json файл создан')

});
const fs = require('fs');
const axios = require('axios');