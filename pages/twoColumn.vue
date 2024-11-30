<!-- twoColumn.vue -->
<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="New York" />
        <q-breadcrumbs-el label="Resturants" />
      </q-breadcrumbs>
    </div>

    <section class="section1">
      <div class="filters">
        <!-- 左側篩選欄 -->
        <div class="filter-section">
          <h4>Categories</h4>
          <div class="checkbox-group">
            <q-checkbox v-for="(category, index) in categories" :key="index" v-model="category.checked" :label="category.label" />
          </div>

          <h4>Sort By</h4>
          <q-option-group v-model="sortBy" :options="sortOptions" inline color="primary" />

          <h4>Cost per person</h4>
          <q-slider v-model="costRange" :min="minCost" :max="maxCost" range color="primary" label />
        </div>

        <!-- 商品部分 -->
        <div class="products">
          <h4>{{ totalRestaurants }} Delivery Restaurants in {{ location }}</h4>
          <foodCard4 />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
const categories = ref([
  { label: 'Pizza', checked: true },
  { label: 'Chinese', checked: false },
  { label: 'Indian', checked: true },
  { label: 'Burger', checked: true }
])

const sortBy = ref('popularity')
const sortOptions = [
  { label: 'Popularity', value: 'popularity' },
  { label: 'Rating', value: 'rating' },
  { label: 'Price', value: 'price' }
]

const costRange = ref([20, 40])
const minCost = 0
const maxCost = 100

const totalRestaurants = 184
const location = 'New York'
</script>

<style lang="scss" scoped>
@import 'assets/twoColumn.scss';
</style>
