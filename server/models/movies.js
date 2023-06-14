import db from '../firebase.js'
import { collection, getDocs } from 'firebase/firestore/lite';
const moviesCollection = db.collection('movies')

export async function getMovies() {
    const movies = await moviesCollection.get()
    const moviesList = movies.docs.map(doc => doc.data());
    console.log(moviesList);
    return moviesList
}

export default moviesCollection