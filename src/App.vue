<template>
  <div id="app">
    <header :class="{ 'scrolled': isScrolled }">
      <!-- Barra de navegación -->
      <nav class="nav-bar">
        <div class="logo">
          <img src='./assets/logo.png' alt="Logo">
        </div>
        <ul class="nav-links">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/nosotros">Nosotros</router-link></li>
          <li><router-link to="/servicios">Servicios</router-link></li>
          <li><router-link to="/contacto">Contacto</router-link></li>
        </ul>
        <div class="menu-btn" @click="toggleMenu">
          <div class="menu-icon"></div>
        </div>
      </nav>
      <!-- Menú responsive -->
      <ul  class="nav-links-responsive hidden">
        <img @click="toggleMenu" src="./assets/iconx.svg" alt="Icono de X" class="icon-img">
        <li><router-link to="/" @click="toggleMenu">Inicio</router-link></li>
        <li><router-link to="/nosotros" @click="toggleMenu">Nosotros</router-link></li>
        <li><router-link to="/servicios" @click="toggleMenu">Servicios</router-link></li>
        <li><router-link to="/contacto" @click="toggleMenu">Contacto</router-link></li>
      </ul>
    </header>
    
    <!-- Componente de Vue Router -->
    <router-view></router-view>

    <footer>
      <!-- Pie de página -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isScrolled: false,
      showMenu: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    toggleMenu() {
      const navMenu = document.querySelector('.nav-links-responsive');
      if (navMenu) {
        if (!this.showMenu) {
          this.showMenu = !this.showMenu;
          navMenu.classList.remove('hidden');
        } else {
          this.showMenu = !this.showMenu;
          navMenu.classList.add('hidden');
        }
      }
    }
  }
}
</script>

<style>
/* Estilos del navbar */
.nav-bar {
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 997;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-evenly;
}
.router-link-active {
  border-bottom: 4px solid #729343;
  font-weight: bold;
}
.menu-btn {
  display: none;
  cursor: pointer;
  padding: 10px;
}
.menu-icon {
  width: 25px;
  height: 3px;
  background-color: white;
  transition: all 0.3s ease;
}
.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 3px;
  background-color: white;
  transition: all 0.3s ease;
}
.menu-icon::before {
  transform: translateY(-8px);
}
.menu-icon::after {
  transform: translateY(8px);
}
.scrolled .nav-bar {
  background: transparent;
  background-color: #729343;
}
.scrolled .nav-bar .router-link-active {
  border-bottom: 4px solid white;
}
/* Estilos originales */
#app {
  font-family: "Mukta", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app h1,
#app h2,
#app h3,
#app h4 {}
.logo img {
  height: 50px;
  width: auto;
  margin: 5px;
}
.nav-links {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.nav-links li {}
.nav-links li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  transition: font-size 0.3s ease;
}
.nav-links li a:hover {
  font-size: 105%;
  transition: font-size 0.3s ease;
}
.container {
  width: 70%;
  margin: auto;
}
.title {
  text-align: center;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 900;
  color: #729343;
}
.sub-title {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #729343;
}
.button {
  background-color: #729343;
  color: white;
  border: 3px solid #729343;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 1rem;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  font-weight: 700;
  transition: all 0.3s ease;
}
.button:hover {
  background-color: transparent;
  color: #729343;
  border: 3px solid #729343;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 1rem;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  font-weight: 700;
  transition: all 0.3s ease;
}
.button-big {
  background-color: #729343;
  color: white;
  border: 3px solid #729343;
  padding: 14px 25px;
  cursor: pointer;
  margin-top: 1rem;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: 700;
  transition: all 0.3s ease;
}
.button-big:hover {
  background-color: transparent;
  color: #729343;
  border: 3px solid #729343;
  padding: 14px 25px;
  cursor: pointer;
  margin-top: 1rem;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: 700;
  transition: all 0.3s ease;
}
p {
  text-align: justify;
}
.hidden {
  transform: translateX(-500px) !important;
  transition: all 0.6s ease;
}
/* RESPONSIVE */
@media only screen and (max-width: 1000px) {
  .container {
    width: 97%;
  }
  h1,
  h2 {
    line-height: 1.2;
  }
  .menu-btn {
    display: block;
  }
  .nav-links {
    display: none;
  }
  .nav-links-responsive {
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100vh;
    background-color: #729343;
    z-index: 998;
    padding: 20px;
    color: #fff;
    transition: all 0.6s ease;
  }
  .nav-links-responsive img {
    height: 35px;
    width: auto;
    cursor: pointer;
    margin-left: 80%;
  }
  .nav-links-responsive li {
    display: block;
  }
  .nav-links-responsive li a {
    display: block;
    padding: 14px 16px;
    text-decoration: none;
    transition: font-size 0.3s ease;
    color: white;
    font-size: 25px;
    font-weight: light;
  }
  .menu-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 999;
  }
  .menu-icon {
    width: 25px;
    height: 3px;
    background-color: white;
    transition: all 0.3s ease;
  }
  .menu-icon::before,
  .menu-icon::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 3px;
    background-color: white;
    transition: all 0.3s ease;
  }
  .menu-icon::before {
    transform: translateY(-8px);
  }
  .menu-icon::after {
    transform: translateY(8px);
  }
  .show-menu .menu-icon {
    background-color: transparent;
  }
  .show-menu .menu-icon::before {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .show-menu .menu-icon::after {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  .show-menu .menu-icon::before,
  .show-menu .menu-icon::after {
    background-color: #fff;
  }
  .show-menu .nav-links-responsive {
    display: block;
  }
}
</style>
