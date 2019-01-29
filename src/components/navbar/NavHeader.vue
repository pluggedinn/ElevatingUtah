<template>
<header v-bind:class="{ 'site-header-show': showHeader === '', 'site-header-hide': showHeader === undefined }">
  <div v-if="showHeader !== undefined" class="overlay"></div>
  <b-navbar toggleable="md">
    <b-container class="site-bar"> 
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand><img src="../../assets/logo.png" width="60"></b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>ARTICLES</b-nav-item>
          <b-nav-item>PODCAST</b-nav-item>
          <b-nav-item>VIDEOS</b-nav-item>
          <b-nav-item>SPONSORS</b-nav-item>
          <b-nav-item>ABOUT US</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
  <div v-if="showHeader !== undefined" class="site-header-content">
    <h1 class="font-weight-bold">Articles</h1>
  </div>
</header>
</template>

<script>
export default {
  name: 'NavHeader',
  props: ['showHeader']
}
</script>

<style lang="scss">

.navbar {
  // background-color: #102135;
  .navbar-brand {
    // color: white;
  }
  .nav-item {
    // color: lightgray;
  }
}
.site-bar {
  position: relative;
  color: white;
  z-index:2;
}
.site-header-hide {
  background-color: whitesmoke;
  .navbar-brand {
    color: black;
  }
  .nav-link {
    color: green;
  }
}
.site-header-show {
  position: relative;
  background-image: url('../../assets/images/mountains.jpg');
  color: white;
  background-size: cover;
}
.overlay {
  position: absolute;
  z-index:1;
  background-color: #212529;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: .3;
}
.site-header-content {
  position: relative;
  color: white;
  z-index:2;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10vw 4vw;
  min-height: 200px;
  max-height: 450px;
  text-align: center;
}
.nav-item {
  font-weight: bold;
  
}
</style>
