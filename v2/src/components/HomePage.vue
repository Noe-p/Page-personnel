<template  >

<Navbar/>

<Header/>



<article id="projects">
  <h1>Some projects...</h1>
  <Selection
    :editLanguage="editLanguage"

  />



  <div v-for="project in projects" v-bind:key="project">
    <Project
      :title="project.title"
      :img="project.img"
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
  { title: 'Raconte', img: 'raconte.png', langs: ['html', 'css', 'javaScript'], framework: []},
  { title: 'Todo List', img: 'todoApp.png', langs: ['html', 'css', 'javaScript'], framework: ['vue']},
  { title: 'Batz', img: 'batz.png', langs: ['html', 'css', 'javaScript'], framework: []},
  { title: 'Focus', img: 'focus.png', langs: ['html', 'css', 'javaScript', 'php', 'sql'], framework: []},
  { title: 'Space Invaders', img: 'spaceInvaders.png', langs: ['python'], framework: []}
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
      languages: []
    }
  },
  methods: {
    editLanguage(language){
      console.log('ok');
      var flag = -1;

      for(let item in this.languages){
        if(this.languages[item] == language){
          flag = item;
        }
      }
      this.projects=[];

      if(flag == -1){
        this.languages.push(language)
        document.querySelector('.'+language).classList.add('checked');
      }
      else{
        this.languages.splice(flag,1);
        document.querySelector('.'+language).classList.remove('checked');
      }
      this.addProject();
    },
    addProject(){
      for (let item in this.languages){
        for(let project in ressource){
          for (let lang in ressource[project].langs){
            if(ressource[project].langs[lang]==this.languages[item]){
              for(let i in this.projects){
                if(this.projects[i].title==ressource[project].title){
                  this.projects.splice(i,1);
                }
              }
              this.projects.unshift(ressource[project]);
            }
          }
        }
      }
    }
  },
  mounted(){
    this.editLanguage('html');
    this.editLanguage('javaScript');
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
