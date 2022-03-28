<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 section-login-1">
        <div>
          <p class="logo-anime"> <img src="img/logo-icon.png" alt=""> anime<span class="logo-yabu">yabu</span></p>
          <div>
            <a href="#"><i class='bx bx-arrow-to-left' ></i></a>
          </div>
        </div>
        <div class="logo">
          <img class="logo-iniciar" src="img/logo-iniciar.png" alt="LOGO INICIAR">
          <p class="texto-logo-iniciar">ひさしぶり!</p>
          <p class="texto-logo-segundario">¡Hola, te extrañamos!</p>
        </div>

        <form action="">
          <div class="row">
            <div class="col-md-12 formulario-imput">
              <div class="imput-text">
                <div class="col-md-4">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control form-login" id="email" aria-describedby="email" placeholder="usuario@">
                </div>
                <br>
                <div class="col-md-4">
                  <label for="password" class="form-label">Contraseña</label>
                  <input type="password" class="form-control form-login" id="Contraseña" aria-describedby="Contraseña" placeholder="• • • • • • •">
                  <div class="olvido-contraseña">
                    <a class="text-olvido-contraseña" href="">¿Olvido la contraseña?</a>
                  </div>
                  <div>
                    <button class="btn btn-acceder">Acceder</button>
                  </div>
                </div>
                <div class="register">
                  <p class="texto-register"><img src="img/line-register.png" alt="Linea"> Regístrate también con <img src="img/line-register.png" alt="Linea"></p>
                </div>
                <div class="sociales">
                  <i class='bx bxl-instagram icon-social'></i>
                  <i class='bx bxl-twitter icon-social'></i>
                  <i class='bx bxl-facebook icon-social'></i>
                </div>
                <div class="q-register-div">
                  <p class="q-register">Quieres registrarte? <span ><a class="q-register-morado" href="/register.html">Registrate</a></span></p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-6 section-login-2">
   
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="personaje-div">
            <div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="personaje" src="img/personaje.png" alt="Personaje 1">
                  </div>
                  <div class="carousel-item">
                    <img class="personaje-1" src="img/personaje-1.png"  alt="Personaje 2">
                  </div>
                  <div class="carousel-item">
                    <img  class="personaje-2" src="img/personaje-2.png"  alt="Personaje 3">
                  </div>
                </div>
              </div>
            <img class="circulo-personaje" src="img/circulo-personaje.png" alt="Circulo - personaje">
          </div>
          
          <div class="row">
          <div class="col-md-2">

          </div>
          <div class="col-md-8">
            <div class="text-logo-principal">
              <p>anime<span class="text-logo-principal-yabu">yabu.</span></p>
              <p class="parrafo-login">Ver anime en línea en HD, subtitulado o doblado,
                en tu celular o computadora.
               ¡Animeyabu, tu portal de anime en línea!</p>
            </div>
          </div>
          <div class="col-md-2">
            
          </div>
          <div class="text-center">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> 
          </div>
      </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
