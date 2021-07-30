<template>

  <Navbar/>

  <Header/>

<article id="projects">
  <h1>Some projects...</h1>
  <div>
    <h2>Raconte</h2>
    <a target='blank' href="https://raconte-reportage.com/index.html">
      <img src="../assets/img/raconte.png" alt='Raconte'>
      <section class="languages">
        <img src="../assets/logo/html.png" alt="html">
        <img src="../assets/logo/css.png" alt="css">
        <img src="../assets/logo/javaScript.png" alt="javaScript">
      </section>
    </a>
  </div>
  <div>
    <h2>Todo List</h2>
    <a target='blank' href="https://github.com/Noe-p/todo-list">
      <img src="../assets/img/todoApp.png" alt='todoApp'>
      <section class="languages">
        <img src="../assets/logo/html.png" alt="html">
        <img src="../assets/logo/css.png" alt="css">
        <img src="../assets/logo/javaScript.png" alt="javaScript">
        <img class="framework" src="../assets/logo/vue.png" alt="vue">
      </section>
    </a>
  </div>
  <div>
    <h2>Batz</h2>
    <a target='blank' href="https://location-maison-iledebatz.fr/">
      <img src="../assets/img/batz.png" alt='Batz'>
      <section class="languages">
        <img src="../assets/logo/html.png" alt="html">
        <img src="../assets/logo/css.png" alt="css">
        <img src="../assets/logo/javaScript.png" alt="javaScript">
      </section>
    </a>
  </div>
  <div>
    <h2>Focus</h2>
    <a target='blank' href="https://github.com/Noe-p/Developpement-application-web">
      <img src="../assets/img/focus.png" alt='Focus'>
      <section class="languages">
        <img src="../assets/logo/html.png" alt="html">
        <img src="../assets/logo/css.png" alt="css">
        <img src="../assets/logo/javaScript.png" alt="javaScript">
        <img src="../assets/logo/php.png" alt="php">
        <img src="../assets/logo/sql.png" alt="sql">
      </section>
    </a>
  </div>
  <div>
    <h2>Space Invaders</h2>
    <a target='blank' href="https://github.com/Noe-p/Space-Invaders">
      <img src="../assets/img/spaceInvaders.png" alt='spaceInvaders'>
      <section class="languages">
        <img src="../assets/logo/python.png" alt="python">
      </section>
    </a>
  </div>
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


export default {
  name: 'HomePage',
  components: {
    Navbar,
    Header,
    About
  }
}
</script>

<style scoped lang="scss" src="../style/main.scss"></style>
