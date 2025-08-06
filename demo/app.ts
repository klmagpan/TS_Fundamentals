import { Movie, Logger, CastMember as Actor} from "./interfaces";
import { Performer, Documentary, Favorites} from "./classes"
import * as Utility from "./functions";
import * as _ from "lodash";


let inventory: Array<Movie> = Utility.GetAllMovies();

inventory.forEach(movie => console.log(_.snakeCase(movie.title)));

let favoriteMovies: Favorites<Movie> = new Favorites<Movie>();
inventory.forEach(movie => favoriteMovies.add(movie));

let firstFave: Movie = favoriteMovies.getFirst();

let docs: Array<Documentary> = [
	new Documentary('Baseball', 1994, 'History'), 
	new Documentary('In Pursuit', 2022, 'Wine'), 
	new Documentary('Gumbo', 2018, 'Food'), 
];

let favoriteDocs: Favorites<Documentary> = new Favorites<Documentary>();
docs.forEach(doc => favoriteDocs.add(doc));

let firstDoc: Documentary = favoriteDocs.getFirst();

favoriteDocs.printTitles();

let originalMovie = favoriteMovies.find('Gumbo');
console.log(`${originalMovie.title} - ${originalMovie.yearReleased}`)

let purgedMovies: Array<Movie> = Utility.Purge<Movie>(inventory);

purgedMovies.forEach(movie => console.log(movie.title));

let purgedNums: Array<number> = Utility.Purge<number>([1, 2, 3, 4, 5])