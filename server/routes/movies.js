import { Router } from "express";
import moviesCollection, {getMovies} from "../models/movies.js";
import db from "../firebase.js";
import { setDoc, doc, getDoc,where } from 'firebase/firestore/lite';
import { Filter } from "firebase-admin/firestore";


const router = Router()

router.get('/movies', async (req, res)=> {
    const movies = await getMovies()
    res.send(movies)
})

router.post('/add-movie', async (req, res) => {
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

    res.send('already exist')
    return 
})

export default router