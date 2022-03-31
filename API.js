let str = "stringify";

// для substring эти два примера — одинаковы  
console.log( str.substring(2, 6) ); // "ring" 
console.log( str.substring(6, 2) ); // "ring" 

// …но не для slice: 
console.log(str.slice(2, 6)); // "ring" (то же самое) 
console.log( str.slice(6, 2) ); // "" (пустая строка) 