"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
const Utility = __importStar(require("./functions"));
const _ = __importStar(require("lodash"));
let inventory = Utility.GetAllMovies();
inventory.forEach(movie => console.log(_.snakeCase(movie.title)));
let favoriteMovies = new classes_1.Favorites();
inventory.forEach(movie => favoriteMovies.add(movie));
let firstFave = favoriteMovies.getFirst();
let docs = [
    new classes_1.Documentary('Baseball', 1994, 'History'),
    new classes_1.Documentary('In Pursuit', 2022, 'Wine'),
    new classes_1.Documentary('Gumbo', 2018, 'Food'),
];
let favoriteDocs = new classes_1.Favorites();
docs.forEach(doc => favoriteDocs.add(doc));
let firstDoc = favoriteDocs.getFirst();
favoriteDocs.printTitles();
let originalMovie = favoriteMovies.find('Gumbo');
console.log(`${originalMovie.title} - ${originalMovie.yearReleased}`);
let purgedMovies = Utility.Purge(inventory);
purgedMovies.forEach(movie => console.log(movie.title));
let purgedNums = Utility.Purge([1, 2, 3, 4, 5]);
//# sourceMappingURL=app.js.map