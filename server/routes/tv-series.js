import { Router } from 'express'
import TvSeries from '../controllers/tv-series.js'

const router = Router()

router.get('/tv-series', async (req, res) => await TvSeries.getTvSeries(res))

export default router
