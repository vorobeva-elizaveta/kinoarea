export default interface IMovie {
  id: string | number
  name: string
  type: string
  poster: string
  [key: string]: any
}
