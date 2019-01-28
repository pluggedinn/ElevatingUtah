<template>
<div class="home">
  <!-- <scroll-navbar></scroll-navbar> -->
  <nav-header show-header></nav-header>
  <b-container class="pt-4">
    <b-card-group deck>
      <card image-src="https://picsum.photos/800/300/?random" tag="podcast" title="
February is Bald Eagle Month: Here's where to find them in Utah" description="Hello world there's a lot to say"></card>
      <card video image-src="https://picsum.photos/800/300/?random" tag="video" title="Utah is a great place to live" description="Hello world there's a lot to say"></card>
    </b-card-group>
    <b-card-group deck>
      <card image-src="https://picsum.photos/800/300/?random" tag="podcast" title="13 House bills to follow during Utah's 2019 legislative session" description="Hello world there's a lot to say"></card>
      <card video image-src="https://picsum.photos/800/300/?random" tag="video" title="
Utah National Guard soldiers healthiest in the country, report says" description="Hello world there's a lot to say"></card>
    </b-card-group>
    <b-card-group deck>
      <card image-src="https://picsum.photos/800/300/?random" tag="podcast" title="Story image for utah news from Salt Lake Tribune
Deeda Seed: A recipe for cleaning up Utah's filthy skies" description="Hello world there's a lot to say"></card>
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
  name: "Home",
  components: {
    NavHeader, Card, Footer
  }

};
</script>

<style lang="scss">
.card-deck {
  margin-bottom: 35px;
}
</style>

