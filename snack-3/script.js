const numbers = [2, 8, 4, 7, 2, 87];


// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]


/*let numbersPlus = []
for(i=0; i<numbers.length; i++){
    let numero = numbers[i]++
    numbersPlus.push(numbers[i])
}

console.log(numbersPlus)*/

let numbersPlus = numbers.map(numero =>{
    console.log(numero+1)
})