<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat|Source+Sans+Pro');
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+SC');

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
