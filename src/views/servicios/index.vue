<template>
    <HeroComponent
      sectionTitle='Servicios'
      firstPart="Nuestros"
      secondPart="servicios"
      paragraph=""
      :showButton="false"
    />

    <div id="ourService1">
        <h2 class="title" v-motion-fade-visible>Análisis de Eficiencia Operativa</h2>
        <div class="ourServices-container container">
            <div class="left-side">
                <p class="ourServices-text">Nuestro servicio de "Análisis de Eficiencia Operativa" proporciona una evaluación exhaustiva de los procesos financieros existentes, identificando áreas de oportunidad y posibles mejoras en el ciclo de conversión de flujo efectivo.<br><br>Con nuestras recomendaciones personalizadas, ayudamos a optimizar el flujo de efectivo, reducir costos operativos y mejorar la eficiencia en toda la organización.</p>
            </div>
            <img class="image-ourServices" v-motion-fade-visible src="../../assets/servicio_1.jpg" alt="Servicio 1 - Análisis de Eficiencia Operativa">
        </div>
    </div>
    <div id="ourService2">
        <h2 class="title" v-motion-fade-visible>Solución de Gestión de Capital</h2>
        <div class="ourServices-container container">
            <div class="left-side">
                <p class="ourServices-text">Nuestro servicio de gestión integral de capital ofrece externalización de gestión de créditos, cobranzas y tesorería para empresas en busca de optimizar sus operaciones financieras y mejorar su flujo de efectivo. Con un enfoque completo, nuestro equipo experto administra eficientemente los procesos financieros, maximizando la rentabilidad y minimizando los riesgos para la empresa.<br><br>Confíe en nosotros para externalizar sus funciones financieras y alcanzar nuevos niveles de eficiencia y rentabilidad.</p>
            </div>
            <img class="image-ourServices" v-motion-fade-visible src="../../assets/servicio_2.jpg" alt="Servicio 2 - Solución de Gestión de Capital">
        </div>
    </div>
    <div id="ourService3">
        <h2 class="title" v-motion-fade-visible>Estructuración de financiamiento tecnológico</h2>
        <div class="ourServices-container container">
            <div class="left-side">
                <p class="ourServices-text">Ofrecemos asesoramiento financiero especializado para proyectos tecnológicos, desde la concepción hasta la obtención de financiamiento con inversores adecuados.<br><br>Nuestro equipo experto colabora estrechamente con los clientes para diseñar estrategias financieras sólidas, comprometiéndose a brindar orientación experta y las herramientas necesarias para alcanzar el máximo potencial financiero de cada proyecto tecnológico.</p>
            </div>
            <img class="image-ourServices" v-motion-fade-visible src="../../assets/servicio_3.jpg" alt="Servicio 3 - Estructuración de financiamiento tecnológico">
        </div>
    </div>


    <div id="contactUs">
        <h1 class="title" v-motion-fade-visible>Comunícate con nosotros</h1>
        <div class="contactUs-container container">
          <router-link to="/contacto"><button class="button-big" v-motion-fade-visible>CONTÁCTANOS</button></router-link>
        </div>
    </div>

    <FooterComponent/>

</template>
<script>
import FooterComponent from "../../components/Footer.vue";
import HeroComponent from "../../components/Hero.vue";
export default {
    name: 'ServiciosView',
    components: {
        FooterComponent,
        HeroComponent
    }
}
</script>
<style scoped>
      /* OUR SERVICES */

    #ourService1, #ourService3{
        padding: 3rem;
    }
    #ourService2{
        background-color: #F1F1F1;
        padding: 3rem;
    }

  .ourServices-container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .ourServices .left-side{
    width: 50%;
  }

  .image-ourServices{
    width: 522px;
    height: 388px;
    object-fit: cover;
    image-orientation: center;
    margin-top: 2rem;
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

  /* RESPONSIVE */
@media only screen and (max-width: 1000px) {
    /* Estilos específicos para pantallas con ancho máximo de 1000px */

    #ourService1, #ourService2, #ourService3{
      padding: 2rem 0;
    }
    .ourServices-container {
      flex-direction: column-reverse;
      align-items: center;
      padding: 0;
    }
    .ourServices-container .left-side{
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .image-ourServices{
        width: 242px;
        height: 242px;
        object-fit: cover;
        image-orientation: center;
        margin: 0;
    }
    .ourServices-text{
      margin: 0;
    }
}
</style>