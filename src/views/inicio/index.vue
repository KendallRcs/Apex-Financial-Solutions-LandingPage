<template lang="">
    <div class="hero">
        <div class="hero-content">
            <div class="container hero-content-text">
                <h1>Bienvenidos a <br>Apex Financial Solutions</h1>
                <p>Impulsamos el éxito de las empresas tecnológicas emergentes a través de <br>asesoramiento financiero especializado y soluciones innovadoras.</p>
                <button>Conócenos más</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'InicioView'
}
</script>
<style scoped>
.container{
    width: 70%;
    margin: auto;
}
.hero {
  background-image: url('../../assets/logo.png'); /* Reemplaza 'ruta/de/la/imagen.jpg' con la ruta de tu imagen de fondo */
  
  background-size: cover;
  background-position: center;
  height: 550px;
  width: 100vw;
  text-align: center;
  color: white; /* Cambia el color del texto para que se vea bien en la imagen de fondo */
}

.hero-content {
    background-color: rgba(0, 0, 0, 0.5); /* Ajusta la opacidad para oscurecer la imagen de fondo */
    height: 100%;
}

.hero h1 {
  font-size: 36px;
  margin-bottom: 20px;
  text-align: left;
  line-height: 40px;
}

.hero p {
  font-size: 18px;
  margin-bottom: 20px;
  text-align: left;
}

.hero button {
  background-color: rgba(0, 0, 0, 0);
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border: solid white 1px;
  cursor: pointer;
  float: left;
  width: 200px;
}
.hero-content-text{
}
</style>