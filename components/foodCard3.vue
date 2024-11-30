<template>
  <div class="avatars q-gutter-md flex flex-wrap justify-between">
    <div v-for="(card, index) in cards" :key="index" class="avatar q-ma-md pointer column items-center justify-cneter" bordered>
      <!-- 圖片 -->
      <q-avatar class="img">
        <img :src="card.image" :alt="card.altText" class="q-mb-md" />
      </q-avatar>

      <!-- 卡片內容 -->
      <q-card-section>
        <div class="text-h6">{{ card.title }}</div>
      </q-card-section>
    </div>
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
  },
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片1',
    title: '卡片標題1'
  },
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片2',
    title: '卡片標題2'
  }
]
</script>

<style scoped lang="scss">
.q-card {
  width: 100%;

  @media (min-width: 576px) {
    width: 45%;
  }
  @media (min-width: 1024px) {
    max-width: 30%;
  }
}
.avatars {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  .avatar {
    padding: 5%;
    .img {
      width: 100%;
      height: 300px;
      object-fit: contain;
    }
  }
  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .avatar {
      padding: 5%;
      .img {
        width: 100%;
        height: 150px;
        object-fit: contain;
      }
    }
  }
}
</style>
