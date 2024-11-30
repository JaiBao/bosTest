<!-- layouts/default.vue -->
<template>
  <q-layout view="hHh LpR fff">
    <q-header elevated style="padding: 1% 0" class="toolbar">
      <q-toolbar class="row justify-between p-0-5 w-100">
        <div class="pointer headLogo" @click="navigateToHome"><img src="https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png" /></div>

        <div class="searchBar row">
          <q-input outlined label="New York" readonly class="location">
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
          </q-input>
          <q-input outlined label="search for resturant" class="search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <div class="rightBtn col-md-2 row justify-end no-wrap">
          <q-btn flat text-color="black">
            <q-icon name="person" color="black" />
            account
          </q-btn>
          <q-btn class="headBtn" flat text-color="black" @click="toggleCartDialog">
            <q-icon name="shopping_cart" color="black" />
            <q-badge color="green" floating>{{ cartStore.cartItemCount }}</q-badge>
          </q-btn>

          <!-- 漢堡 -->
          <q-btn dense flat round @click="toggleRightDrawer" color="black">
            <q-icon left size="3em" name="menu" />
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-dialog v-model="cartDialogOpen" persistent>
      <q-card style="min-width: 400px">
        <q-card-section>
          <div class="text-h6">購物車</div>
        </q-card-section>

        <q-card-section>
          <div v-if="cartStore.cart.length > 0">
            <q-list>
              <q-item v-for="(item, index) in cartStore.cart" :key="index">
                <q-item-section>{{ item.name }}</q-item-section>
                <q-item-section>{{ item.quantity }}</q-item-section>
                <q-item-section>
                  <q-btn flat color="negative" icon="delete" @click="removeFromCart(item.id)">刪除</q-btn>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <div v-else>
            <p>購物車是空的</p>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="關閉" @click="cartDialogOpen = false" />
          <q-btn flat label="清空購物車" color="negative" @click="clearCart" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- 漢堡 -->
    <q-drawer v-model="rightDrawerOpen" side="left" behavior="mobile" bordered class="column bg-white text-black items-end" :width="300" style="z-index: 2999">
      <div class="row">
        <q-icon @click="rightDrawerOpen = false" name="close" size="md" style="text-align: right"></q-icon>
      </div>
      <q-list class="drawerList">
        <q-expansion-item expand-separator icon="dashboard" label="Darshbords" default-opened>
          <q-expansion-item :header-inset-level="1" expand-separator label="Receipts" default-opened></q-expansion-item>
          <q-expansion-item :header-inset-level="1" expand-separator label="Photos" default-opened></q-expansion-item>
          <q-expansion-item :header-inset-level="1" expand-separator label="Order List" default-opened></q-expansion-item>
          <q-expansion-item :header-inset-level="1" expand-separator label="Order History" default-opened></q-expansion-item>
          <q-expansion-item :header-inset-level="1" expand-separator label="Followers" default-opened></q-expansion-item>
          <q-expansion-item :header-inset-level="1" expand-separator label="Bookmarks" default-opened></q-expansion-item>
        </q-expansion-item>

        <q-expansion-item expand-separator icon="local_dining" label="Resturant" default-opened>
          <q-expansion-item :header-inset-level="1" expand-separator label="foodMenu" default-opened to="/foodMenu"></q-expansion-item>
          <q-expansion-item :header-inset-level="1" expand-separator label="Resturant Two Column" default-opened to="twoColumn"></q-expansion-item>
          <q-expansion-item :header-inset-level="1" expand-separator label="Search Resturant" default-opened></q-expansion-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <slot />
    </q-page-container>

    <q-footer class="bg-white text-black">
      <div class="footerToolbar">
        <div class="footerFirst">
          <h6>Popular Localities In & Around New York</h6>
          <div class="content">
            <p v-for="(location, index) in locations" :key="index">
              {{ location.name }}
              <span>({{ location.places }} places)</span>
            </p>
          </div>
        </div>
        <div class="footertwice">
          <div class="footertwiceLeft">
            <div class="logos">
              <img src="https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png" class="logo" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut
                sollicitudin elit at amet.
              </p>
              <div class="googleIos">
                <img src="https://foodhub-nuxt.vercel.app/_nuxt/img/google-play.430ca54.png" alt="google" />
                <img src="https://foodhub-nuxt.vercel.app/_nuxt/img/app-store.63e3986.png" alt="ios" />
              </div>
            </div>
          </div>
          <div class="footertwiceRight">
            <div class="about">
              <h6>About Us</h6>
              <p>Careers</p>
              <p>Our Stores</p>
              <p>Our Cares</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div class="customs">
              <h6>Customer Care</h6>
              <p>Help Center</p>
              <p>How to Buy</p>
              <p>Track Your Order</p>
              <p>Corporate & Bulk Purchasing</p>
              <p>Returns & Refunds</p>
            </div>
            <div class="contack">
              <h6>Contact Us</h6>
              <p>Jalalabad 20/1, Shah Farid Road Sylhet, Bangladesh. Email: uilib@gmail.com Phone: +880 1123 456 780</p>
              <p>Sylhet, Bangladesh.</p>
              <p>Email: uilib@gmail.com</p>
              <p>Phone: +880 1123 456 780</p>

              <div class="contacks">
                <img src="/default/facebook.png" alt="" />
                <img src="/default/facebook.png" alt="" />
                <img src="/default/facebook.png" alt="" />
                <img src="/default/facebook.png" alt="" />
                <img src="/default/facebook.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
const cartDialogOpen = ref(false)

const toggleCartDialog = () => {
  cartDialogOpen.value = !cartDialogOpen.value
}

const removeFromCart = id => {
  cartStore.removeFromCart(id)
}

const clearCart = () => {
  cartStore.clearCart()
}
const rightDrawerOpen = ref(false)

const router = useRouter()
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const navigateToHome = () => {
  router.push('/')
}

// 定義地點數據
const locations = [
  { name: 'Newport', places: 26 },
  { name: 'Newport', places: 26 },
  { name: 'Newport', places: 26 },
  { name: 'Newport', places: 26 },
  { name: 'Brooklyn', places: 14 },
  { name: 'Brooklyn', places: 14 },
  { name: 'Brooklyn', places: 14 },
  { name: 'Brooklyn', places: 14 },
  { name: 'Chinatown', places: 10 },
  { name: 'Chinatown', places: 10 },
  { name: 'Chinatown', places: 10 },
  { name: 'Chinatown', places: 10 },

  { name: 'Chelsea', places: 20 },
  { name: 'Chelsea', places: 20 },
  { name: 'Chelsea', places: 20 },
  { name: 'Chelsea', places: 20 },
  { name: 'Coney Island', places: 6 },
  { name: 'Coney Island', places: 6 },
  { name: 'Coney Island', places: 6 },
  { name: 'Coney Island', places: 6 }
]
</script>
<style lang="scss" scoped>
@import 'assets/default.scss';
</style>
