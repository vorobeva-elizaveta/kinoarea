import instance from "@/app/libs/axios.config";

export default class MovieApi {
  constructor() {}

  public static async fetchAllMovies() {
    interface IMovie {
      id: number;
    }
    await instance
      .get<IMovie[]>(`movies`, {})
      .then((data) => {
        console.log(data);
        return data;
      });
  }
}
