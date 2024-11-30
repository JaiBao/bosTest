<!-- index.vue -->
<template>
  <q-page>
    <section class="section1">
      <h6>Discover the best food & drinks in New York</h6>
      <p>The meals you love, delivered with care</p>
      <div class="searchBar row">
        <q-input outlined label="New York" readonly class="location" bg-color="white">
          <template v-slot:prepend>
            <q-icon name="place" />
          </template>
        </q-input>
        <q-input outlined label="search for resturant" class="search" bg-color="white">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn color="pink" class="searchbtn">search</q-btn>
      </div>
    </section>

    <section class="section2">
      <foodCard />
    </section>

    <section class="section3">
      <div class="title">
        <div class="left">
          <h6>Collections</h6>
          <p>Explore curated lists of top restaurants, cafes, pubs, and bars in New York, based on trends</p>
        </div>
        <div class="right pointer">View all collections</div>
      </div>
      <foodCard2 />
    </section>

    <section class="section4">
      <h6>Browse By Cuisine</h6>
      <foodCard3 />
    </section>

    <section class="section5">
      <h6>Popular Near You</h6>
      <FoodCard4 />
    </section>
    <section class="section6">
      <div class="img">
        <img src="https://foodhub-nuxt.vercel.app/_nuxt/img/App.4927ff9.png" alt="img" />
      </div>

      <div class="content">
        <h6>Get the Mobile App</h6>
        <p>We will send you a link, open it on your phone to download the app</p>
        <div class="q-gutter-sm radio">
          <q-radio v-model="shape" val="email" label="email" />
          <q-radio v-model="shape" val="phone" label="phone" />
        </div>

        <div class="searchinput">
          <q-input outlined label="email" class="emailinput"></q-input>
          <q-btn color="pink" class="searchbtn">search</q-btn>
        </div>
        <p>Download App from</p>
        <div class="googleIos">
          <img src="https://foodhub-nuxt.vercel.app/_nuxt/img/google-play.430ca54.png" alt="google" />
          <img src="https://foodhub-nuxt.vercel.app/_nuxt/img/app-store.63e3986.png" alt="ios" />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
const shape = ref('email')
</script>

<style lang="scss" scoped>
@import 'assets/index.scss';
</style>
