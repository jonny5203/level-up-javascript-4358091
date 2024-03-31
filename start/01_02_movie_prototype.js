// Static variables for the the obejct
class Rating {
  static F = "Bad";
  static E = "Mediocre";
  static D = "Surviveale";
  static C = "Good";
  static B = "Epic";
  static A = "Legend";
}

class Genre {
  static action = "Action";
  static drama = "Drama";
  static comedy = "Comedy";
  static horror = "Horror";
  static crime = "Crime";
}

//This is a movie class, that hold the blueprint for a movie object
//the field are private and can only be accessed by the constructor at
//creation or by the method getOverView()
class Movie {
  #title;
  #director;
  #genre;
  #releaseYear;
  #rating;

  constructor(title, director, genre, releaseYear, rating) {
    this.#title = title;
    this.#director = director;
    this.#genre = genre;
    this.#releaseYear = releaseYear;
    this.#rating = rating;
  }

  getOverView() {
    return `${this.#title}, a ${this.#genre} film directed 
    by ${this.#director} was released in ${this.#releaseYear}. It
    received a rating of ${this.#rating}`;
  }
}

//Initialize some instances of the Movie class
//Using the static classes that I use for enum type, in order
//to enforce static values and also limit error.
const movie1 = new Movie(
  "Mission Impossible",
  "Tom Cruise",
  Genre.action,
  1992,
  Rating.C
);
const movie2 = new Movie(
  "Endgame",
  "Ruso Brothers",
  Genre.drama,
  2017,
  Rating.B
);

console.log(movie1.getOverView());
console.table(movie2.getOverView());
