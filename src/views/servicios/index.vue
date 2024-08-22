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
    <div id="ourService4">
        <h2 class="title" v-motion-fade-visible>Fusión y Adquisición Tecnológica</h2>
        <div class="ourServices-container container">
            <div class="left-side">
                <p class="ourServices-text">Ofrecemos servicios especializados de Fusión y Adquisición en el sector tecnológico, estructurando acuerdos que maximicen el valor y reduzcan riesgos para compradores y vendedores. Nos encargamos de identificar empresas objetivo y coordinar con asesores externos para asegurar una transición eficiente y exitosa.
                <br><br>Nuestro proceso incluye: Identificación y evaluación, Valuación, Due diligence, Negociación y cierre, e Integración. Confíe en nuestra experiencia y conocimiento del mercado tecnológico para una ejecución impecable y resultados óptimos. (Propuesta Económica: 2% del monto de la Transacción + IGV)</p>
            </div>
            <img class="image-ourServices" v-motion-fade-visible src="../../assets/servicio_4.jpg" alt="Servicio 4 - Fusión y Adquisición Tecnológica">
        </div>
    </div>
    <div id="ourService5">
        <h2 class="title" v-motion-fade-visible>Asesoría Corporativa de Negocios Complejos</h2>
        <div class="ourServices-container container">
            <div class="left-side">
                <p class="ourServices-text">Ofrecemos asesoría integral para alinear sus documentos con sus objetivos empresariales. Nuestro equipo analiza cada contrato para garantizar el cumplimiento de normativas y estándares de la industria, proporcionando asesoramiento personalizado para identificar riesgos y oportunidades de mejora.<br><br>Nos especializamos en reflejar propuestas técnicas y económicas en los contratos, y en integrar los contratos de sus proveedores con su Usuario Final. Facilitamos la negociación con estrategias que favorecen sus intereses, asegurando el orden legal, minimizando riesgos y protegiendo sus derechos. (Propuesta Económica: USD 1,500 + IGV)</p>
            </div>
            <img class="image-ourServices" v-motion-fade-visible src="../../assets/servicio_5.jpg" alt="Servicio 3 - Estructuración de financiamiento tecnológico">
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

    #ourService1, #ourService3, #ourService5{
        padding: 3rem;
    }
    #ourService2, #ourService4{
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

    #ourService1, #ourService2, #ourService3, #ourService4, #ourService5{
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