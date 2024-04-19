// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((director) => {
    return director.director;
  });
  return allDirectors;
}

console.log(getAllDirectors(movies));

let directors = getAllDirectors(movies);

function popDuplicateDirector(directorsArray) {
  let uniqueDirector = [];

  for (let i = 0; i < directorsArray.length; i++) {
    const currentDirector = directorsArray[i];

    if (uniqueDirector.indexOf(currentDirector) === -1) {
      uniqueDirector.push(currentDirector);
    }
  }

  return uniqueDirector;
}

console.log(popDuplicateDirector(directors));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const splierbergDramaMovies = moviesArray.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return splierbergDramaMovies;
}

console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const totalScores = moviesArray.reduce((accumulator, movie) => {
    return accumulator + movie.score;
  }, 0);
  const average = totalScores / moviesArray.length;

  return average.toFixed(2);
}

console.log('The average score of all the movies is: ' + scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes('Drama');
  });
  const totalScores = dramaMovies.reduce((accumulator, movie) => {
    return accumulator + movie.score;
  }, 0);
  const average = totalScores / dramaMovies.length;

  return average.toFixed(2);
}

console.log(
  'The average score for movies in the drama genre is: ' +
    dramaMoviesScore(movies)
);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesByDate = moviesArray.slice().sort((a, b) => {
    return a.year - b.year || a.title.localeCompare(b.title);
  });

  return moviesByDate;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const orderMovies = moviesArray.slice();
  orderMovies.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  const firstTwenty = orderMovies.slice(0, 20).map((movie) => {
    return movie.title;
  });
  return firstTwenty;
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const updatedMovies = moviesArray.map((movie) => {
    const updatedMovie = { ...movie };

    const pattern = /(\d+)h (\d+)min/;
    const match = updatedMovie.duration.match(pattern);

    if (match) {
      const hours = parseInt(match[1], 10);
      const minutes = parseInt(match[2], 10);

      const totalMinutes = hours * 60 + minutes;

      updatedMovie.duration = totalMinutes;
    } else {
      updatedMovie.duration = 0;
    }

    return updatedMovie;
  });

  return updatedMovies;
}

console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  
  const yearStats = movies.reduce((stats, movie) => {
    const { year, score } = movie;
    if (!stats[year]) {
      stats[year] = { sum: 0, count: 0 };
    }
    stats[year].sum += score;
    stats[year].count++;
    return stats;
  }, {});

  
  const bestYear = Object.keys(yearStats).reduce((best, year) => {
    const avgScore = yearStats[year].sum / yearStats[year].count;
    if (!best || avgScore > yearStats[best].sum / yearStats[best].count) {
      return year;
    }
    return best;
  }, null);

  
  if (bestYear) {
    const avgScore = yearStats[bestYear].sum / yearStats[bestYear].count;
    return `El mejor año fue ${bestYear} con una puntuación media de ${avgScore.toFixed(2)}.`;
  } else {
    return 'No hay suficientes datos para determinar el mejor año.';
  }
};

console.log(bestYearAvg(movies));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
