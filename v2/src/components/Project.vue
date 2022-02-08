<template>
  <div  class="project-item">
    <h2>{{ title }}</h2>
    <a target='blank' :href="[[ url ]]">
      <img :src="require(`@/assets/img/${img}`)" :alt='[[ title ]]'>
      <section  class="languages">
        <div class="logoContainer" v-for="lang in langs" v-bind:key="lang">
          <img :src="require(`@/assets/logo/${lang}.png`)" :alt='[[ lang ]]'>
          <p class="description">{{lang}}</p>
        </div>
        <div class="logoContainer" v-for="item in framework" v-bind:key="item">
          <img class="framework" :src="require(`@/assets/logo/${item}.png`)" :alt='[[ item ]]'>
          <p class="description">{{item}}</p>
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
      url: String,
      langs: Array,
      framework: Array,
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

h2 {
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
  left: 50%;
  transform: translate(-50%,-130%);
  transition: all 0.5s;
  z-index: -5;
  position: absolute;
}

#projects a section .logoContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
}

#projects a section img {
  border-radius: none;
  box-shadow: none;
  width: 35px;
  height: 35px;
  margin: 5px 10px 0;
}

#projects a section .description {
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  margin-top: 0;
}
#projects a:hover section {
  transform: translate(-50%,0);
}

@media all and (max-device-width:480px) {
  #projects a img {
    width: 95vw;
  }

  #projects img:hover {
    box-shadow: none;
  }

  #projects div {
    margin-top: 0px;
  }

  #projects h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 30px;
  }

  #projects a section {
    transform: translate(-50%,0);
    position: relative;
  }

  #projects a section img {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }

}

</style>
