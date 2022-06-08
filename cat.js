const fs = require('fs');
const axios = require('axios');
const Path = require('path');
const express = require('express');
const {resolve} = require('path');
const app = express()
const port = 3000

let b = new Promise(async function (resolve, reject) {
    async function download() {
        axios.get("https://http.cat").then(
                response => {
                    const a = response.data;
                    console.log(response);
                    let json = JSON.stringify(a);
                    console.log(typeof json); // мы получили строку!
                    console.log(json);
                    fs.writeFile('todos1.json', json, function (err) {
                        if (err) return console.log(err);
                        console.log('json file has created');

                    });
                }
            )
            .catch(async function (error) {
                console.log(error);
            })
    }
    resolve(download());
})
b.then(
    result => {
        fs.readFile('todos1.json', 'utf8', function(error, data){
            if (error) {
                console.error(error)
                console.log("ERROR")
                return