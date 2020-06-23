"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Один из последних просмотренных фильмов?", "");
    let b = prompt("На сколько оцените его?", "");

    if (personalMovieDB.movies[a] == "" || b.length > 50 || b == null) {
      i--;
    } else {
      personalMovieDB.movies[a] = b;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  numberOfFilms > 10 && numberOfFilms <= 30 ?
    alert("Вы классический зритель!") :
    numberOfFilms > 30 ?
    alert("Вы киноман!") :
    alert("Произошла ошибка!");
}

detectPersonalLevel();


function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    let favouriteGenre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    personalMovieDB.genres.push(favouriteGenre);

  }
}
writeYourGenres();

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
showMyDB();


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/