<template>
<div>
  <scroll-navbar></scroll-navbar>
  <div class="article-title pb-5">
    <h6 class="text-center pt-5">5 JANUARY 2019 / NEWS</h6>
    <h1 class="text-center pt-1 font-weight-bold">Codeword Acquired By WE Communications</h1>
  </div>
  <div class="article-header">
  </div>
  <b-container class="article-content">
    <b-col></b-col>
    <b-col cols="10">
      <p>I have big news today coming from San Francisco, New York, and Utah. It's not Enes Kanter eating a trillion cheesburgers and getting sick, though everyone should become familiar with that story. It's not the after shock of Donovan Mitchell dunking on poor JaVale McGee, nor is it another nasty spat between Draymond and Durant.</p>
      <p>So, a little about both parties. Codeword is the agency formerly known as Knock Twice, operating out of two coastal locations (SF and NY) and one mountain (SLC). They have deep roots in tech and have carved out a niche in the content marketing world, emphasizing creativity with a staff of former journalists, publishers, and media members. They also love talking basketball with any stray passerbys, which is an added bonus. WE Communications is the artist formerly known as Waggener Edstrom and an agency that also has deep roots in tech. Under the leadership of CEO/co-founder Melissa Waggener Zorkin, WE has spent the last 35 years growing into one of the world's largest independent communication agencies: 20 offices worldwide, nearly 1,000 employees. Today's acquisition of Codeword will mark WE's first foray into Utah, so give Melissa a warm handshake and hearty congrats if you pass her on the way to Sodalicious.</p>
    </b-col>
    <b-col></b-col>
    </b-container>
  <Footer></Footer>
</div>
</template>

<script>
import NavHeader from '@/components/navbar/NavHeader'
import ScrollNavbar from '@/components/navbar/ScrollNavbar'
import Card from '@/components/Card'
import Footer from '@/components/Footer'

export default {
  name: 'Article',
  components: {
    NavHeader, ScrollNavbar, Card, Footer
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


