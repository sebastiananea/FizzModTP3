const getTimeNow = () => {
    const time = new Date().getHours();
    if(time >= 6 & time <= 12){
        return 'Buen dia!'
    }
    else if(time >= 13 & time <= 19){
        return 'Buenas tardes!'
    }
    else{
        return 'Buenas Noches!'
    }

};