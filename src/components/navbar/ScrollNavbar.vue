<template>
  <b-navbar v-if="scrollValue !== 0" sticky class="nav-scroll" type="light" variant="light">
    <b-progress :value="scrollValue" :max="scrollMax" class="progress"></b-progress>
    <b-navbar-brand>Elevating Utah Logo</b-navbar-brand>
    <b-nav-text>Navbar text</b-nav-text>
  </b-navbar>
  <nav-header v-else></nav-header>
</template>

<script>
import NavHeader from '@/components/navbar/NavHeader'

export default {
  name: 'ScrollNavbar',
  props: [],
  components: { NavHeader },
  data () {
    return {
      scrolled: false,
      scrollValue: 0,
      scrollMax: 0
    }
  },
  methods: {
    handleScroll () {
      this.scrollValue = window.scrollY
      this.scrollMax = document.body.scrollHeight - window.screen.height
      this.scrolled = window.scrollY > 60 ? true : false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss">
.progress {
  position: absolute;
  right: 0;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  border: none;
  color: #3eb0ef;
  background: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>


