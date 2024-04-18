<template>
    <div class="hero">
      <div class="background-image"></div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-content-text">
            <h1>Bienvenidos a <br>Apex Financial Solutions</h1>
            <p>Impulsamos el éxito de las empresas tecnológicas emergentes a través de <br>asesoramiento financiero especializado y soluciones innovadoras.</p>
            <button>Conócenos más</button>
          </div>
        </div>
      </div>
    </div>
    <div id="ourServices">
        <h1 class="title">Nuestros Servicios</h1>
        <div class="services-container container">
            <div class="service">
                <img class="image-service" src="../../assets/kenrabbit.png" alt="Servicio 1 - Análisis de Eficiencia Operativa">
                <h2 class="sub-title">Análisis de Eficiencia Operativa</h2>
            </div>
            <div class="service">
                <img class="image-service" src="../../assets/kenrabbit.png" alt="Servicio 2 - Solución de Gestión de Capital">
                <h2 class="sub-title">Solución de Gestión de Capital</h2>
            </div>
            <div class="service">
                <img class="image-service" src="../../assets/kenrabbit.png" alt="Servicio 3 - Estructuración de financiamiento tecnológico">
                <h2 class="sub-title">Estructuración de financiamiento tecnológico</h2>
            </div>
        </div>
    </div>
    <div id="aboutUs">
        <h1 class="title">Nosotros</h1>
        <div class="aboutUs-container container">
            <div class="left-side">
                <p class="about-us-text">En nuestra empresa, entendemos las necesidades financieras únicas de las empresas tecnológicas. Nos especializamos en este sector y ofrecemos soluciones adaptadas a cada cliente. Nuestra red de contactos especializados y nuestra profunda comprensión del mercado tecnológico local nos permiten conectar a nuestros clientes con las mejores oportunidades financieras disponibles.</p>
                <button class="button-transparent">Conócenos más</button>
            </div>
            <img class="image-aboutUs" src="../../assets/kenrabbit.png" alt="Nosotros">
        </div>
    </div>
    <div id="contactUs">
        <h1 class="title">Comunícate con nosotros</h1>
        <div class="contactUs-container container">
            <button class="button-big">CONTÁCTANOS</button>
        </div>
    </div>
    <FooterComponent/>
  </template>
  
  <script>
  import FooterComponent from "../../components/Footer.vue";
  export default {
    name: 'InicioView',
    components: {
        FooterComponent 
    }
  }
  </script>
  
  <style scoped>
  .container {
    width: 70%;
    margin: auto;
  }
  
  .hero {
    position: relative;
    height: 550px; /* Altura del hero */
    width: 100%; /* Ancho del hero */
    text-align: center;
    color: white; /* Color del texto */
  }
  
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/bla.webp'); /* Ruta de la imagen de fondo */
    background-size: cover;
    background-position: center;
    filter: brightness(0.5); /* Ajuste de brillo para que el texto sea legible */
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
  }
  
  .hero button {
    background-color: rgba(0, 0, 0, 0);
    color: white; /* Color del botón */
    padding: 10px 20px;
    font-size: 18px;
    border: solid white 3px;
    cursor: pointer;
    width: 200px; /* Ancho del botón */
  }

    /* SERVICE */

  #ourServices{
    padding: 3rem;
  }

  .services-container{
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
  }

  .service{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    text-align: center;
    color: #729343;
    width: 20%;
  }

  .image-service{
    width: 305px;
    height: auto;
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
    height: auto;
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
  