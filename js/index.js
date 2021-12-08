//Дата таймера
let countdownDate = new Date("Dec 31, 2021 23:59:59")
let countdownNumbers = document.querySelector('.countdown__timer')
let countdownText = document.querySelector('.countdown__text')
// Обновление каждую секунду
let counter = setInterval(function () {
    // сегодняшняя дата
    let now = new Date().getTime();
    // разница даты таймера и настоящего времени
    let distance = countdownDate - now;
    // формулы вычисления едениц измерения(разобраться)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // переменные окон ввода
    let daysArea = document.querySelector('.countdown__days-number')
    let hoursArea = document.querySelector('.countdown__hours-number')
    let minutesArea = document.querySelector('.countdown__minutes-number')
    let secondsArea = document.querySelector('.countdown__seconds-number')
    //вывод таймера в окна
    daysArea.innerHTML = days;
    hoursArea.innerHTML = hours;
    minutesArea.innerHTML = minutes;
    secondsArea.innerHTML = seconds;
    if(distance < 0) {
        countdownText.innerHTML = 'Happy new year 2022!';
        countdownNumbers.classList.add('hide')
        clearInterval(counter);
    }
}, 1000);