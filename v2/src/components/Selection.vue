<template>
  <div class="selection">
    <div class="language">
      <h2>Languages</h2>
      <div class="items">
        <p class="html" @click="editLanguage('html')">HTML5/CSS</p>
        <p class="javaScript" @click="editLanguage('javaScript')" >JavaScript</p>
        <p class="sql" @click="editLanguage('sql')" >SQL</p>
        <p class="php" @click="editLanguage('php')" >PHP</p>
        <p class="python" @click="editLanguage('python')" >Python</p>
      </div>
    </div>
    <div class="framework">
      <h2>Frameworks</h2>
      <div class="items">
        <p>Vue.js</p>
      </div>
    </div>
  </div>

</template>

<script>
  export default{
    name: 'Selection',
    props: {
      editLanguage: Function,
    }
  }



</script>

<style lang="scss">
  .selection{
    margin-top: 60px;
    width: 80vw;
    font-family: 'Sanchez';
    font-size:1.5em;
    display: flex;
    justify-content: space-around;

    h2{
      color: black;
    }

    .language, .framework{
      display: flex;
      flex-direction: column;
    }

    .items{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10%;
      margin:10px;

      p{
        display: flex;
        margin: 10px;
      }

      p:hover{
        cursor: pointer;
      }

      p::before{
        display: flex;
        align-items: center;
        justify-content: center;
        content: '✓';
        width: 30px;
        height: 30px;
        border: solid 1px black;
        background-color: white;
        border-radius: 50%;
        margin-right: 10px;
        color: white;

        transition: all 0.2s;
        transition-delay: 0.1s;
      }

      p:hover::before{
        background-color: teal;
        border: solid 1px white;
      }

      p.checked::before{
        background-color: teal;
        border: solid 1px white;
      }
    }
  }



</style>
