<!-- foodMenu.vue -->
<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="New York" />
        <q-breadcrumbs-el label="foodMenu" />
      </q-breadcrumbs>
    </div>

    <section class="section1">
      <div class="img1">
        <img src="https://via.placeholder.com/400" alt="img" />
      </div>
      <div class="img2">
        <img src="https://via.placeholder.com/400" alt="img" />
        <img src="https://via.placeholder.com/400" alt="img" />
        <img src="https://via.placeholder.com/400" alt="img" />
        <img src="https://via.placeholder.com/400" alt="img" />
      </div>
    </section>
    <section class="section2">
      <div class="header">
        <div class="title">Starbucks</div>
        <div class="rating">
          <span class="stars">★★★★★</span>
          <span class="score">4.5</span>
          <span class="reviews">(1004)</span>
        </div>
      </div>
      <div class="description">Coffee, signature roasts, light bite, quick bite, fast foods</div>
      <div class="details">
        <div class="detail-item">
          <span class="icon">📍</span>
          <span class="text">
            The Dorothy Ross Friedman Residence, NY, US -
            <a href="#">Show Map</a>
          </span>
        </div>
        <div class="detail-item">
          <span class="icon">⏰</span>
          <span class="text">
            <span class="open-now">Open Now</span>
            - Sun - Mon: 9am - 10pm
          </span>
        </div>
        <div class="detail-item">
          <span class="icon">🌐</span>
          <span class="text"><a href="http://www.starbucks.com">www.starbucks.com</a></span>
        </div>
      </div>
    </section>
    <q-tabs v-model="activeTab" class="text-black w-100" active-color="pink" indicator-color="pink">
      <q-tab name="page1" label="Order Online" />
      <q-tab name="page2" label="Book A Table" />
      <q-tab name="page3" label="Reviews" />
    </q-tabs>

    <!-- QTab -->

    <!-- Tab Content -->
    <div v-if="activeTab === 'page1'" class="tab-content section3">
      <div class="sidebar">
        <ul>
          <li v-for="(category, index) in categories" :key="index">{{ category.name }} ({{ category.count }})</li>
        </ul>
      </div>
      <div class="content">
        <h3>Recommended</h3>
        <div v-for="(item, index) in items" :key="index" class="item-card">
          <img :src="item.image" alt="Food Image" class="item-image" />
          <div class="item-details">
            <h4>{{ item.name }}</h4>
            <span class="badge">MUST TRY</span>
            <div class="rating">
              <span>★★★★★</span>
              ({{ item.reviews }})
            </div>
            <div class="pricing">
              <span class="original-price">${{ item.originalPrice }}</span>
              <span class="discounted-price">${{ item.discountedPrice }}</span>
              <span class="discount">{{ item.discount }}% off</span>
            </div>
            <p class="description">{{ item.description }}</p>
            <button @click="addToCart(item)" class="add-btn">ADD +</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="activeTab === 'page2'" class="page2">
      <div class="selects">
        <q-select outlined v-model="model" :options="options" label="Outlined" />
        <q-select outlined v-model="model2" :options="options" label="Outlined" />
        <q-input outlined v-model="model3" label="First Name" />
        <q-input outlined v-model="model4" label="Last Name" />
        <q-input outlined v-model="model5" label="email" />
        <q-input outlined v-model="model6" label="phone" />
      </div>
      <q-btn color="pink" class="searchbtn">book</q-btn>
      <div class="imgs">
        <img src="https://foodhub-nuxt.vercel.app/_nuxt/img/download-app.c757568.png" alt="img" />
      </div>
    </div>
    <div v-if="activeTab === 'page3'" class="page3">
      <h3>Reviews</h3>
      <div class="review-card" v-for="(review, index) in reviews" :key="index">
        <!-- 用戶信息 -->
        <div class="user-info">
          <img :src="review.user.avatar" alt="User Avatar" class="user-avatar" />
          <div>
            <div class="user-name">{{ review.user.name }}</div>
            <div class="user-meta">{{ review.user.reviews }} Reviews, {{ review.user.followers }} Followers</div>
          </div>
        </div>

        <!-- 評分與內容 -->
        <div class="review-meta">
          <div class="rating">
            <span>★</span>
            {{ review.rating }}
          </div>
          <div class="review-date">{{ review.date }}</div>
        </div>
        <p class="review-text">{{ review.content }}</p>

        <!-- 圖片展示 -->
        <div class="review-images">
          <img v-for="(image, idx) in review.images" :key="idx" :src="image" alt="Review Image" class="review-image" />
        </div>

        <!-- 喜歡與評論 -->
        <div class="review-actions">
          <span>{{ review.likes }} Likes, {{ review.comments }} Comments</span>
          <div>
            <button @click="likeReview(index)">Like</button>
            <button>Comment</button>
          </div>
        </div>

        <!-- 回覆區 -->
        <div class="review-replies" v-if="review.replies.length">
          <div v-for="(reply, replyIndex) in review.replies" :key="replyIndex" class="reply">
            <img :src="reply.user.avatar" alt="Reply User Avatar" class="reply-avatar" />
            <div>
              <div class="reply-user">{{ reply.user.name }}</div>
              <p class="reply-text">{{ reply.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
const activeTab = ref('page1')
const model = ref(null)
const model2 = ref(null)
const model3 = ref('')
const model4 = ref('')
const model5 = ref('')
const model6 = ref('')
const options = ['foo', 'bar', 'fizz', 'buzz']

const categories = [
  { name: 'Recommended', count: 40 },
  { name: 'DPB Special Combos', count: 10 },
  { name: 'Chinese Starters', count: 30 },
  { name: 'Chinese Main Course', count: 75 },
  { name: 'Indian Main Course', count: 63 },
  { name: 'Rice & Pulao', count: 7 },
  { name: 'Desserts', count: 1 },
  { name: 'Soup & Wonton', count: 15 },
  { name: 'Accompaniment', count: 4 },
  { name: 'Biryani', count: 1 }
]

const items = [
  {
    id: 1,
    name: 'Tandoori Chicken (Full)',
    image: 'https://via.placeholder.com/150',
    reviews: 57,
    originalPrice: 25,
    discountedPrice: 22.5,
    discount: 10,
    description: '4 Pcs mutton in chicken keema gravy'
  },
  {
    id: 2,
    name: 'Tandoori Chicken (Half)',
    image: 'https://via.placeholder.com/150',
    reviews: 45,
    originalPrice: 15,
    discountedPrice: 12.5,
    discount: 15,
    description: '2 Pcs mutton in chicken keema gravy'
  }
]

const addToCart = item => {
  cartStore.addToCart(item)
}

const reviews = ref([
  {
    user: {
      name: 'Abriella Bond',
      avatar: 'https://via.placeholder.com/50',
      reviews: 2,
      followers: 9
    },
    rating: 4.0,
    date: '3 Days Ago',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    likes: 4,
    comments: 2,
    replies: [
      {
        user: {
          name: 'Emmet McDermott',
          avatar: 'https://via.placeholder.com/40'
        },
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis.'
      },
      {
        user: {
          name: 'Emmet McDermott',
          avatar: 'https://via.placeholder.com/40'
        },
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis vitae gravida egestas ac account.'
      }
    ]
  },
  {
    user: {
      name: 'Emmet McDermott',
      avatar: 'https://via.placeholder.com/50',
      reviews: 5,
      followers: 12
    },
    rating: 5.0,
    date: '1 Week Ago',
    content: 'This is a fantastic dish! Highly recommended.',
    images: ['https://via.placeholder.com/150'],
    likes: 10,
    comments: 3,
    replies: []
  }
])

const likeReview = index => {
  reviews.value[index].likes++
}
</script>

<style lang="scss" scoped>
@import 'assets/foodMenu.scss';
</style>
