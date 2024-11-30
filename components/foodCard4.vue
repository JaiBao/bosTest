<template>
  <div class="q-gutter-md flex flex-wrap">
    <q-card v-for="(card, index) in cards" :key="index" class="q-ma-md card" bordered>
      <!-- 折扣標籤 (僅在有折扣時顯示) -->
      <div v-if="card.hasDiscount" class="discount-tag">
        {{ card.discount }}
      </div>

      <!-- 圖片 -->
      <div class="image-wrapper">
        <img :src="card.image" :alt="card.altText" class="card-image" />
      </div>

      <!-- 卡片內容 -->
      <q-card-section class="card-content">
        <!-- 標題和星星評分 -->
        <div class="content-header">
          <div class="title">{{ card.title }}</div>
          <div class="rating">
            <q-icon name="star" color="orange" />
            {{ card.rating }}
          </div>
        </div>
        <!-- 價格和描述 -->
        <div class="price">{{ card.price }}</div>
        <div class="description">{{ card.description }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
const cards = [
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片1',
    title: 'Starbucks',
    hasDiscount: true,
    discount: 'Flat 30% Off',
    rating: '4.5 / 5',
    price: '$20',
    description: 'Coffee, set menu • 15 - 20 min'
  },
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片2',
    title: "McDonald's",
    hasDiscount: false,
    discount: '',
    rating: '4.3 / 5',
    price: '$15',
    description: 'Burgers, fries • 10 - 15 min'
  },
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片3',
    title: 'Pizza Hut',
    hasDiscount: true,
    discount: 'Flat 20% Off',
    rating: '4.0 / 5',
    price: '$18',
    description: 'Pizza, sides • 20 - 25 min'
  },
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片4',
    title: 'KFC',
    hasDiscount: false,
    discount: '',
    rating: '4.7 / 5',
    price: '$22',
    description: 'Chicken, combos • 10 - 15 min'
  },
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片2',
    title: "McDonald's",
    hasDiscount: false,
    discount: '',
    rating: '4.3 / 5',
    price: '$15',
    description: 'Burgers, fries • 10 - 15 min'
  },
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片3',
    title: 'Pizza Hut',
    hasDiscount: true,
    discount: 'Flat 20% Off',
    rating: '4.0 / 5',
    price: '$18',
    description: 'Pizza, sides • 20 - 25 min'
  },
  {
    image: 'https://via.placeholder.com/400',
    altText: '圖片4',
    title: 'KFC',
    hasDiscount: false,
    discount: '',
    rating: '4.7 / 5',
    price: '$22',
    description: 'Chicken, combos • 10 - 15 min'
  }
]
</script>

<style scoped>
.q-card {
  width: 100%;
  overflow: hidden;
  position: relative;
  gap: 2%;

  @media (min-width: 576px) {
    width: 45%;
  }
  @media (min-width: 1024px) {
    max-width: 30%;
  }
}

.discount-tag {
  position: absolute;
  top: 10px;
  left: 0px;
  background-color: #d23f57;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 0 10px 10px 0 !important;
  z-index: 1;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.title {
  font-weight: bold;
  font-size: 18px;
}

.rating {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.rating q-icon {
  margin-right: 4px;
}

.price {
  color: red;
  font-weight: bold;
  margin-bottom: 4px;
}

.description {
  color: #757575;
  font-size: 14px;
}
</style>
