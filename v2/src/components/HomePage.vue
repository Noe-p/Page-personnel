<template>

<Navbar/>

<Header/>

<article id="projects">
  <h1>Some projects...</h1>

  <Project
    title="Raconte"
    img="raconte.png"
    v-bind:langs="['html', 'css', 'javaScript']"
    v-bind:framework="[]"
  />

  <Project
    title="Todo List"
    img="todoApp.png"
    v-bind:langs="['html', 'css', 'javaScript']"
    v-bind:framework="['vue']"
  />

  <Project
    title="Batz"
    img="batz.png"
    v-bind:langs="['html', 'css', 'javaScript']"
    v-bind:framework="[]"
  />

  <Project
    title="Focus"
    img="focus.png"
    v-bind:langs="['html', 'css', 'javaScript', 'php', 'sql']"
    v-bind:framework="[]"
  />

  <Project
    title="Space Invaders"
    img="spaceInvaders.png"
    v-bind:langs="['python']"
    v-bind:framework="[]"
  />
</article>

<About/>

<footer>
  <a href="#top"><img src="../assets/logo/flecheTop.png" alt='flecheTop'></a>
</footer>

</template>

<script>
import Navbar from './Navbar.vue';
import Header from './Header.vue';
import About from './About.vue';
import Project from './Project.vue';

export default {
  name: 'HomePage',
  components: {
    Navbar,
    Header,
    About,
    Project
  }
}
</script>

<style scoped lang="scss" src="../style/main.scss">
#projects {
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(28, 28, 28);
  margin-top: 50px;
}

#projects h1 {
  margin: 0;
}


</style>
