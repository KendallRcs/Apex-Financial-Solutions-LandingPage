<template>
  <header>
    <!-- Coloca aquí la barra de navegación si la tienes -->
    <!-- Por ejemplo, un menú de navegación -->
    <nav class="nav-bar">
      <div class="logo">
        <img src="logo.png" alt="Logo">
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
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* .nav-bar{

  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #729343;
} */
.nav-bar {
  background-color: #729343; 
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
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
}

.nav-links li a:hover {
  font-size: 105%;
  
}

</style>
