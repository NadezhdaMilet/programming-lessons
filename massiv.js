const fs=require('fs')

const url='/todos/qwe';

const number=url.split('/').reverse()[0]; //reserve меняет порядок следования элементов в массиве
console.log(!isNaN(number)) //не номер ли это?

fs.readFile('todos.json',(err,json) =>{
    if (err) return console.error(err);

    const todos=JSON.parse(json);
    console.log(JSON.stringify(todos[number]))
})