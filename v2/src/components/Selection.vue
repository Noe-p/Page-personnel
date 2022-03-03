<template>
<div>
  
  <div  class="selection">
    <div class="container">
      <h2>Languages</h2>
      <div  class="items">
        <p class="html" @click="editSelection('html')">HTML5/CSS</p>
        <p class="javaScript" @click="editSelection('javaScript')" >JavaScript</p>
        <p class="sql" @click="editSelection('sql')" >SQL</p>
        <p class="php" @click="editSelection('php')" >PHP</p>
        <p class="python" @click="editSelection('python')" >Python</p>
        <p class="java" @click="editSelection('java')" >Java</p>
      </div>
    </div>
    <div class="container">
      <h2>Frameworks</h2>
      <div class="items">
        <p class="angular" @click="editSelection('angular')">Angular</p>
        <p class="vue" @click="editSelection('vue')">Vue.js</p>
        <p class="react" @click="editSelection('react')">React</p>
      </div>
    </div>
  </div>
  <div class="typeProject">
    <div class="container">
      <h2>Project Type</h2>
      <div class="items">
        <p class="study" @click="editSelection('study')">Study</p>
        <p class="perso" @click="editSelection('perso')">Personal</p>
      </div>
    </div>
  </div>

  <h3 class="noSelection">Sorry, neither project matches to your selection</h3>

</div>
</template>

<script>
  export default{
    name: 'Selection',
    props: {
      editSelection: Function,
    }
  }



</script>

<style lang="scss">
  .selection, .typeProject{
    margin-top: 60px;
    width: 80vw;
    font-family: 'Sanchez';
    font-size:1.2em;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;



    h2{
      color: black;
      font-size: 1.4em;
      margin-bottom: 20px;
    }

    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .items{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 50%;

      p{
        position: relative;
        display: flex;
        align-items: center;
        margin: 10px;
        width: auto;
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
        color: white;
        position: absolute;
        left:-25px;
        top: 50%;
        transform: translate(-50%,-50%);
        transition: all 0.2s;
      }


      p:active::before{
        width: 25px;
        height: 25px;
      }

      p.checked::before{
        background-color: teal;
      }
    }
  }
  .typeProject{
    margin-top: 10px;
  }

  .noSelection{
    display: none;
    font-size: 30px;
  }

  .noSelection.visible{
    display: block;
  }

  @media all and (max-device-width:480px) {
    .selection, .typeProject{
      font-size: 5vw;

      h2{
        font-size: 6vw;
      }

      .items{
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 25vw;
        margin:10px;
        width: 70vw;

        p{
          font-size: 4vw;
          width: 90px;
        }

        p::before{
          font-size: 1.5em;
        }

        p:hover::before{
          background-color: white;
        }

        p.checked:hover::before{
          background-color: teal;
        }
      }
    }

    .noSelection{
      position: relative;
      margin-top: 0;
      font-size: 18px;
      width: 80vw;
    }


  }



</style>
