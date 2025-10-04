<template>
  <div class="pokedex">
    <!-- TITRE -->
    <header>
      <h1>800 <span>Pokemons</span> for you to choose your favorite</h1>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Encuentra tu pokémon..."
        class="search-bar"
      />
    </header>

    <!-- LOADING -->
    <div v-if="isLoading" class="loading">
      <div class="spinner"></div>
      <p>Loading Pokémons...</p>
    </div>

    <!-- ERROR -->
    <div v-if="error" class="error">
      <div class="error-icon">⚠️</div>
      <p>{{ error }}</p>
      <button @click="fetchPokemons">Retry</button>
    </div>

    <!-- GRID DES CARTES -->
    <div v-if="!isLoading && !error">
      <div class="grid">
        <PokemonCard
          v-for="pokemon in paginatedPokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
          :bgColor="pokemon.color"
          @click="openModal(pokemon)"
        />
      </div>

      <!-- PAGINATION -->
      <div class="pagination">
        <span
          v-for="page in totalPages"
          :key="page"
          class="dot"
          :class="{ active: currentPage === page }"
          @click="goToPage(page)"
        ></span>
      </div>
    </div>

    <!-- MODAL -->
    <PokemonModal
      v-if="selectedPokemon"
      :pokemon="selectedPokemon"
      @close="selectedPokemon = null"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import PokemonCard from "../components/PokemonCard.vue";
import PokemonModal from "../components/PokemonModal.vue";

const searchQuery = ref("");
const pokemons = ref([]);
const currentPage = ref(1);
const perPage = 9;
const selectedPokemon = ref(null);
const isLoading = ref(true);
const error = ref(null);

const filteredPokemons = computed(() =>
  pokemons.value.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

const totalPages = computed(() =>
  Math.ceil(filteredPokemons.value.length / perPage)
);

const paginatedPokemons = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return filteredPokemons.value.slice(start, start + perPage);
});

const fetchPokemons = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";
    const response = await fetch(`${API_BASE_URL}/pokemon`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    pokemons.value = await response.json();
  } catch (err) {
    error.value = "Failed to load pokemons. Please try again.";
    console.error("There has been a problem with your fetch operation:", err);
  } finally {
    isLoading.value = false;
  }
};

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const handleKey = (e) => {
  if (e.key === "ArrowLeft" && currentPage.value > 1) {
    currentPage.value--;
  }
  if (e.key === "ArrowRight" && currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const openModal = (pokemon) => {
  selectedPokemon.value = pokemon;
};

onMounted(() => {
  fetchPokemons();
  window.addEventListener("keydown", handleKey);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKey);
});
</script>

<style scoped>
/* TITRE + SEARCH */
header {
  text-align: center;
  margin: 3rem 0;
}
header h1 {
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  letter-spacing: 4px;
}
header h1 span {
  font-weight: bold;
}
.search-bar {
  margin-top: 1rem;
  padding: 0.8rem 1.2rem;
  width: 70%;
  border-radius: 25px;
  border: none;
  outline: none;
  background: #f2f2f2;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
  padding: 0 1rem;
}
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

/* PAGINATION */
.pagination {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}
.dot {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;
}
.dot.active {
  background: #333;
}

/* LOADING */
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  color: #555;
  font-family: "Poppins", sans-serif;
  animation: fadeIn 0.3s ease-in-out;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 6px solid #f3f3f3;
  border-top: 6px solid #ffcb05; /* Jaune Pokémon */
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ERROR */
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff5f5;
  color: #d93025;
  border: 1px solid #f8d7da;
  border-radius: 10px;
  padding: 2rem;
  margin: 3rem auto;
  max-width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  animation: fadeIn 0.3s ease-in-out;
}

.error-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.error button {
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 25px;
  background: #ffcb05; /* Jaune Pokémon */
  color: #2d2d2d;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.error button:hover {
  background: #ffdf5e;
}

/* Apparition douce */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
