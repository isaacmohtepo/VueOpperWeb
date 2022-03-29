<template>
  <div class="container-fluid" style="background: #3e1149;">
    <div class="row">
      <div class="col-md-6 section-login-1">
        <div>
          <p class="logo-anime"> <img src="../assets/img/logo-icon.png" alt=""> anime<span class="logo-yabu">yabu</span></p>
          <div>
            <a href="#"><i class='bx bx-arrow-to-left' ></i></a>
          </div>
        </div>
        <div class="logo">
          <img class="logo-iniciar" src="../assets/img/logo-iniciar.png" alt="LOGO INICIAR">
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
                  <p class="texto-register"><img src="../assets/img/line-register.png" alt="Linea"> Regístrate también con <img src="../assets/img/line-register.png" alt="Linea"></p>
                </div>
                <div class="sociales">
                  <i class='bx bxl-instagram icon-social'></i>
                  <i class='bx bxl-twitter icon-social'></i>
                  <i class='bx bxl-facebook icon-social'></i>
                </div>
                <div class="q-register-div">
                  <!-- Registrate</a></span></p> -->

                <p class="q-register">Quieres registrarte? <span > <router-link to="/register">Registrate</router-link></span></p>


                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    <SectionLeft />
  </div>
</div>
</template>


<script>
import SectionLeft from '@/components/SectionLeft.vue'
export default {
  name: 'App',
   components: {
    SectionLeft
  }
}
</script>