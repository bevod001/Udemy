//let personalMoveDB = {
//   count: '',
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
//},
//   unsver,
//   a,
//   b;
//

//personalMoveDB.count = +prompt('Сколько фильмов вы уже смотрели?', '');
//for (let i = 0; i < personalMoveDB.count; i++) {
//   a = prompt('Один из последний просмотренных фильмов?', '');
//   while (a === null || a.length > 50 || a == '') {
//      a = prompt('Один из последний просмотренных фильмов?', '')
//   };
//   personalMoveDB.movies[a] = +prompt('На сколько оцените его?', '');
//}
//
//if (personalMoveDB.count > 1 && personalMoveDB.count < 10) {
//   console.log('Просмотрено довольно мало фильмов');
//} else if (personalMoveDB.count > 10 && personalMoveDB.count < 30) {
//   console.log('Вы классический зритель');
//} else if (personalMoveDB.count > 30) {
//   console.log('Вы киноман');
//} else {
//   console.log('Произошла ошибка')
//}
//
//
//console.log(personalMoveDB)

///////////////////////////////////////////////////////////////////////////////////////////
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

//a = prompt('Один из последний просмотренных фильмов?', '');
//personalMoveDB.movies[a] = +prompt('На сколько оцените его?', '');
//b = prompt('Один из последний просмотренных фильмов?', '');
//personalMoveDB.movies[b] = +prompt('На сколько оцените его?', '');
//console.log(personalMoveDB)


'use strict';

// Код возьмите из предыдущего домашнего задания
// let numberOffilms = +prompt('Сколько фильмов вы уже смотрели?', ''),
//let personalMoveDB = {
//   count: '',
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
//},
//   ansver,
//   a,
//   b;
//
//
//if (personalMoveDB.count > 1 && personalMoveDB.count < 10) {
//   console.log('Просмотрено довольно мало фильмов');
//} else if (personalMoveDB.count > 10 && personalMoveDB.count < 30) {
//   console.log('Вы классический зритель');
//} else if (personalMoveDB.count > 30) {
//   console.log('Вы киноман');
//} else {
//   console.log('Произошла ошибка')
//}
//
//
//console.log(personalMoveDB)



//function getMathResult(base, sq) {
//   if (typeof (sq) === 'number' && sq !== 0 && sq > 0) {
//      let y = '';
//      for (let i = 1; i <= sq; i++) {
//         if (i > 1 && i <= sq) {
//            y = y + '---' + (base * i);
//         }
//         else {
//            y = y + (base * i);
//         }
//      }
//      return y
//   }
//   else {
//      return base
//   }
//}
//
//console.log(getMathResult(20, -5))

let numberOffilms;

function start() {
   numberOffilms = +prompt('Сколько фильмов вы посмотрели?', '');
   while (numberOffilms == '' || numberOffilms == null || isNaN(numberOffilms)) {
      numberOffilms = +prompt('Сколько фильмов вы посмотрели?', '');
   }
}

// start();



let personalMovieDB = {
   count: numberOffilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};




function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?');

      if (a != null && b != null & a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done')
      } else {
         console.log('error');
         i--;
      }
   }
}

// rememberMyFilms();



function detectPersonalLevel() {
   if (personalMovieDB.count > 1 && personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
   } else if (personalMovieDB.count > 30) {
      console.log('Вы киноман');
   } else {
      console.log('Произошла ошибка')
   }
}

// detectPersonalLevel();


function showMyDB() {
   if(personalMovieDB.privat == false) {
      console.log(personalMovieDB)
   }
}

// showMyDB()


function writeYourGenres() {
   for(let i = 1; i<4; i++) {
      personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`,'');
      
   }
}
writeYourGenres()

console.log(personalMovieDB)