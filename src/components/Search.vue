<template>
  <div>
    <form @submit.prevent="searchStore.getMovies(searchMovie)">
      <input
        class="search-input"
        type="text"
        placeholder="Search for movie..."
        v-model="searchMovie"
      >
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSearchStore } from '../stores/SearchStore'

const searchStore = useSearchStore()
const searchMovie = ref('')
</script>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>