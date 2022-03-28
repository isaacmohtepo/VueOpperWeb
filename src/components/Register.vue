<template>
	
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-6 section-login-1">
				<div>
					<p class="logo-anime"> <img src="img/logo-icon.png" alt=""> anime<span class="logo-yabu">yabu</span></p>
					<div>
						<a href="/index.html"><i class='bx bx-arrow-to-left' ></i></a>
					</div>
				</div>
				<div class="logo-register-div">
					<div class="row">
						<div class="col-md-3"></div>
						<div class="col-md-2">
							<img class="logo-register" src="img/logo-register.png" alt="LOGO REGISRAR">
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
									<input type="radio" name="opciones" value="multiples" id="multiples" checked>
									<span> Natural</span> 
								</label>

								<label>
									<input type="radio" name="opciones" value="individual" id="individual">
									<span> Jurídica</span> 
								</label>
							</span>
						</div>
					</div>
					<div class="row">
						
						<div class="col-md-12 formulario-imput">
							<div class="imput-text " id="natural" style="display:;">
								<div class="col-md-4">
									<label for="nombre" class="form-label">Nombre</label>
									<input type="nombre" class="form-control form-login" id="nombre" aria-describedby="nombre" placeholder="usuario@">
								</div>
								<br>
								<div class="col-md-4">
									<label for="apellido" class="form-label">Apellido</label>
									<input type="apellido" class="form-control form-login" id="apellido" aria-describedby="apellido" placeholder="usuario@">
								</div>
								<br>
								<div class="col-md-4">
									<label for="telefono" class="form-label">Teléfono</label>
									<input type="telefono" class="form-control form-login" id="telefono" aria-describedby="telefono" placeholder="usuario@">
								</div>
								<br>
								<div class="col-md-4">
									<label for="name" class="form-label">Número de identificación</label>
									<input type="name" class="form-control form-login" id="numero-identificacion" aria-describedby="name" placeholder="usuario@">
								</div>
								<br>
								<div class="col-md-4">
									<label for="name" class="form-label">Email</label>
									<input type="name" class="form-control form-login" id="email" aria-describedby="name" placeholder="usuario@">
								</div>
								<br>
								<div class="col-md-4">
									<label for="contraseña" class="form-label">Contraseña</label>
									<input type="password" class="form-control form-login" id="contraseña" aria-describedby="contraseña" placeholder="usuario@">
								</div>
								<br>
								<div class="col-md-4">
									<label for="confi-contraseña" class="form-label">Confirmar contraseña</label>
									<input type="password" class="form-control form-login" id="confi-contraseña" aria-describedby="confi-contraseña" placeholder="usuario@">
									<button class="btn btn-register">Registrar</button>
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
									<p class="q-register">Ya estás registrado?<span ><a class="q-register-morado" href="/index.html">Acceder</a></span></p>
								</div>
							</div>


							<div class="imput-text " id="juridica" style="display: none;">
								<div class="col-md-4">
									<label for="nombre" class="form-label">Razón social</label>
									<input type="nombre" class="form-control form-login" id="nombre" aria-describedby="nombre" placeholder="usuario@">
								</div>
								<br>
								<div class="col-md-4">
									<label for="apellido" class="form-label">NIT</label>
									<input type="apellido" class="form-control form-login" id="apellido" aria-describedby="apellido" placeholder="usuario@">
								</div>
								<br>
								<div class="col-md-4">
									<label for="telefono" class="form-label">Teléfono</label>
									<input type="telefono" class="form-control form-login" id="telefono" aria-describedby="telefono" placeholder="usuario@">
								</div>
								<br>
								<div class="col-md-4">
									<label for="name" class="form-label">Email</label>
									<input type="name" class="form-control form-login" id="email" aria-describedby="name" placeholder="usuario@">
								</div>
								<br>
								<div class="col-md-4">
									<label for="contraseña" class="form-label">Contraseña</label>
									<input type="password" class="form-control form-login" id="contraseña" aria-describedby="contraseña" placeholder="usuario@">
								</div>
								<br>
								<div class="col-md-4">
									<label for="confi-contraseña" class="form-label">Confirmar contraseña</label>
									<input type="passowrd" class="form-control form-login" id="confi-contraseña" aria-describedby="confi-contraseña" placeholder="usuario@">
									<button class="btn btn-register">Registrar</button>
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
									<p class="q-register">Ya estás registrado?<span ><a class="q-register-morado" href="/index.html">Acceder</a></span></p>
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
</div>


</template>