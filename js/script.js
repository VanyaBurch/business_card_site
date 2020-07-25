'use strict';

window.addEventListener('DOMContentLoaded', function () {
    // BUTTON
    const buttons = document.querySelectorAll('a');
    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;

            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);

            setTimeout(() => {
               ripples.remove()
            },1000);
        });
    });

    // CLOCK

    const deg = 6,
        hr = document.querySelector('#hr'),
        mn = document.querySelector('#mn'),
        sc = document.querySelector('#sc');

    setInterval(() => {
        let day = new Date(),
            hh = day.getHours() * 30,
            mm = day.getMinutes() * deg,
            ss = day.getSeconds() * deg;

        hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
    });
});