import { Router } from "express";
import Movies from "../controllers/movies.js";
import TvSeries from "../controllers/tv-series.js";

const router = Router()

router.get('/movies', async (req, res)=> await Movies.getMovies(res))
router.post('/add-movie', async (req, res) => {
    switch (req.body.type) {
        case 'movie':
            await Movies.addMovie(res, req.body)
            break;
        case 'tv-series':
            await TvSeries.addTvSerie(res, req.body)
            break;
    }
})

export default router