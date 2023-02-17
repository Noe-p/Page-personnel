<template>
  <header id="top">
    <h1>Noé PHILIPPE</h1>
    <h2>Full Stack Developer<br>
      <p>I am a Full Stack developer on a work-study contract in Bob the Developer</p>
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
        <a target='blank' href="/CV_Noé_PHILIPPE.pdf">
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
  animation-duration: 1s;
  animation-name: slideDown_h1;
  position: relative;
  top: -10%;
}
@keyframes slideDown_h1 {
  0% {
    opacity: 0;
    top: -20%;
  }
}

header h2 {
  font-size: 30px;
  animation-duration: 1s;
  animation-name: slideDown_h2;
  position: relative;
  top: -15%;
}
@keyframes slideDown_h2 {
  from {
    opacity: 0;
    top: -30%;
  }
}

.buttons {
  animation-duration: 1s;
  animation-name: slideLogo;
  animation-delay: 0.3s;
  animation-fill-mode: backwards;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  position: relative;
  top:-0%;
}
@keyframes slideLogo {
  0% {
    top: -25%;
    opacity: 0;
  }
}

button {
  background-color: white;
  border: none;
  position: relative;
  padding: 0;
}

button a{
  display: flex;
  align-items: center;
  justify-content: center;
}

button::before{
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform: translate(-50%, -50%);
  border: 0.3mm solid rgb(28, 28, 28);
  transition: all 0.2s;
  border-radius: 50%;
  z-index: -2;
}

button:hover::before{
  width: 150%;
  height: 150%;
}

button:active::before {
  width: 120%;
  height: 120%;
}

@media all and (max-device-width:480px) {
  header {
    margin-top: 50px;
    padding-bottom: 50px;
    width: 90%;
  }

  header h1 {
    top: 0;
    animation-duration: 1s;
  }
  @keyframes slideDown_h1 {
  0% {
    top: -10%;
  }
}

  header h2 {
    width: 100%;
    top: -10px;
    animation-duration: 1s;
  }
  @keyframes slideDown_h2 {
  from {
    top: -15%;
  }
}

  .buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    width: 75%;
    animation-duration: 1s;
    animation-delay: 0s;
  }
  @keyframes slideLogo {
  from {
    top: -20%;
  }
}

  header img {
    width: 50px;
    height: 50px;
  }

  button{
    width: 90px; 
    height: 90px;
    margin-left: 50%;
    transform: translateX(-50%)
  }

  button::before, button:hover::before, button:active::before{
    width: 90px; 
    height: 90px;
  }
}

</style>
