<template>
  <div id="app">
    <keep-alive>
      <router-View v-if="$route.meta.KeepAlive" ></router-View>
    </keep-alive>
      <router-View v-if="!$route.meta.KeepAlive"></router-View>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  methods:{

  },
  components: {
    Footer
  }
}
</script>

<style>

</style>
