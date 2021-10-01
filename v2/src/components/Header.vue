<template>
  <header id="top">
    <h1>Noé PHILIPPE</h1>
    <h2>Web Developer<br>
      <p>I am looking for a work-study contract</p>
    </h2>
    <div class="buttons">
      <button>
        <a target='blank' href="https://github.com/Noe-p">
          <img src="../assets/logo/github.png" alt="github">
        </a>
      </button>
      <button>
        <a href="mailto:noephilippe29@gmail.com">
          <img src="../assets/logo/lettre.png" alt="mail">
        </a>
      </button>
      <button>
        <a href="tel:0781533181">
          <img src="../assets/logo/telephone.png" alt="phone">
        </a>
      </button>
      <button>
        <a target='blank' href="../../CV_Noé_PHILIPPE.pdf">
          <img src="../assets/logo/cv.png" alt="cv">
        </a>
      </button>
      <button>
        <a target='blank' href="https://www.linkedin.com/in/no%C3%A9-philippe-90318020b/">
          <img src="../assets/logo/linkedin.png" alt="linkedin">
        </a>
      </button>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style>
/*Intro*/

header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px black;
  width: 60%;
}

header img {
  width: 80px;
  height: 80px;
}

header p {
  color: rgb(28, 28, 28);
  font-family: 'Sanchez', serif;
  font-size: 20px;
}

header h1 {
  color: rgb(28, 28, 28);
  animation-duration: 5s;
  animation-name: slideDown_h1;
  position: relative;
  top: -30px;
}
@keyframes slideDown_h1 {
  0% {
    top: -35%;
    opacity: 0;
    transform: rotateX(-90deg);
  }

  10% {
    opacity: 0;
  }
}

header h2 {
  font-size: 30px;
  animation-duration: 4s;
  animation-name: slideDown_h2;
  position: relative;
  top: -8%;
}
@keyframes slideDown_h2 {
  from {
    opacity: 0;
    top: -15%;
  }
}

.buttons {
  animation-duration: 3s;
  animation-name: slideLogo;
  animation-delay: 1s;
  animation-fill-mode: backwards;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
@keyframes slideLogo {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 0;
  }
}

button {
  transition: all 0.2s;
  border: 0.3mm solid white;
  border-radius: 50%;
  padding: 11px 13px 0;
  margin: 25px 26px 19px;
  background-color: white;
}

button:hover {
  padding: 25px 26px 19px;
  margin: 11px 13px 0;
  border: 0.3mm solid rgb(28, 28, 28);
}

button:active {
  padding: 6px 7px 0;
  margin: 20px 21px 14px;
}

@media all and (max-device-width:480px) {
  header {
    margin-top: 50px;
    padding-bottom: 50px;
    width: 90%;
  }

  header h1 {
    top: 0;
  }

  header h2 {
    width: 100%;
    top: -10px;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    width: 75%;
  }

  header img {
    width: 50px;
    height: 50px;
  }

  button {
    padding: 17px 16px 8px;
    border: solid 0.3px black;
  }

  button:hover {
    padding: 17px 16px 8px;
    border: solid 0.3px black;
    margin: 20px 21px 14px;
  }

}

</style>
