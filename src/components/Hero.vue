<template>
  <div v-motion-fade-visible :class="[heroClass, 'hero']">
    <div class="hero-content">
      <div class="container">
        <div class="hero-content-text">
          <h1>
            <span class="hero-title1">{{ firstPart }}</span> <br>
            <span class="hero-title2">{{ secondPart }}</span>
          </h1>
          <div class="hero-paragraphs">
            <p class="hero-paragraph1">{{ firstParagraph }}</p>
            <p class="hero-paragraph2">{{ secondParagraph }}</p>
          </div>
          <br>
          <router-link v-if="showButton" to="/contacto" class="buttonHero">Conócenos más</router-link>        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroComponent',
  props: {
    firstPart: {
      type: String,
      required: true
    },
    secondPart: {
      type: String,
      required: true
    },
    firstParagraph: {
      type: String,
      required: true
    },
    secondParagraph: {
      type: String,
      required: true
    },
    showButton: {
      type: Boolean,
      default: true
    },
    sectionTitle: {
      type: String,
      required: true
    }
  },
  computed: {
    heroClass() {
      switch (this.sectionTitle) {
        case 'Inicio':
          return 'hero-inicio';
        case 'Nosotros':
          return 'hero-nosotros';
        case 'Servicios':
          return 'hero-servicios';
        case 'Contacto':
          return 'hero-contacto';
        default:
          return '';
      }
    }
  }
};
</script>

<style scoped>
.hero{
  position: relative;
  height: 720px; /* Altura del hero */
  width: 100%; /* Ancho del hero */
  text-align: center;
  color: white; /* Color del texto */
  background-size: cover;
  background-position: center;
}
/* Clase para la sección de Inicio */
.hero-inicio {
  background-image: url('../assets/INICIO.jpg'); /* Imagen de fondo para la sección de Inicio */
}

/* Clase para la sección de Nosotros */
.hero-nosotros {
 
  background-image: url('../assets/nosotros.jpg'); /* Imagen de fondo para la sección de Inicio */
}

/* Clase para la sección de Servicios */
.hero-servicios {
  background-image: url('../assets/nuestros_servicios.jpg'); /* Imagen de fondo para la sección de Inicio */
}

/* Clase para la sección de Contacto */
.hero-contacto {
  background-image: url('../assets/contactanos.jpg'); /* Imagen de fondo para la sección de Inicio */
}

.hero-content {
  position: relative;
  z-index: 1; /* Asegura que el contenido esté sobre la imagen de fondo */
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
}

.hero-content-text {
  text-align: left; /* Alineación del texto */
  padding: 20px;
  color: white; /* Color del texto */
  margin-top: 200px; /* Margen superior */
}

.hero h1 {
  font-size: 36px;
  margin-bottom: 20px;
  line-height: 40px;
}

.hero p {
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: bold;
  line-height: 6px;
}

.buttonHero {
  background-color: rgba(0, 0, 0, 0);
  color: white; /* Color del botón */
  padding: 10px 40px;
  font-size: 18px;
  border: solid white 3px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  width: 200px; /* Ancho del botón */
  transition: background-color 0.3s ease, color 0.3s ease;
}
.buttonHero:hover{
  background-color: white;
  color: #729343;
  transition: all 0.3s ease;

}

/* RESPONSIVE */
@media only screen and (max-width: 1000px) {
    /* Estilos específicos para pantallas con ancho máximo de 1000px */
    
    /* .hero{
      height: 451px; 
    } */
    .hero-content {
        height: auto; /* Altura automática en pantallas pequeñas */
    }
    .hero-paragraphs {
      
    }
    .hero-paragraphs p{
      line-height: 1.2;
      margin: 0;

    }
    .hero-inicio {
      background-position: 45% center; /* Ajusta la posición de la imagen hacia la derecha */
    }

    /* Clase para la sección de Contacto */
    .hero-contacto {
      background-position: 75% center; /* Ajusta la posición de la imagen hacia la derecha */

    }
}
</style>
