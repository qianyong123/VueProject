<template>
  <div id="app">
    <add-header></add-header>
    <home></home>
  </div>
</template>

<script>
import addHeader from "./components/common/header/Header.vue";
import Home from "./components/pages/home/Home.vue";
export default {
  name: 'App',
  components: {
    addHeader,
    Home
  }
}
</script>

<style>

</style>
