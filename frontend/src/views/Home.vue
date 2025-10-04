<script setup lang="ts">
import Pokeball from "@/components/Pokeball.vue";
</script>

<template>
  <div
    class="min-h-screen flex flex-col overflow-hidden"
    style="background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%)"
  >
    <!-- Section principale -->
    <div
      class="flex flex-col md:flex-row items-start justify-start px-12 lg:px-24 py-16 flex-1 max-w-[1400px] mx-auto w-full translate-y-[-30px] relative"
    >
      <!-- Texte à gauche -->
      <div class="max-w-xl text-left relative z-10 ml-5 mt-15">
        <h1 class="text-[64px] lg:text-[72px] text-black leading-tight mb-15">
          <span class="font-semibold">Find</span>
          all your<br />
          favorite<br />
          <span class="font-semibold">Pokemon</span>
        </h1>
        <p
          class="font-normal text-[25px] leading-[100%] text-black mb-8 tracking-[5px] mb-15"
        >
          You can know the type of Pokemon, its strengths, disadvantages and
          abilities
        </p>
        <RouterLink
          to="/pokedex"
          class="inline-block bg-[#5cdb95] text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-[0_6px_0_#3d8b63] active:shadow-[0_2px_0_#3d8b63] active:translate-y-[4px] transition-all duration-150 text-[16px]"
        >
          See pokemons
        </RouterLink>
      </div>

      <!-- Pikachu à Secondaire -->
      <div
        class="relative flex-1 flex justify-center items-center mt-12 md:mt-0 ml-0 md:ml-12"
      >
    <Pokeball
          class="absolute right-[265px] z-10 top-[-50px] rotate-[-5deg]"
          style="width: 420px; height: 420px; opacity: 0.86;"
          valeur="pokeball-r"
        />


        <!-- Nuage haut droite (DERRIÈRE la Pokéball) -->
        <img
          src="@/assets/cloud.png"
          alt="Cloud"
          class="absolute top-[35px] right-[-100px] w-90 opacity-100 z-0"
        />

        <!-- Pokéball classique (repositionnée en haut à droite) -->
        <Pokeball
          class="absolute top-[-30px] right-[-300px] z-10 "
          style="width: 420px; height: 420px; opacity: 0.95"
          valeur="pokeball"
        />

        <!-- Ombre sous le pied de Pikachu -->
        <div
          class="absolute bottom-[-150px] right-[150px] w-[100px] h-[20px] bg-black/20 rounded-full blur-md z-15"
        ></div>

        <!-- Pikachu  -->
        <img
          src="@/assets/pikachu.png"
          alt="Pikachu"
          class="w-[500px] lg:w-[550px] right-[12px] relative z-20 top-[120px]"
          style="transform: translateY(-20px) rotate(-13deg)"
        />

        <!-- Nuage bas droite -->
        <img
          src="@/assets/cloud.png"
          alt="Cloud"
          class="absolute right-[360px] w-60 opacity-100 z-10 top-[370px]"
        />
      </div>
    </div>
  </div>
</template>
