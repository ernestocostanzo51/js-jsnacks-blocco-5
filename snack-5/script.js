const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

/*let pari = []
for (let i=0; i<nums.length; i++){
    let numero = nums[i]
    if(numero % 2 === 0){
        pari.push(numero)
    }
}
console.log(pari)*/

const pari = nums.filter(numero =>{
    return numero % 2 === 0
})

console.log(pari)

    


