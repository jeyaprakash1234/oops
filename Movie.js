
class Movie {
    constructor(title, director, year, genre) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.genre = genre;
    }

    getDetails() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}`;
    }
}

const movie1 = new Movie("Inception", "Christopher Nolan", 2010, "Sci-Fi");
console.log(movie1.getDetails());

export default Movie;
