import tvSeriesCollection from '../models/tv-series.js'
import addMovieToDb from './add-to-bd.js'

export default class TvSeries {
  static async getTvSeries(res) {
    const tvSeries = await tvSeriesCollection.get()
    const tvSeriesList = tvSeries.docs.map((doc) => doc.data())
    return res.send({
      error: false,
      result: tvSeriesList
    })
  }
  static async addTvSerie(res, body) {
    return addMovieToDb(tvSeriesCollection, res, body)
  }
}
