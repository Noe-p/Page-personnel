<template>
  <aside class="navbar open">
    <div class="navNoe open underlign">
      <a href="#top">
        <img src="../assets/logo/N.png" alt="N">
        <img src="../assets/logo/P.png" alt="P">
      </a>
    </div>
    <div class="menu open">
      <img class="menu1" src="../assets/logo/menu.png" alt='navbar1'>
      <img class="menu2" src="../assets/logo/menu.png" alt='navbar2'>
    </div>
    <section>
      <div class="navProjects open">
        <a href="#projects">Projects</a>
      </div>
      <div class="navAbout open">
        <a href="#about">About</a>
      </div>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/*Navbar*/

aside {
  z-index: 5;
  position: fixed;
  top: 0;
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.2s;
}

.navbar.open {
  background-color: rgba(255, 255, 255, 1);
}

.navbar.open.underlign {
  box-shadow: 1px 1px 5px black;
}

.navAbout,
.navProjects {
  margin-left: 90px;
  opacity: 0;
  display: none;
}

.navNoe {
  margin-left: 50px;
  opacity: 0;
  display: none;
}

.navNoe a img:first-child {
  width: 20px;
  left: 5px;
  position: relative;
  transition: all 0.3s;
}

.navNoe a img:last-child {
  position: relative;
  width: 24px;
  left: 0;
  transition: all 0.3s;
}

.navNoe a:hover img:first-child {
  left: 0;
}

.navNoe a:hover img:last-child {
  left: 5px;
}

aside section {
  display: flex;
  margin-right: 50px;
}

.navAbout.open,
.navNoe.open,
.navProjects.open {
  opacity: 1;
  display: flex;
}

aside a::after {
  display: block;
  content: '';
  height: 2px;
  background-color: #86620b;
}

.navNoe a:after {
  width: 47px;
}

.navNoe a::before {
  width: 47px;
}

aside a::before {
  display: block;
  content: '';
  background-color: white;
  height: 5px;
  transform: translate(0,43px);
  position: relative;
  width: 100%;
  transition: all 0.3s;
}

aside a:hover::before {
  transform: translate(-100%,43px);
}

.navNoe.open.underlign a::before {
  transform: translate(-100%,43px);
}

.navAbout.open.underlign a::before,
.navProjects.open.underlign a::before {
  transform: translate(-100%,43px);
}

.menu {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.2s;
}

.menu:hover {
  cursor: pointer;
}

.menu img {
  width: 40px;
  margin: 5px;
  transition: all 0.3s;
  transform: rotate(0);
}

.menu::before {
  display: block;
  content: '';
  position: absolute;
  width: 45px;
  height: 25px;
}

.menu.open img {
  cursor: pointer;
  position: absolute;
  transition: all 0.3s;
}

.menu.open:hover img:first-child {
  transform: rotate(-45deg);
}

.menu.open:hover img:last-child {
  transform: rotate(-135deg);
}

.menu.open img:first-child {
  transform: rotate(135deg);
}

.menu.open img:last-child {
  transform: rotate(45deg);
}

</style>
