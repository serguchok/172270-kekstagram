

function getMessage﻿ (a,b) {
   if (typeof a ==='boolean') {
    if(a) {
      return'Переданное GIF-изображение анимировано и содержит ['+ b +'] кадров';
    }
    return 'Переданное GIF-изображение не анимировано';
  } else {
    if(typeof a ==='number'){
      return 'Переданное SVG-изображение содержит ['+ a +'] объектов и ['+ (b * 4) +'] атрибутов';
    } else {
      if (array.isArray(b) ) {
        if (array.isArray(a) ) {
          var artifactsSquare = 0;
          a.forEach(function(item, index){
            artifactsSquare += item * b[index];
          });
          return 'Общая площадь артефактов сжатия: ['+ artifactsSquare +'] пикселей';
        }
      }
    }
    if(array.isArray(a) ) {
      var amountOfRedPoints = 0;
      a.forEach(function(item) {
        artifactsSquare += item;
      });
      return 'Количество красных точек во всех строчках изображения: ['+ amountOfRedPoints +']';
    }
  }
};
