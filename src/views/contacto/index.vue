<template>
    <HeroComponent
      sectionTitle='Contacto'
      firstPart="Contacto"
      secondPart=""
      paragraph=""
      :showButton="false"
    />

    <div id="contactForm">
        <h1 class="title" v-motion-fade-visible>Comunícate con nosotros</h1>
        <p class="contactForm-text">Escríbenos mediante el formulario para una atención personalizada y brindarte la información que desees.</p>
        <div class="contactForm-container container">
            <form ref="form"  @submit.prevent="onSubmit" class="contactForm-form">
                <div class="contactForm-twoColumns">
                    <input type="text" name="Nombre" id="Nombre" v-model="form.Nombre" placeholder="Nombre" required>
                    <input type="tel" name="Celular" id="Celular" v-model="form.Celular" placeholder="Número de celular" required>
                </div>

                <input type="email" name="Email" id="Email" v-model="form.Email" placeholder="E-mail" required>

                <textarea rows=10 name="Mensaje" id="Mensaje" v-model="form.Mensaje" placeholder="Mensaje" required></textarea>

                <button type="submit" v-motion-fade-visible class="button lg">Enviar</button>
            </form>
        </div>
    </div>

    <FooterComponent/>

</template>
<script>
import FooterComponent from "../../components/Footer.vue";
import HeroComponent from "../../components/Hero.vue";
import {toast} from 'vue3-toastify';
import emailjs from '@emailjs/browser';

export default {
    name: 'ContactoView',
    components: {
        FooterComponent,
        HeroComponent
    },
    data(){
        return {
            form: {
                Nombre: '',
                Celular: '',
                Email: '',
                Mensaje: ''
            }
        }
    },
    methods: {
        async onSubmit(){
            console.log(this.form);
            if(this.form.Nombre === '' || this.form.Celular === '' || this.form.Email === '' || this.form.Mensaje === ''){
                toast.error("Por favor, complete todos los campos", {
                    autoClose: 3000,
                    position: toast.POSITION.TOP_CENTER,
                } );
                return;
            }else{
                /* const response = await fetch("https://formspree.io/f/mnqelzar", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
                body: JSON.stringify(this.form)
                });

                if (response.ok) {
                    toast.success("Mensaje Enviado", {
                        autoClose: 3000,
                        position: toast.POSITION.TOP_CENTER,
                    } );
                    this.resetForm();
                } else {
                    // Maneja los errores si los hay
                    toast.error("Hubo un problema al enviar tu formulario. Por favor, intenta nuevamente.", {
                        autoClose: 3000,
                        position: toast.POSITION.TOP_CENTER,
                    } );
                } */
                emailjs.sendForm('service_etmfsy8', 'template_ims07in', this.$refs.form, {publicKey: 'oyehn_O3rjBV9lwut'}).then(
                    () => {
                        toast.success("Mensaje Enviado", {
                        autoClose: 3000,
                        position: toast.POSITION.TOP_CENTER,
                        } );
                        this.resetForm();
                    },
                    (error) => {
                        // Maneja los errores si los hay
                        toast.error(`Hubo un problema al enviar tu formulario. Por favor, intenta nuevamente. ${error}`, {
                            autoClose: 3000,
                            position: toast.POSITION.TOP_CENTER,
                        } );
                        console.log("ERROR", error)
                    },
                );
            }
            
            
        },
        resetForm(){
            this.form = {
                Nombre: '',
                Celular: '',
                Email: '',
                Mensaje: ''
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

    /* RESPONSIVE */
@media only screen and (max-width: 1000px) {
    /* Estilos específicos para pantallas con ancho máximo de 1000px */

    #contactForm{
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .contactForm-text {
        width: 90%; 
        text-align: justify;
    }

    .contactForm-twoColumns{
        display: flex;
        flex-direction: column;
    }

}
</style>