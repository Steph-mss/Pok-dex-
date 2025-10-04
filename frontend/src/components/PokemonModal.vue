<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <button class="close-btn" @click="$emit('close')">
      <svg
        class="w-10 h-10"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        stroke-width="6"
      >
     
        <path d="M6 6L18 18M6 18L18 6" stroke-linecap="round" />
      </svg>
    </button>

    <div class="modal-card">
      <!-- Bouton fermer -->

      <div class="modal-content">
        <!-- Partie gauche -->
        <div class="modal-left" :style="{ background: pokemon.color }">
          <img :src="pokemon.image" :alt="pokemon.name" />
          <div class="types">
            <span
              v-for="(type, i) in pokemon.types"
              :key="i"
              class="type-badge"
              :class="type.toLowerCase()"
            >
              {{ type }}
            </span>
          </div>
        </div>

        <!-- Partie droite -->
        <div class="modal-right" :style="{ background: gradientColor }">
          <!-- Header -->
          <div class="header">
            <h1>{{ pokemon.name }}</h1>
            <div class="header-info">
              <p>Generation {{ pokemon.generation }}</p>
              <span class="id-badge">{{ pokemon.id }}</span>
            </div>
          </div>

          <!-- Abilities -->
          <div class="section">
            <p class="section-title">Abilities</p>
            <p>{{ pokemon.abilities?.join(" - ") || "Unknown" }}</p>
          </div>

          <!-- HP & Experience -->
          <div class="section bars">
            <div class="bar">
              <p class="section-subtitle">Healthy Points</p>
              <p class="value">{{ pokemon.hp }}</p>
              <div class="progress">
                <div
                  class="progress-fill green"
                  :style="{ width: pokemon.hp + '%' }"
                ></div>
              </div>
            </div>
            <div class="bar">
              <p class="section-subtitle">Experience</p>
              <p class="value">{{ pokemon.experience }}</p>
              <div class="progress">
                <div
                  class="progress-fill yellow"
                  :style="{ width: pokemon.experience / 10 + '%' }"
                ></div>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <div class="stats">
            <div class="stat">
              <div class="circle">{{ pokemon.defense }}</div>
              <p>Defense</p>
            </div>
            <div class="stat">
              <div class="circle">{{ pokemon.attack }}</div>
              <p>Attack</p>
            </div>
            <div class="stat">
              <div class="circle">{{ pokemon.spAttack || 130 }}</div>
              <p>Sp Attack</p>
            </div>
            <div class="stat">
              <div class="circle">{{ pokemon.spDefense || 271 }}</div>
              <p>Sp Defense</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  pokemon: { type: Object, required: true },
});

const darkenHex = (hex, factor = 0.55) => {
  let c = hex.substring(1);
  let rgb = [
    parseInt(c.substring(0, 2), 16),
    parseInt(c.substring(2, 4), 16),
    parseInt(c.substring(4, 6), 16),
  ];
  rgb = rgb.map((v) => Math.max(0, Math.floor(v * factor)));
  return `rgb(${rgb.join(',')})`;
};

const gradientColor = computed(() => {
  
  return `linear-gradient(to bottom, ${darkenHex(
    props.pokemon.color,
    0.55
  )}, ${props.pokemon.color})`;
});

</script>

<style scoped>
/* Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(75, 75, 75, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

/* Modal container */
.modal-card {
  background: #7f1d1d; 
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 5rem;
  right: 10rem;
  color: #1f2937; 
  background: none;
  border: none;
  cursor: pointer; 
  z-index: 10;
  transition: color 0.2s ease;
}

.close-btn:hover {
  color: black; 
}

.close-btn svg {
  width: 40px;
  height: 40px;
}

/* Content split */
.modal-content {
  display: flex;
}

/* Left */
.modal-left {
  flex: 1;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  position: relative;

  /* 🌤️ Ombre douce vers la droite */
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.25),
              inset -2px 0 6px rgba(255, 255, 255, 0.15);
  z-index: 2;

  transition: box-shadow 0.4s ease, transform 0.3s ease;
}
.modal-left:hover {
  box-shadow: 6px 0 25px rgba(0, 0, 0, 0.35),
              inset -3px 0 8px rgba(255, 255, 255, 0.2);
  transform: translateX(2px);
}

.modal-left img {
  max-width: 450px;
  object-fit: contain;
}
.types {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  gap: 0.5rem;
}
.type-badge {
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  font-weight: bold;
  color: #fff;
  font-size: 0.9rem;

  /* Effet 3D */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3),
     inset 0 -2px 4px rgba(0, 0, 0, 0.4),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);
  transform: translateY(0);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  cursor: pointer;
}

/* Effet "pressé" au hover */
.type-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4), inset 0 -3px 6px rgba(0, 0, 0, 0.5),
    inset 0 2px 5px rgba(255, 255, 255, 0.25);
}

/* Right */
.modal-right {
  flex: 1.2;
  background: #7f1d1d;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
}
.header h1 {
  font-size: 2.2rem;
  font-weight: 700;
}
.header-info {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.header-info p {
  font-size: 1.2rem;
}
.id-badge {
  background: #facc15;
  color: black;
  font-weight: bold;
  border-radius: 9999px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}

/* Section */
.section {
  background: white;
  color: black;
  border-radius: 16px;
  padding: 1rem 1.2rem;
  margin-bottom: 1.2rem;
}
.section-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}
.section-subtitle {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}
.value {
  font-weight: 700;
  margin-bottom: 0.3rem;
}

/* Bars */
.bars {
  display: flex;
  gap: 1.2rem;
}
.bar {
  flex: 1;
}
.progress {
  background: #e5e7eb;
  height: 8px;
  border-radius: 6px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
}
.progress-fill.green {
  background: #22c55e;
}
.progress-fill.yellow {
  background: #facc15;
}

/* Stats */
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.8rem;
}
.stat {
  background: white;
  border-radius: 12px;
  padding: 0.8rem;
  text-align: center;
  color: black;
}
.circle {
  width: 48px;
  height: 48px;
  border: 3px solid black;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 0.3rem;
}
</style>
