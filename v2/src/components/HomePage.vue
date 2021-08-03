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

<style lang="scss">
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

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  height: 150px;
}

footer img {
  width: 25px;
  padding: 20px 24px;
  border-radius: 50%;
}

footer img:hover {
  animation-name: flecheTop;
  animation-duration: 0.2s;
  border: solid 0.5px rgb(28, 28, 28);
}
@keyframes flecheTop {
  0% {
    padding: 0;
    border: solid 0.5px white;
  }

  100% {
    padding: 20px 24px;
    border: solid 0.5px rgb(28, 28, 28);
  }
}


</style>
