const saludo = document.getElementById('saludo');

const getTimeNow = () => {
    const time = new Date().getHours();
    if(time >= 6 & time <= 12){
        saludo.innerText = 'Buenos dias!'
    }
    else if(time >= 13 & time <= 19){
        saludo.innerText = 'Buenas tardes!'
    }
    else{
        saludo.innerText = 'Buenas noches!'
    }

};

getTimeNow();