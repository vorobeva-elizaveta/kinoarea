import { Router } from "express";
import Movies from "../controllers/movies.js";

const router = Router()

router.get('/movies', async (req, res)=> await Movies.getMovies(res))
router.post('/add-movie', async (req, res) => await Movies.getMovies(res, req.body))

export default router