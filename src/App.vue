<template>
  <header>
    <!-- Coloca aquí la barra de navegación si la tienes -->
    <!-- Por ejemplo, un menú de navegación -->
    <nav class="nav-bar">
      <router-link to="/">Inicio</router-link>
      <router-link to="/nosotros">Nosotros</router-link>
      <router-link to="/servicios">Servicios</router-link>
      <router-link to="/contacto">Contacto</router-link>
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
  margin-top: 60px;
}
.nav-bar{

  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: aquamarine;
}
</style>
