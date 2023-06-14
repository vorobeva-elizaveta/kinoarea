import moviesCollection, { getMovies } from "../models/movies.js";
import { Filter } from "firebase-admin/firestore";

export default class Movies {
    constructor() {}

    static async getMovies(res) {
        const movies = await moviesCollection.get()
        const moviesList = movies.docs.map(doc => doc.data())
        return res.send(moviesList)
    }
    static async addMovie(res, data) {
        let ref = await moviesCollection.where(
            Filter.or(
                Filter.where('id', '==', req.body.id),
                Filter.where('kp-id', '==', req.body.id)
            )
        ).get()
    
        if(ref.empty) {
            moviesCollection.add(req.body)
            res.send(ref.docs[0])
            return 
        }

        return res.send('already exist')
    }
}