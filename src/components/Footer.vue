<template lang="">
    <footer id="footer">
        <div class="footer-container container">
            <div class="footer-container-information">
                <img class="image-logo" src="../assets/kenrabbit.png" alt="Logo Completo">
                <div class="right-side">
                    <div class="information">
                        <img src="../assets/phone.svg" alt="Ícono de teléfono" class="icon-img">
                        <p class="phone-number">+51 954 054 500</p>
                    </div>
                    <div class="information">
                        <img src="../assets/mail.svg" alt="Ícono de teléfono" class="icon-img">
                        <p class="phone-number">jalvarez@apexcorp.pe</p>
                    </div>
                </div>
            </div>
            <hr class="line">
            <p class="copy">©Copyright 2024, Todos los derechos reservados. Desarrollado por Apex Financial Solutions</p>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'FooterComponent'    
}
</script>
<style lang="css">
    /* FOOTER */

  #footer{
    background-color: #729343;
    padding: 3rem;
  }
  .information{
    display: flex;
    gap: 1rem;
    align-items: center;
    color: white;
  }
  .icon-img {
    /* Cambia el color del SVG a blanco */
    filter: invert(1);
  }

  .footer-container{
    width: 90%; /* Ancho de la línea */
    margin: 1rem auto; 
  }
  .footer-container-information{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .right-side{
    display: flex;
    flex-direction: column;
  }
  .line {
    width: 100%; /* Ancho de la línea */
    margin: 1rem auto; /* Centra la línea horizontalmente */
  }
  .copy{
    color: white;
    width: 90%; /* Ancho de la línea */
    margin: 1rem auto; 
  }
</style>