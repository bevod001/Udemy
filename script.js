let numberOffilms = +prompt('Сколько фильмов вы уже смотрели?', ''),
    personalMoveDB = {
        count: numberOffilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    },
    unsver,
    a,
    b;





a = prompt('Один из последний просмотренных фильмов?', '');
personalMoveDB.movies[a] = +prompt('На сколько оцените его?', '');
b = prompt('Один из последний просмотренных фильмов?', '');
personalMoveDB.movies[b] = +prompt('На сколько оцените его?', '');

console.log(personalMoveDB)
