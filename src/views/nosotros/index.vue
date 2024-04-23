<template>
    <HeroComponent
      sectionTitle='Nosotros'
      firstPart="Nosotros"
      secondPart=""
      paragraph=""
      :showButton="false"
    />

    <div id="ourGoal">
        <h1 class="title" v-motion-slide-visible-top>Nuestro Objetivo</h1>
        <div class="ourGoal-container container">
            <div class="left-side">
                <p class="about-us-text">Nuestro objetivo es claro: impulsar el éxito de las empresas tecnológicas emergentes a través de asesoramiento financiero especializado y soluciones innovadoras. Nos esforzamos por ser el socio preferido y líder a nivel global, ofreciendo servicios de alta calidad basados en tres pilares fundamentales: experiencia especializada, atención al cliente y colaboración estratégica.<br><br>En resumen, buscamos facilitar el crecimiento, la innovación y el éxito sostenible en un mercado dinámico y competitivo.</p>
            </div>
            <img class="image-ourGoal" v-motion-fade-visible src="../../assets/objetivo.jpg" alt="Nosotros">
        </div>
    </div>
    <div id="misionVision">
        <div class="misionVision-container container">
            <div class="left-side">
                <h1 class="title" v-motion-slide-visible-top>Misión</h1>
                <p class="misionVision-text">Nos dedicamos a ofrecer asesoramiento financiero especializado y soluciones vanguardistas para empresas tecnológicas emergentes.<br><br>Nuestra meta es impulsar el crecimiento y la viabilidad de proyectos tecnológicos a través de estructuras financieras sólidas y estratégicas, permitiendo así el éxito duradero en un mercado dinámico y competitivo.</p>
            </div>
            <div class="middle">
                <div class="vertical-line"></div>
            </div>
            <div class="right-side">
                <h1 class="title" v-motion-slide-visible-top>Visión</h1>
                <p class="misionVision-text">Nuestra visión en Apex Financial Solutions es convertirnos en el socio preferido y líder en asesoramiento financiero para empresas tecnológicas a nivel global.<br><br>Nos esforzamos por ser la opción principal para aquellos que buscan maximizar su potencial financiero y tecnológico, creando un impacto significativo en el mundo mediante la innovación y el crecimiento responsable.</p>
            </div>
        </div>
    </div>

    <div id="contactUs">
        <h1 class="title" v-motion-slide-visible-top>Comunícate con nosotros</h1>
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
    name: 'NosotrosView',
    components: {
        FooterComponent,
        HeroComponent
    }
}
</script>
<style scoped>
    /* OUR GOAL */

    #ourGoal{
    padding: 3rem;
  }

  .ourGoal-container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  #ourGoal .left-side{
    width: 50%;
  }

  .image-ourGoal{
    width: 522px;
    height: 388px;
    object-fit: cover;
    image-orientation: center;
    margin-top: 2rem;
  }

    /* MISION VISION */

    #misionVision{
        background-color: #F1F1F1;
        padding: 3rem;
    }

    .misionVision-container{
        display: grid;
        grid-template-columns: 1fr 0 1fr;
        gap: 2rem;
    }
    .left-side, .right-side{
      display: flex;
      flex-direction: column;
    }
    .misionVision-text{
        text-align: justify;
    }
    .vertical-line{
        border-left: 5px solid #729343;
        height: 100%;
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

    #ourGoal{
        padding: 3rem 0;
    }
    .ourGoal-container {
        flex-direction: column-reverse;
        align-items: center;
        padding: 0;
    }
    #ourGoal .left-side{
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .image-ourGoal{
        width: 323px;
        height: 242px;
        object-fit: cover;
        image-orientation: center;
    }

    #misionVision{
        padding: 3rem 0;
    }
    .misionVision-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
      gap: 0;
    }
    .vertical-line{
        display: none;
    }
    #misionVision .left-side, #misionVision .right-side{
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

}
</style>