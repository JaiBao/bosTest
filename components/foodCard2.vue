<template>
  <div class="flex flex-wrap">
    <q-card v-for="(card, index) in cards" :key="index" class="q-ma-md card pointer" bordered>
      <!-- 圖片 -->
      <div class="image-wrapper">
        <img :src="card.image" :alt="card.altText" class="card-image" />

        <q-card-section class="overlay-content">
          <div class="text-white text-bold text-shadow">{{ card.title }}</div>
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>

<script setup>
const cards = [
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片1',
    title: '標題1'
  },
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片2',
    title: '標題2'
  },
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片3',
    title: '標題3'
  },
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片4',
    title: '標題4'
  }
]
</script>

<style scoped>
.q-card {
  width: 100%;
  position: relative;
  overflow: hidden;
  @media (min-width: 576px) {
    width: 45%;
  }
  @media (min-width: 1024px) {
    max-width: 30%;
  }
}

.image-wrapper {
  position: relative;
  width: 100%;

  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 8px;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
}

.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
}
</style>
