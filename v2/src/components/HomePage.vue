<template  >

<Navbar/>

<Header/>



<article id="projects">
  <h1>Some projects...</h1>
  <Selection
    :editSelection="editSelection"
  />

  <div v-for="project in projects" v-bind:key="project">
    <Project
      :title="project.title"
      :img="project.img"
      :url="project.url"
      v-bind:langs="project.langs"
      v-bind:framework="project.framework"
    />
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
import Project from './Project.vue';
import Selection from './Selection.vue';

const ressource = [
  { title: 'Raconte', img: 'raconte.png', langs: ['html', 'css', 'javaScript'], framework: [], url: 'https://raconte-reportage.com/index.html'},
  { title: 'Todo List', img: 'todoApp.png', langs: ['html', 'css', 'javaScript'], framework: ['vue'], url: 'https://github.com/Noe-p/todo-list'},
  { title: 'Batz', img: 'batz.png', langs: ['html', 'css', 'javaScript'], framework: [], url: 'https://location-maison-iledebatz.fr/'},
  { title: 'Focus', img: 'focus.png', langs: ['html', 'css', 'javaScript', 'php', 'sql'], framework: [], url: 'https://github.com/Noe-p/Developpement-application-web'},
  { title: 'Space Invaders', img: 'spaceInvaders.png', langs: ['python'], framework: [], url: 'https://github.com/Noe-p/Space-Invaders'}
]

export default {
  name: 'HomePage',
  components: {
    Navbar,
    Header,
    About,
    Project,
    Selection
  },
  data: ()=> {
    return {
      projects: [],
      selection: []
    }
  },
  methods: {
    editSelection(language){
      var flag = -1;
      this.projects=[];

      for(let item in this.selection){
        if(this.selection[item] == language){
          flag = item;
        }
      }

      if(flag == -1){
        this.selection.push(language)
        document.querySelector('.'+language).classList.add('checked');
      }
      else{
        this.selection.splice(flag,1);
        document.querySelector('.'+language).classList.remove('checked');
      }

      this.addProject();
      if(this.projects.length == 0){
        document.querySelector('.noSelection').classList.add('visible');
      }
      else{
        document.querySelector('.noSelection').classList.remove('visible');
      }
    },
    addProject(){
      let flag;
      for(let project in ressource){
        flag = 0;
        for(let lang in this.selection){
          for(let item in ressource[project].langs){
            if(ressource[project].langs[item]==this.selection[lang]){
              flag = flag + 1;
            }
          }
          for(let framework in ressource[project].framework){
            if(ressource[project].framework[framework]==this.selection[lang]){
              flag = flag + 1;
            }
          }
        }
        if(flag == this.selection.length){
          this.projects.unshift(ressource[project]);
        }
      }


    }
  },
  mounted(){
    this.addProject();
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

@media screen and (max-width:1300px) {
  footer {
    margin-top: 0;
  }
}

@media all and (max-device-width:480px) {
  #projects h1{
    margin-bottom: 25px;
  }
  footer {
    height: auto;
    margin-bottom: 50px;
    margin-top: 50px;
  }

  footer img:hover {
    animation: none;
    border: none;
  }
}


</style>
