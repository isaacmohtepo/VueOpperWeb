<template>
    <div class="container-fluid" style="background: #3e1149;">
        <div class="row">
            <div class="col-md-6 section-login-1">
                <div>
                    <p class="logo-anime"> <img src="../assets/img/logo-icon.png" alt=""> anime<span
                            class="logo-yabu">yabu</span></p>
                    <div>
                        <router-link to="/login"><i class='bx bx-arrow-to-left'></i></router-link>
                    </div>
                </div>
                <div class="logo-register-div">
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-2">
                            <img class="logo-register" src="../assets/img/logo-register.png" alt="LOGO REGISRAR">
                        </div>
                        <div class="col-md-4 div-register">
                            <p class="texto-logo-iniciar">ようこそ!</p>
                            <p class="texto-logo-segundario">Bienvenidos(a)!</p>
                        </div>

                    </div>
                </div>

                <form action="">
                    <div class="row text-center">
                        <p class="tipo-persona"></p>
                        <div class="input-group" id="tipo">
                            <span class="radio">
                                <label>Tipo de persona: </label>
                                <label>
                                    <input type="radio" name="opciones" v-model="checked" v-on:click="tipoPersona()"
                                        :value="1">
                                    <span> Natural</span>
                                </label>

                                <label>
                                    <input type="radio" name="opciones" v-model="checked" v-on:click="tipoPersona()"
                                        :value="2">
                                    <span> Jurídica</span>
                                </label>
                            </span>
                        </div>



                    </div>


                    <div class="row">

                        <div class="col-md-12 formulario-imput">
                            <div class="imput-text ">
                                <div class="col-md-4 mb-md-3" v-if="checked == '1'">
                                    <label for="nombre" class="form-label">Nombre</label>
                                    <input type="nombre" class="form-control form-login" id="nombre"
                                        aria-describedby="nombre">
                                </div>
                                <div class="col-md-4 mb-md-3" v-if="checked =='1'">
                                    <label for="apellido" class="form-label">Apellido</label>
                                    <input type="apellido" class="form-control form-login" id="apellido"
                                        aria-describedby="apellido">
                                </div>

                                <div class="col-md-4 mb-md-3" v-if="checked == '2'">
                                    <label for="nombre" class="form-label">Razón social</label>
                                    <input type="nombre" class="form-control form-login" id="nombre"
                                        aria-describedby="nombre">
                                </div>
                                <div class="col-md-4 mb-md-3" v-if="checked == '2'">
                                    <label for="apellido" class="form-label">NIT</label>
                                    <input type="apellido" class="form-control form-login" id="apellido"
                                        aria-describedby="apellido">
                                </div>
                                <div class="col-md-4 mb-md-3">
                                    <label for="telefono" class="form-label">Teléfono</label>
                                    <input type="telefono" class="form-control form-login" id="telefono"
                                        aria-describedby="telefono">
                                </div>
                                <div class="col-md-4 mb-md-3">
                                    <label for="name" class="form-label">Número de identificación</label>
                                    <input type="name" class="form-control form-login" id="numero-identificacion"
                                        aria-describedby="name">
                                </div>
                                <div class="col-md-4 mb-md-3">
                                    <label for="name" class="form-label">Email</label>
                                    <input type="name" class="form-control form-login" id="email"
                                        aria-describedby="name" placeholder="usuario@yabu.com">
                                </div>

                                <div class="col-md-4 mb-md-3">
									<label for="confi-contraseña" class="form-label">Contraseña</label>
									<div class="iconCheck">
                                       <a v-on:click="mostrarPassword	" href="#pass"><i class='iconMostrar bx bx-show' ></i></a>
                                    </div>
                                    <input type="password" class="form-control form-login" id="contraseña"
                                        aria-describedby="contraseña" placeholder="• • • • • • •">
                                </div>

                                <div class="col-md-4 mb-md-3">
                                    <label for="confi-contraseña" class="form-label">Confirmar contraseña</label>
                                     <div class="iconCheck">
                                       <a v-on:click="mostrarConfirmarPassword" href="#pass"><i class='iconMostrar2 bx bx-show' ></i></a>
                                    </div>
									
									<input type="password" class="form-control form-login" id="confi-contraseña"
                                        aria-describedby="confi-contraseña" placeholder="• • • • • • •">
									
                                    <button class="btn btn-register">Registrar</button>
                                </div>


                                <div class="register">
                                    <p class="texto-register"><img src="../assets/img/line-register.png" alt="Linea">
                                        Regístrate también con <img src="../assets/img/line-register.png" alt="Linea">
                                    </p>
                                </div>
                                <div class="sociales">
                                    <i class='bx bxl-instagram icon-social'></i>
                                    <i class='bx bxl-twitter icon-social'></i>
                                    <i class='bx bxl-facebook icon-social'></i>
                                </div>
                                <div class="q-register-div">

                                    <p class="q-register">Ya estás registrado? <span>
                                            <router-link to="/login">Acceder</router-link>
                                        </span></p>
                                </div>
                            </div>

                        </div>

                    </div>



                </form>
            </div>
            <SectionRight />
        </div>
    </div>
</template>



<script>
    import SectionRight from '@/components/SectionRight.vue'
    export default {
        name: 'App',
        components: {
            SectionRight
        },
        data() {
            return {
                checked: '1',

            }
        },
        methods: {
            mostrarPassword() {
                var password = document.getElementById("contraseña");
                var icon = document.getElementsByClassName("iconMostrar")[0];
                if (password.type === "password") {
                    password.type = "text";
					icon.classList.remove("bx-show");
                    icon.classList.add("bx-hide");
					
                } else {
                    password.type = "password";
                    icon.classList.add("bx-show");
                }
            },
			mostrarConfirmarPassword() {
				var password = document.getElementById("confi-contraseña");
				var icon = document.getElementsByClassName("iconMostrar")[1];
				if (password.type === "password") {
					password.type = "text";
					icon.classList.remove("bx-show");
					icon.classList.add("bx-hide");
				}
				else {
					password.type = "password";
					icon.classList.add("bx-show");
				}
			},

            tipoPersona() {
                let checked = this.checked;
                return checked
            },

        }


    }
</script>
