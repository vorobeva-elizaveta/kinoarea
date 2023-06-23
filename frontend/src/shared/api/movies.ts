import instance from '@/app/libs/axios.config'
interface IResonse {
  error: boolean,
  result: []
}

export default class MovieApi {
  constructor() { }
  

  public static async fetchAllMovies() {
    
    return <IResonse> await instance.get(`movies`, {}).then((data) => {
      console.log(data)
      return data
    })
  }
}
