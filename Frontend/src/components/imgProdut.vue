<script setup lang="ts">
import { getUploadURL } from '@/composables/useUploadFile'
import { type Cover } from '@/types';
defineProps<{
  id: number,
  name: string,
  price: number
  cover: Cover // imagem do produto
}>()
</script>

<template>
    <router-link :to="`/produtos/${id}`">
      <div class="card shadow-sm">
        <img class="card-img-top" width="100%" :src="getUploadURL(cover.url)" :alt="cover.altenativeText">
        <div class="card-body">
          <h5 class="card-title">{{ name }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Preço: {{ price }}</h6>
        </div>
      </div>
    </router-link>
</template>
    
    <style scoped>
    .card-img-top:hover {
      filter: grayscale(0.9);
    }
    </style>
    