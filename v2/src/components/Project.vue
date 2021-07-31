<template>
  <div class="project-item">
    <h2>{{ title }}</h2>
    <a target='blank' href="https://raconte-reportage.com/index.html">
      <img :src="require(`@/assets/img/${img}`)" :alt='[[ title ]]'>
      <section  class="languages">
        <div v-for="lang in langs" v-bind:key="lang">
          <img :src="require(`@/assets/logo/${lang}.png`)" :alt='[[ lang ]]'>
        </div>
        <div v-for="item in framework" v-bind:key="item">
          <img class="framework" :src="require(`@/assets/logo/${item}.png`)" :alt='[[ item ]]'>
        </div>
    </section>
    </a>
  </div>
</template>

<script>
  export default {
    name : 'Project',
    props: {
      title: String,
      img: String,
      langs: Array,
      framework: Array
    }

  }
</script>

<style media="screen">

.project-item {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#projects h2 {
  font-size: 35px;
}

#projects a img {
  width: 80vw;
  transition: all 0.2s;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgb(18, 18, 18);
}

#projects a img:hover {
  box-shadow: 2px 2px 20px rgb(18, 18, 18);
}

#projects a section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  left: 50%;
  transform: translate(-50%,-130%);
  transition: all 0.5s;
  z-index: -5;
  position: absolute;
}

#projects a section img {
  border-radius: none;
  box-shadow: none;
  width: 35px;
  margin: 5px 10px 0;
}

#projects a section .framework {
  margin-left: 60px;
}

#projects a:hover section {
  transform: translate(-50%,0);
}

</style>
