// 2) Así mismo, dispondrá de otra ruta get ‘/random’ la cuál iniciará un cálculo de 10000 números 
// aleatorios en el rango del 1 al 20. Luego de dicho proceso, el servidor retornará un objeto cuyas 
// claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió 
// dicho número.

const randomNumbers = () => {

    let nums = {} ;
    for(let i=0; i<10000; i++){
        let random = Math.round(Math.random() * (20 - 1) + 1.)
        if(!nums[random]) {
            nums[random] = 1
           }
           else {
               nums[random]++
           }
    }


    return nums
}

export default randomNumbers;