<template>
  <div
    class="absolute flex items-center justify-center pointer-events-none"
    :class="[
      valeur === 'pokeball' ? 'w-[300px] h-[300px]' : 'w-[200px] h-[200px]'
    ]"
  >
    <!-- Contour noir adaptatif -->
    <div
      class="absolute rounded-full bg-black"
      :class="[valeur === 'pokeball' ? 'inset-20' : 'inset-31']"
    ></div>

    <!-- Haut dynamique -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 rounded-t-full flex items-center justify-center"
      :class="[
        valeur === 'pokeball'
          ? 'w-[272px] h-[136px] translate-y-[60px]'
          : 'w-[180px] h-[90px] translate-y-[110px]'
      ]"
      :style="{
        backgroundColor: valeur === 'pokeball' ? '#c5312a' : '#3b3b3b',
      }"
    >
      <!-- Lettre R rouge uniquement pour pokeball-r -->
      <span
        v-if="valeur === 'pokeball-r'"
        class="text-[#d32f2f] font-extrabold drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] select-none"
        :class="[
          valeur === 'pokeball' ? 'hidden' : 'text-[50px] -mt-[12px]'
        ]"
      >
        R
      </span>
    </div>

    <!-- Bas blanc -->
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-b-full"
      :class="[
        valeur === 'pokeball'
          ? 'w-[272px] h-[136px] -translate-y-[60px]'
          : 'w-[180px] h-[90px] -translate-y-[110px]'
      ]"
      style="background-color: #e7e7e9"
    ></div>

    <!-- Bouton central noir -->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black z-20"
      :class="[
        valeur === 'pokeball'
          ? 'w-[94px] h-[94px]'
          : 'w-[63px] h-[63px]'
      ]"
    ></div>

    <!-- Bouton central blanc -->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white z-30 flex items-center justify-center border-2 border-gray-300"
      :class="[
        valeur === 'pokeball'
          ? 'w-[73px] h-[73px]'
          : 'w-[49px] h-[49px]'
      ]"
    >
      <!-- Petit cercle gris intérieur -->
      <div
        class="rounded-full border-[2px] border-gray-400"
        :class="[
          valeur === 'pokeball'
            ? 'w-[43px] h-[43px]'
            : 'w-[29px] h-[29px]'
        ]"
      ></div>
    </div>

    <!-- Reflet lumineux -->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-40 overflow-hidden pointer-events-none"
      :class="[
        valeur === 'pokeball'
          ? 'w-[73px] h-[73px]'
          : 'w-[49px] h-[49px]'
      ]"
    >
      <div
        class="absolute rounded-full bg-white opacity-40"
        :class="[
          valeur === 'pokeball'
            ? 'top-[10px] left-[14px] w-[24px] h-[24px]'
            : 'top-[7px] left-[9px] w-[16px] h-[16px]'
        ]"
      ></div>
      <div
        class="absolute rounded-full bg-white opacity-60"
        :class="[
          valeur === 'pokeball'
            ? 'top-[14px] left-[19px] w-[10px] h-[10px]'
            : 'top-[9px] left-[12px] w-[6px] h-[6px]'
        ]"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  valeur: {
    type: String,
    default: 'pokeball',
  },
});
</script>
