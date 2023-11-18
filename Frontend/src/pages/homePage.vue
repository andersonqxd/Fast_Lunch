<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { type Produto } from '@/types';
import imgProdut from '@/components/imgProdut.vue';
import { produtService } from '@/api/ProdutoService';

const loading =ref(true)
const produtos = ref<Produto[]>([])
const error = ref('')

onMounted(async () => {
  try {
    produtos.value = await produtService.all()
  } catch (e) {
    if(e instanceof Error) {
      error.value = e.message
    }
  } finally {
    loading.value = false
  }
})

</script>

<template>
    <div v-if="error" class="alert alert-danger alert-dismissible fade show" role = "alert">
    {{ error }}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div v-if="loading" class="text-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">loading...</span>
        </div>
    </div>
    <template v-else>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="produto in produtos" :key="produto.id">
              <imgProdut
              :id="produto.id"
              :name="produto.name"
              :price="produto.price"
              :cover="produto.cover" 
              ></imgProdut>
          </div>
        </div>
    </template>

</template>