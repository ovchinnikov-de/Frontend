const SPEED = 50;

function increase(i, element, endNumber){
    if(i <= endNumber){
        if(i === endNumber) {
            element.innerText = i + "+";
        } else {
            element.innerText= i;
        }

        i+=100;

        setTimeout(function() {
            increase(i, element, endNumber);
        }, SPEED);
    }
}

function init(){
    const element = document.querySelector("features_clients");

    increase(0, element, 5000);
}

init();

//Проверка правильности авторизации



function authorization(e) {
    
    

    let name = e.name.value;
    let mail = e.mail.value;
    let phone = e.phone.value;

    

    let error = "";

    if(name ==""||mail =="" ||phone ==""){
    error = "Заполните все поля";}
    else if(name.lenght <= 2|| name.lenght>20){
    error = "Введите корректное имя";}
    else if(mail.split("@").lenght>1){
    error="Некорректная почта";}

    if(error!="")
    document.getElementById('fix').innerHTML = error;

    else {
        alert("Данные коректны");
    }

    return false;
} 
