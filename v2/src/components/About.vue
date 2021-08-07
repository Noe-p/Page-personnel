<template>
  <article id="about">
    <h1>I'm a futur apprentice at <span>Sorbonne University</span> in Paris,</h1>

    <div class="studies">
      <article>
        <p>I'm 22, I love to <span>design</span> and <span>develop</span> website with
          animations and intuitive interfaces. The interesting part to me is to imagine, create and apply ideas that are in my mind.
        </p>
        <p>
          I'm currently studying in the second year of the computer science bachelor's
          degree in Brest. This university education gave me strong knowledge in <span>development</span>.
        </p>
      </article>
      <img src="../assets/img/noe.jpg" alt="Noe">
    </div>

    <div class="passion">
      <img src="../assets/img/guitar.jpg" alt="Guitar">
      <article>
        <p>
          Next year, I will be an apprentice at the "Projet Web et Mobile" bachelor's at <span>Sorbonne University</span>.
          This training includes lessons of Front-End and Back-End developpement, and lessons of UX-design and animations.
        </p>
        <p>
          I like to <span>build projects</span> with a team, share and communicate ideas.
          Precisely, I play guitar in a band "Saad" during my free time. I think that
          music is very similar to developpement.
        </p>
      </article>
    </div>
    <p class="contactMe">
      If you are interested in my profile, You can contact me at <a href="mailto:noephilippe29@gmail.com">noephilippe29@gmail.com.</a>
    </p>
  </article>

</template>

<script>

  export default{
    name: 'About'
  }
</script>

<style>

#about {
  margin-top: 200px;
  width: 80vw;
}

#about h1 {
  text-align: left;
  width: 70%;
}

#about span {
  color: #86620b;
}

#about p {
  color: rgb(28, 28, 28);
  font-family: 'Sanchez', serif;
  font-size: 23px;
}

#about a {
  color: #86620b;
  font-size: 23px;
}

.contactMe {
  text-align: center;
}

#about img {
  width: 450px;
  border-radius: 10px;
  transition: all 0.3s;
  box-shadow: 1px 1px 10px black;
}

.passion img,
.studies img {
  position: relative;
  opacity: 0;
}

.passion.open img,
.studies.open img {
  top: 0;
  opacity: 1;
  animation: imgAbout;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}
@keyframes imgAbout {
  from {
    top: -10%;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}

#about img:hover {
  box-shadow: 2px 2px 20px black;
}

#about div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#about div article {
  display: flex;
  flex-direction: column;
  padding: 80px;
}

.passion {
  margin-top: 70px;
}

@media screen and (max-width:1300px) {
  #about {
    margin-top: 100px;
  }

  #about h1 {
    width: 85vw;
  }

  #about div article {
    padding: 0 20px;
  }

  .passion {
    margin-top: 30px;
  }

  .contactMe {
    text-align: left;
    padding: 20px;
  }

  #about div {
    flex-direction: column;
  }

  #about img {
    margin-top: 30px;
  }

  .passion img {
    display: none;
  }

  footer {
    margin-top: 0;
  }
}
@media all and (max-device-width:480px) {
  #about {
    margin-top: 50px;
    width: 95vw;
  }

  #about h1 {
    font-size: 35px;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  #about div {
    display: flex;
    flex-direction: column;
  }

  #about div article {
    padding: 10px;
  }

  .contactMe {
    text-align: left;
    padding: 10px;
  }

  #about a,
  #about p {
    width: 100%;
  }

  #about p {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .studies img {
    opacity: 1;
    position: inherit;
  }

  #about img {
    animation: none;
    width: 300px;
    margin-bottom: 30px;
  }

  .passion {
    margin-top: 0;
  }

  .passion img {
    display: none;
  }

}
</style>
