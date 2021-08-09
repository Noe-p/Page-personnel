<template>
  <HomePage />
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>


<style lang="scss">
#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    overflow-x: hidden;

}

html {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
}

body {
    color: rgb(28, 28, 28);
    background-color: white;
    margin: 0;
    padding: 0;
}

@font-face {
  font-family: 'Sansita';
  src: url("assets/fonts/Sansita/Sansita-Bold.ttf");
}
@font-face {
  font-family: 'Sanchez';
  src: url("assets/fonts/Sanchez/Sanchez-Regular.ttf");
}

a,
a:visited {
  color: #1c1c1c;
  font-family: 'Sanchez', serif;
  font-size: 30px;
  text-decoration: none;
}

h1 {
  font-family: 'Sansita', sans-serif;
  font-weight: bold;
  font-size: 60px;
  text-align: center;
}

h2, h3 {
  font-family: 'Sanchez', serif;
  text-align: center;
  color: #86620b;
}
</style>
