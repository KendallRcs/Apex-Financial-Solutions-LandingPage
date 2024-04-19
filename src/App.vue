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
      </nav>
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
      isScrolled: false
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
  transition: background-color 0.3s ease; /* Transición suave al cambiar el color de fondo */
}

/* Estilos cuando se hace scroll */
.scrolled .nav-bar {
  background: transparent;
  background-color: #729343; /* Color de fondo al hacer scroll */
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
.nav-bar {
  background-color: transparent; /* Fondo transparente por defecto */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* Asegura que esté siempre encima */
  transition: background-color 0.3s ease; /* Transición suave al cambiar el color de fondo */
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: .50rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
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

/* ANIMATIONS */

@keyframes appearFromBottom {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
