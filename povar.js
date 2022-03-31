let str = "Повар! – сказал Повар";
let target = "Повар";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
    console.log(pos);
}