export interface IMoviePoster {
  previewUrl?: string
}
export interface IMovieGenre {
  name?: string
}
export interface IMovieRating {
  imdb?: number,
  kp?: number,
  await?: any,
  russianFilmCritics?: number,
  filmCritics?: number,
}

export interface IMovie {
  id: string | number
  name: string
  type: string
  poster: IMoviePoster,
  genres?: IMovieGenre[],
  rating: IMovieRating,
  [key: string]: any
}
