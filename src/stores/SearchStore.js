import { defineStore } from 'pinia'

// Example:
//
// fetch('https://api.themoviedb.org/3/discover/movie?api_key=&query=', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODVjMDk0MDg0NjJkNGNhMmJhZTA4ZTJjMmJkMWU0NiIsInN1YiI6IjVmOGQ1MTM0Y2I4MDI4MDAzNzA4NTU4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xNF4FfNkRVzBHZ4RAEpsqhghZK3iHI__u1-Y-SVV2Ow'
//   }
// }

const URL = 'https://api.themoviedb.org/3/search/movie?api_key=685c09408462d4ca2bae08e2c2bd1e46&query='

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    loader: false,
    movies: []
  }),

  actions: {
    async getMovies(search) {
      this.loader = true

      const res = await fetch(`${URL}${search}`)
      const data = await res.json()

      console.log(data)

      this.movies = data.results

      this.loader = false
    }
  }
})