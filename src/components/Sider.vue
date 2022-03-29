<template>
	<div class="sidebar">
		<div v-on:click="toggleSidebar()" class="logo-details">
			<img  src="../assets/img/logo-icon.png" alt="icono - logo " />
			<div class="logo_name" id="btn">
				anime<span class="logo-yabu">yabu</span>
				<i class="bx bx-chevrons-left"></i>
			</div>
		</div>
		<ul class="nav-list">
			<li>
				<a class="ctgoria">
					<span class="links_name">Categorías</span>
				</a>
			</li>
			<li>
				<router-link to="/categorias">
			
					<i class="bx bx-list-ul"></i>
					<span class="links_name">Ver todas</span>
					</router-link>
				
				<span class="tooltip">Ver todas</span>
			</li>
			<li>
				<router-link to="/crear-categoria">
				
					<i class="bx bx-news"></i>
					<span class="links_name">Crear</span>
				</router-link>
				<span class="tooltip">Crear</span>
			</li>

			<li class="cerrar-ses">
				<router-link to="#">
					<i class="bx bxs-log-out"></i>
					<span class="links_name">Cerrar sesión</span>
				</router-link>
				<span class="tooltip">Cerrar sesión</span>
			</li>
		</ul>
	</div>
	
</template>


