<template>
    <HeroComponent
      sectionTitle='Contacto'
      firstPart="Contacto"
      secondPart=""
      paragraph=""
      :showButton="false"
    />

    <div id="contactForm">
        <h1 class="title" v-motion-slide-visible-top>Comunícate con nosotros</h1>
        <p class="contactForm-text">Escríbenos mediante el formulario para una atención personalizada y brindarte la información que desees.</p>
        <div class="contactForm-container container">
            <div class="contactForm-form">
                <div class="contactForm-twoColumns">
                    <input type="text" id="name" v-model="form.name" placeholder="Nombre" required>
                    <input type="tel" id="cellphone" v-model="form.cellphone" placeholder="Número de celular" required>
                </div>

                <input type="email" id="email" v-model="form.email" placeholder="E-mail" required>

                <textarea rows=10  id="message" v-model="form.message" placeholder="Mensaje" required></textarea>

                <button @click="onSubmit" v-motion-fade-visible class="button lg">Enviar</button>
            </div>
        </div>
    </div>

    <FooterComponent/>

</template>
<script>
import FooterComponent from "../../components/Footer.vue";
import HeroComponent from "../../components/Hero.vue";
import {toast} from 'vue3-toastify';

export default {
    name: 'ContactoView',
    components: {
        FooterComponent,
        HeroComponent
    },
    data(){
        return {
            form: {
                name: '',
                cellphone: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        onSubmit(){
            console.log(this.form);
            if(this.form.name === '' || this.form.cellphone === '' || this.form.email === '' || this.form.message === ''){
                toast.error("Por favor, complete todos los campos", {
                    autoClose: 3000,
                    position: toast.POSITION.TOP_CENTER,
                } );
                return;
            }else{
                toast.success("Mensaje Enviado", {
                    autoClose: 3000,
                    position: toast.POSITION.TOP_CENTER,
                } );
                this.resetForm();
            }
        },
        resetForm(){
            this.form = {
                name: '',
                cellphone: '',
                email: '',
                message: ''
            
            }
        }
    },
}
</script>
<style scoped>
    
    #contactForm{
        padding: 3rem;
    }
    .contactForm-text{
        text-align: center;
    }
    .lg{
        width: 100%;
    }
    .contactForm-form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .contactForm-twoColumns{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
    textarea{
        resize: none;
    }
    input, textarea{
        padding: 1rem;
        background-color: #F4F4F4;
        border: none;
        font-size: 1rem;
        font-family: "Mukta", sans-serif;
    }
</style>