console.log ("Привет")

let age = '12dss';

age = +age;
if (!isNaN(+age)) {
    if (age > 18) {
        console.log ("Вам больше 18 лет");
    } else if (age < 18) {
        console.log ("Вам меньше 18 лет");
    } else if (age===18) {
        console.log ("Вам 18 лет");
    } else {
        console.log ("Укажите ваш возраст");
    }
} else {
    console.log ("Введите корректные данные");
}


