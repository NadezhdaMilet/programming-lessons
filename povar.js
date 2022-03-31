let str = 'Повар! – сказал Повар';
let target = 'Повар'; // цель поиска 
let pos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    console.log(`Найдено тут: ${foundPos}`);
    pos = foundPos + 1; // продолжаем со следующей позиции } 