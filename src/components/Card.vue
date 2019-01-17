<template>
  <b-card :img-src="imageSrc"
    img-alt="Card image"
    img-top>
    <header class="post-card-header">
      <span class="card-tag"><i v-if="video !== undefined" class="fas fa-video"></i> {{ tag }}</span>
      <h2 class="card-title">{{ title }}</h2>
    </header>
    <section class="card-description">
      <p>{{ description }}</p>
    </section>
  </b-card>
</template>

<script>
export default {
  name: 'Card',
  props: ['imageSrc', 'tag', 'title', 'description', 'video']
}
</script>

<style lang="scss">
.card {
  border-radius: 5px;
  box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
}
.card-content {
  padding: 20px 16px 0px 16px
}
.card-tag {
  font-family: Source Sans Pro,sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  color: grey;
  text-transform: uppercase;
}
.card-title {
  font-family: Montserrat,sans-serif;
  font-weight: 900;
  color: #102135;
}
</style>

