import moviesCollection from "../models/movies.js";
import { Filter } from "firebase-admin/firestore";
import addMovieToDb from "./add-to-bd.js";

export default class Movies {
    constructor() {}

    static async getMovies(res) {
        const movies = await moviesCollection.get()
        const moviesList = movies.docs.map(doc => doc.data())
        return res.send({
            error: false,
            result: moviesList
        })
    }
    static async addMovie(res, data) {
        return addMovieToDb(moviesCollection, res, data)
    }
}