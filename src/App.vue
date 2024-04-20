<template>
  <div id="app">
    <header :class="{ 'scrolled': isScrolled }">
      <!-- Coloca aquí la barra de navegación si la tienes -->
      <!-- Por ejemplo, un menú de navegación -->
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
      <ul class="nav-bar-responsive notVisible">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/nosotros">Nosotros</router-link></li>
        <li><router-link to="/servicios">Servicios</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
      </ul>
    </header>
    
    <!-- El componente <router-view> se usará para renderizar los componentes de Vue según la ruta actual -->
    <router-view></router-view>

    <footer>
      <!-- Coloca aquí el pie de página si lo tienes -->
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
      console.log("TOGGLE MENU")
      const navMenu = document.querySelector('.nav-bar-responsive');
      if (navMenu) {
        console.log("EXISTE NAV MENU", navMenu)
        if (!this.showMenu) {
          this.showMenu = !this.showMenu;
          navMenu.classList.remove('notVisible');
          navMenu.classList.add('nav-links-responsive');
          console.log("ENTRO", navMenu)
          console.log("SHOW MENU", this.showMenu)
        } else {
          this.showMenu = !this.showMenu;
          navMenu.classList.remove('nav-links-responsive');
          navMenu.classList.add('notVisible');
          console.log("ENTRO 2", navMenu)
          console.log("SHOW MENU", this.showMenu)

        }
      }
    }
  }
}
</script>
<style>
/* Estilos del navbar */
.nav-bar {
  background-color: transparent; /* Fondo transparente por defecto */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* Asegura que esté siempre encima */
  transition: background-color 0.3s ease, border-bottom 0.3 ease; /* Transición suave al cambiar el color de fondo */
  display: flex;
  justify-content: space-evenly; /* Ajuste a space-evenly */
}
.router-link-active{
  border-bottom: 4px solid #729343;
}
.menu-btn {
  display: none; /* Oculta el botón de hamburguesa por defecto */
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

/* Estilos cuando se hace scroll */
.scrolled .nav-bar {
  background: transparent;
  background-color: #729343; /* Color de fondo al hacer scroll */
}
.scrolled .nav-bar .router-link-active{
  border-bottom: 4px solid white;
}

/* Estilos originales */
#app {
  font-family: "Mukta", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app h1, #app h2, #app h3, #app h4{
}
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
.nav-links li {
}
.nav-links li a {
  display: block; /* Hace que los enlaces ocupen todo el ancho del contenedor */
  color: white; /* Color del texto blanco */
  text-align: center; /* Centra el texto */
  padding: 14px 16px; /* Espaciado interior de los enlaces */
  text-decoration: none; /* Quita la subrayado de los enlaces */
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
p{
    text-align: justify
}

/* RESPONSIVE */
@media only screen and (max-width: 1000px) {
    /* Estilos específicos para pantallas con ancho máximo de 1000px */

    .container {
        width: 97%; 
    }

    h1, h2{
      line-height: 1.2;
    }

    .menu-btn {
      display: block; /* Muestra el botón de hamburguesa en dispositivos móviles */
    }

    .nav-links {
      display: none; /* Oculta los enlaces del menú por defecto en dispositivos móviles */
    }

    .notVisible{
      display: none;
    }

    .nav-links-responsive {
      position: fixed; /* Cambiar la posición a fixed */
      top: 0;
      left: 0;
      width: 70%;
      height: 100vh;
      background-color: #729343;
      z-index: 998;
      padding: 20px;
      border-radius: 10px;
      color: #fff;
    }
    

    .nav-bar-responsive li {
      margin-bottom: 10px;
      display: block; /* Hace que los enlaces ocupen todo el ancho del contenedor */
      color: white; /* Color del texto blanco */
      padding: 14px 16px; /* Espaciado interior de los enlaces */
      text-decoration: none; /* Quita la subrayado de los enlaces */
      transition: font-size 0.3s ease;
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
      display: block; /* Muestra los enlaces del menú cuando se activa */
    }
}
</style>
