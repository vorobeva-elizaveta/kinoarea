import tvSeriesCollection from '../models/tv-series.js'
import addMovieToDb from './add-to-bd.js'

export default class TvSeries {
    static async getTvSeries(res) {}
    static async addTvSerie(res, body) {
        return addMovieToDb(tvSeriesCollection, res, body)
    }
}