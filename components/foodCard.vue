<template>
  <div class="q-gutter-md flex flex-wrap">
    <q-card v-for="(card, index) in cards" :key="index" class="q-pa-md q-ma-md pointer" bordered>
      <!-- 圖片 -->
      <img :src="card.image" :alt="card.altText" class="q-mb-md" />

      <!-- 卡片內容 -->
      <q-card-section>
        <div class="text-h6">{{ card.title }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
const cards = [
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片1',
    title: '卡片標題1'
  },
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片2',
    title: '卡片標題2'
  },
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片3',
    title: '卡片標題3'
  },
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片4',
    title: '卡片標題4'
  }
]
</script>

<style scoped>
.q-card {
  max-width: 30%;
}
</style>
