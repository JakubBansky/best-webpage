<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footerr from './components/Footerr.vue';
</script>

<template>
  <Navbar></Navbar>
  <RouterView />
  <Footerr></Footerr>
</template>


