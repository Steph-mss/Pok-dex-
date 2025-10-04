<template>
  <div class="pokemon-card">
    <!-- Partie gauche (Infos) -->
    <div class="info">
      <h3>{{ pokemon.name }}</h3>
      <div class="stats">
        <div class="stat">
          <span>{{ pokemon.attack }}</span>
          <p>Attack</p>
        </div>
        <div class="stat">
          <span>{{ pokemon.defense }}</span>
          <p>Defense</p>
        </div>
      </div>
      <div class="types">
        <span
          v-for="(type, index) in pokemon.types"
          :key="index"
          class="type-badge"
          :class="type.toLowerCase()"
        >
          {{ type }}
        </span>
      </div>
    </div>

    <!-- Partie droite (Image) -->
    <div class="image" :style="{ backgroundColor: bgColor }">
      <img :src="pokemon.image" :alt="pokemon.name" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
  bgColor: {
    type: String,
    default: "#f2f2f2",
  },
});
</script>

<style scoped>
.pokemon-card {
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  height: 140px;
  cursor: pointer;
}
.pokemon-card:hover {
  transform: translateY(-5px);
}

/* Partie infos */
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.8rem;
}
.info h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
}
.stats {
  display: flex;
  gap: 0.8rem;
}
.stat {
  text-align: center;
}
.stat span {
  display: block;
  width: 42px;
  height: 42px;
  border: 2px solid #000;
  border-radius: 50%;
  line-height: 42px;
  font-weight: bold;
  font-size: 0.85rem;
}
.stat p {
  margin: 0;
  font-size: 0.7rem;
}
.types {
  display: flex;
  gap: 0.5rem;
}
.type-badge {
  font-size: 0.65rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-weight: 500;
  color: #fff;
}

/* Partie image */
.image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 140px;
}
.image img {
  max-width: 90px;
  max-height: 90px;
}
</style>
