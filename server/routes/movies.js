import { Router } from "express";
import moviesCollection, {getMovies} from "../models/movies.js";
import db from "../firebase.js";
import { setDoc, doc, getDoc,where } from 'firebase/firestore/lite';


const router = Router()

router.get('/movies', async (req, res)=> {
    const movies = await getMovies()
    res.send(movies)
})

router.post('/add-movie', async (req, res) => {
    console.log(req.body.id);
    let ref = await moviesCollection.where('id', '==', req.body.id).get()

    console.log(ref.empty);
    console.log(ref.docs[0].id);
    res.send(ref.id)
})

export default router