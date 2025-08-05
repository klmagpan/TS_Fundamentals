"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMovies = GetAllMovies;
exports.PrintMovieInfo = PrintMovieInfo;
exports.GetTitles = GetTitles;
exports.Purge = Purge;
function GetAllMovies() {
    return [
        { title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: false },
        { title: 'The Last Jedi', director: 'Rian Johnson', yearReleased: 2017, streaming: true }
    ];
}
function getReview(title) {
    if (title == "Spirited Away") {
        return 'Great!';
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
function PrintMovieInfo(movie) {
    console.log(`Title: ${movie.title}`);
    console.log(`Year Released: ${movie.yearReleased}`);
    console.log(`Director: ${movie.director}`);
}
function GetTitles(director, streaming) {
    const allMovies = GetAllMovies();
    const searchResults = [];
    if (streaming !== undefined) {
        for (let movie of allMovies) {
            if (movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            }
        }
    } // else {}
}
// export async function logSearchResults(director: string) {
// 	let foundMovies = await getMoviesByDirector(director);
// 	console.log(foundMovies);
// }
function Purge(inventory) {
    //return purged items
    return inventory.splice(3, inventory.length);
}
let myMovie = {
    title: 'Superman',
    director: 'James Gunn',
    yearReleased: 25,
    streaming: true,
    length: 200,
    logReview: (review) => console.log(`Review: ${review}`)
};
let allMovies = Utility.GetAllMovies();
function getMoviesByDirector(director) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundMovies = Utility.GetTitles(director);
            if (foundMovies.length > 0) {
                resolve(foundMovies);
            }
            else {
                reject('No movies found for that director.');
            }
        }, 2000);
    });
    return p;
}
function logSearchResults(director) {
    return __awaiter(this, void 0, void 0, function* () {
        let foundMovies = yield getMoviesByDirector(director);
        console.log(foundMovies);
    });
}
// getMoviesByDirector('George Lucas')
// 	.then(titles => {
// 		console.log(`Found titles: ${titles}`)
// 		throw 'something bad happened';
// 		return titles.length;
// 	}, reason => {return 0; })
// 	.then(numOfMovies => console.log(`Number of movies found: ${numOfMovies}`))
// 	.catch(reason => console.log(`Error: ${reason}`));
console.log('Beginning search...');
logSearchResults('George Lucas')
    .catch(reason => console.log(reason));
console.log('Search submitted...');
// PrintMovieInfo(myMovie);
// if (myMovie.logReview) {
// 	myMovie.logReview('Great story!')
// }
// function LogMessage(message: string): void {
// 	console.log(message)
// }
// let printReview: ReviewLogger;
// printReview = (review: string) => console.log(`Viewer review: ${review}`);
// printReview('I want to see it');
// const LogMessage = (message: string) => console.log(message);
// LogMessage('Enjoy the movie!');
// let favoriteCastMember: CastMember = new Performer();
// favoriteCastMember.name = 'Daisy';
// favoriteCastMember.rehearse(25)
// }
// function CreateMovieID(name:string, id:number): string {
// 	return name + id;
// }
// let x: number;
// x = 5;
// let IdGenerator: (chars: string, nums:number) => string;
// IdGenerator = CreateMovieID;
// let newID: string = IdGenerator('jedi', 60);
// console.log(newID);
