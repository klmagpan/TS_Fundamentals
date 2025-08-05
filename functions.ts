// import { Movie } from "./interfaces"

// export function GetAllMovies(): Movie[] {
// 	return [
// 		{title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: false},
// 		{title: 'The Last Jedi', director: 'Rian Johnson', yearReleased: 2017, streaming: true}
// 	];
// }

// function getReview(title: string): string | number { // Returns either string or number
// 	if (title == "Spirited Away") {
// 		return 'Great!'
// 	} else {
// 		return Math.floor(Math.random() *10);
// 	}
// }

// export function PrintMovieInfo(movie: Movie) {
// 	console.log(`Title: ${movie.title}`);
// 	console.log(`Year Released: ${movie.yearReleased}`)
// 	console.log(`Director: ${movie.director}`)
// }

// export function GetTitles(director: string):string[];
// export function GetTitles(director: string, streaming: boolean): string[];
// export function GetTitles(director: string, streaming?: boolean): string[] {
// 	const allMovies = GetAllMovies();
// 	const searchResults: string[] = [];

// 	if (streaming !== undefined) {
// 		for (let movie of allMovies) {
// 			if (movie.director === director && movie.streaming === streaming) {
// 				searchResults.push(movie.title);
// 			}
// 		}
// 	} // else {}

// }

// // export async function logSearchResults(director: string) {
// // 	let foundMovies = await getMoviesByDirector(director);
// // 	console.log(foundMovies);
// // }

// export function Purge<T> (inventory: Array<T>): Array<T> {
// 	//return purged items
// 	return inventory.splice(3, inventory.length);
// }
// let myMovie : Movie = {
// 	title: 'Superman',
// 	director: 'James Gunn',
// 	yearReleased: 25,
// 	streaming: true,
// 	length: 200,
// 	logReview: (review:string) => console.log(`Review: ${review}`)
// }

// let allMovies: Movie[] = Utility.GetAllMovies();

// function getMoviesByDirector(director:string): Promise<string[]> {
// 	let p: Promise<string[]> = new Promise((resolve, reject) => {
// 		setTimeout(() =>  {
// 			let foundMovies:string[] = Utility.GetTitles(director);
// 			if(foundMovies.length > 0) {
// 				resolve(foundMovies);
// 			} else {
// 				reject('No movies found for that director.');
// 			}
// 		}, 2000);
// 	});
// 	return p;
// }

// async function logSearchResults(director: string) {
// 	let foundMovies = await getMoviesByDirector(director);
// 	console.log(foundMovies);
// }
// // getMoviesByDirector('George Lucas')
// // 	.then(titles => {
// // 		console.log(`Found titles: ${titles}`)
// // 		throw 'something bad happened';
// // 		return titles.length;
// // 	}, reason => {return 0; })
// // 	.then(numOfMovies => console.log(`Number of movies found: ${numOfMovies}`))
// // 	.catch(reason => console.log(`Error: ${reason}`));

// console.log('Beginning search...');
// logSearchResults('George Lucas')
// 	.catch(reason => console.log(reason));
// console.log('Search submitted...');


// // PrintMovieInfo(myMovie);

// // if (myMovie.logReview) {
// // 	myMovie.logReview('Great story!')
// // }
// // function LogMessage(message: string): void {
// // 	console.log(message)
// // }

// // let printReview: ReviewLogger;
// // printReview = (review: string) => console.log(`Viewer review: ${review}`);
// // printReview('I want to see it');

// // const LogMessage = (message: string) => console.log(message);

// // LogMessage('Enjoy the movie!');

// // let favoriteCastMember: CastMember = new Performer();
// // favoriteCastMember.name = 'Daisy';
// // favoriteCastMember.rehearse(25)

// // }
// // function CreateMovieID(name:string, id:number): string {
// // 	return name + id;
// // }

// // let x: number;
// // x = 5;

// // let IdGenerator: (chars: string, nums:number) => string;
// // IdGenerator = CreateMovieID;

// // let newID: string = IdGenerator('jedi', 60);
// // console.log(newID);