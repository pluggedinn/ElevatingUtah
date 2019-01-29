<template>
<div>
  <scroll-navbar></scroll-navbar>
  <div class="article-title pb-5">
    <h6 class="text-center pt-5">{{ dateTag }}</h6>
    <h1 class="text-center pt-1 font-weight-bold">{{ article.title }}</h1>
  </div>
  <div class="article-header">
  </div>
  <b-container class="article-content">
    <b-col></b-col>
    <b-col cols="10" v-html="article.contentHTML">
    </b-col>
    <b-col></b-col>
    </b-container>
  <Footer></Footer>
</div>
</template>

<script>
import firebase from 'firebase'
import ScrollNavbar from '@/components/navbar/ScrollNavbar'
import Footer from '@/components/Footer'
import * as a from '@/content/articles'

export default {
  name: 'Article',
  props: ['articleString'],
  components: {
    ScrollNavbar, Footer
  },
  data () {
    return {
      article: {}
    }
  },
  computed: {
    dateTag: function () {
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      let date = new Date(this.article.date).toLocaleDateString("en-US", options)
      return date + ' / ' + this.article.tag
    }
  },
  methods: {
    load: function () {
      let self = this
      let articlesRef = firebase.firestore().collection('articles')
      let getArticles = articlesRef.where("urlCode", "==", this.articleString).get().then(snapshot => {
        snapshot.forEach(doc => {
          self.article = doc.data()
        })
      })
    }
  },
  created: function () {
    console.log('loaded')
    this.load()
  }
}
</script>

<style lang="scss">
.article-title {
  background-color: white;
}
.article-header {
  position: relative;
  background-image: url('https://picsum.photos/1200/600/?random');
  color: white;
  background-size: cover;
  height: 500px;
}
.article-content {
  background-color: white;
  margin-top: 40px;
  padding-top: 50px;
  padding-bottom: 80px;
  border-radius: 3px;
  box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
  font-family: 'Noto Serif SC', serif;

  p {
    padding: 0 50px 0 50px;
    // margin-left: auto;
    // margin-right: auto;
    // max-width: 75ch;
    font-size: 14pt;
    line-height: 1.8em;
    margin-bottom: 30px;
  }
  p:first-child {
    font-size: 17pt;
  }
}
</style>


