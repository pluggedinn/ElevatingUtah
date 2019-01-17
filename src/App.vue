<template>
  <div id="app">
    <nav-header show-header></nav-header>
    <b-container class="pt-4">
      <b-card-group deck>
        <card image-src="https://picsum.photos/800/300/?random" tag="podcast" title="Utah is a better place now" description="Hello world there's a lot to say"></card>
        <card video image-src="https://picsum.photos/800/300/?random" tag="video" title="Utah is a better place now" description="Hello world there's a lot to say"></card>
      </b-card-group>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import NavHeader from '@/components/navbar/NavHeader'
import Card from '@/components/Card'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    NavHeader, Card, Footer
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat|Source+Sans+Pro');

body {
  background-color: whitesmoke;
  background-image: url("https://www.transparenttextures.com/patterns/noise-lines.png");
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
