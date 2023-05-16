import { defineStore } from 'pinia'

const URL = 'https:api.themoviedb.org/3/search/movie?api_key=02708c4929ad93aa5e68f8ee7bfa4445&query='
// const URL = 'http://127.0.0.1:38080/facade/dataport/dashboard/by-inn?inn='

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    movies: []
  }),

  actions: {
    async getMovies(search) {
      const res = await fetch(`${URL}${search}`, {
        mode: 'no-cors'
      })
      const data = await res.json()

      console.log(data)

      // this.movies = data
    }
  }
})