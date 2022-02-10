'use strict';

    let dog = document.querySelector('.dog');
    let duck1 = document.querySelector('.duck1');

    dog.addEventListener('animationstart', () => {
        console.log('animaatio loppui');
        duck1.classList.add('duckfly');
    });

    duck1.addEventListener('click', () => {
        console.log('klikkasit lintua');
        duck1.classList.add('pause');
    });
