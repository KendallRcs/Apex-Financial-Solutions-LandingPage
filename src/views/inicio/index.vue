<template>
    <HeroComponent
      sectionTitle='Inicio'
      firstPart="Bienvenidos a"
      secondPart="Apex Financial Solutions"
      paragraph="Impulsamos el éxito de las empresas tecnológicas emergentes a través de asesoramiento financiero especializado y soluciones innovadoras."
      :showButton="true"
    />
    <div id="ourServices">
        <h1 class="title">Nuestros Servicios</h1>
        <div class="services-container container">
          <div class="service">
            <a href="/servicios" class="enlace-servicios">
              <div class="image-service">
                <img src="../../assets/servicio_1.jpg" alt="Servicio 1 - Análisis de Eficiencia Operativa">
                <div class="overlay">
                  Ver más
                </div>
              </div>
            </a>
              <h2 class="sub-title">Análisis de Eficiencia Operativa</h2>
          </div>
          <div class="service">
            <a href="/servicios" class="enlace-servicios">
              <div class="image-service">
                <img src="../../assets/servicio_2.jpg" alt="Servicio 2 - Solución de Gestión de Capital">
                <div class="overlay">
                  Ver más
                </div>
              </div>
            </a>
              <h2 class="sub-title">Solución de Gestión de Capital</h2>
          </div>
          <div class="service">
            <a href="/servicios" class="enlace-servicios">
              <div class="image-service">
                <img src="../../assets/servicio_3.jpg" alt="Servicio 3 - Estructuración de financiamiento tecnológico">
                <div class="overlay">
                  Ver más
                </div>
              </div>
            </a>
              <h2 class="sub-title">Estructuración de financiamiento tecnológico</h2>
          </div>
      </div>
    </div>
   
    <div id="aboutUs">
        <h1 class="title">Nosotros</h1>
        <div class="aboutUs-container container">
            <div class="left-side">
                <p class="about-us-text">En nuestra empresa, entendemos las necesidades financieras únicas de las empresas tecnológicas. Nos especializamos en este sector y ofrecemos soluciones adaptadas a cada cliente. Nuestra red de contactos especializados y nuestra profunda comprensión del mercado tecnológico local nos permiten conectar a nuestros clientes con las mejores oportunidades financieras disponibles.</p>
                <router-link to="/nosotros"><button class="button">Conócenos más</button></router-link>
            </div>
            <img class="image-aboutUs" src="../../assets/equipo.jpg" alt="Nosotros">
        </div>
    </div>
    <div id="contactUs">
        <h1 class="title">Comunícate con nosotros</h1>
        <div class="contactUs-container container">
          <router-link to="/contacto"><button class="button-big">CONTÁCTANOS</button></router-link>
        </div>
    </div>
    <FooterComponent/>
  </template>
  
  <script>
  import FooterComponent from "../../components/Footer.vue";
  import HeroComponent from "../../components/Hero.vue";

  export default {
    name: 'InicioView',
    components: {
        FooterComponent,
        HeroComponent,
    },
    data(){
      return {
        msg: 'I will change'
      }
    }
  }
  </script>
  
  <style scoped>
    /* SERVICE */

  #ourServices {
      padding: 3rem;
  }

  .services-container {
      display: flex;
      justify-content: space-evenly;
      padding: 1rem;
  }

  .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: #729343;
      width: 305px;

  }

  .service .image-service {
      position: relative; /* Asegura que el overlay se superponga a la imagen */
      
  }
  .service .image-service img {
      width: 305px;
      height: 305px;
      object-fit: cover;
      image-orientation: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 97%;
    background-color: rgba(114, 147, 67, 0.75); /* Verde con transparencia */
    color: white;
    font-size: 24px;
    text-align: center;
    opacity: 0; /* Inicialmente oculto */
    transition: opacity 0.3s ease;
    display: flex;
    justify-content: center; /* Centrado horizontal */
    align-items: center; /* Centrado vertical */
  }

  /* .enlace-servicios{
    opacity: 0; 
    animation: appearFromBottom 1s ease forwards; 
  } */
  .enlace-servicios:hover .overlay {
    opacity: 1; /* Mostrar overlay al pasar el mouse */
  }

  /* US */

  #aboutUs{
    background-color: #F1F1F1;
    padding: 3rem;
  }

  .aboutUs-container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  #aboutUs .left-side{
    width: 50%;
  }

  .image-aboutUs{
    width: 522px;
    height: 388px;
    object-fit: cover;
    image-orientation: center;
  }

    /* CONTACT */

  #contactUs{
    padding: 3rem;
  }

  .contactUs-container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  
  </style>
  