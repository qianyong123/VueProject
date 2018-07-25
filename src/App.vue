<template>
  <div id="app">
    <add-header></add-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addHeader from "./components/common/header/Header.vue";
export default {
  name: 'App',
  components: {
    addHeader
  }
}
</script>

<style>

</style>
