<template>
	<Sider />
	<section class="home-section">
		<div class="container">
			<div class="row">
				<div class="contenido">


					<p class="bienv-user">Hola, Pedro Perez</p>

					<p class="text-panel-opc">Selecciona una opción:</p>

					<div>
						<button class="btn btn-panel">Ver todas las categorías</button>
					</div>
					<div>
						<button class="btn btn-panel">Crear categorías</button>
					</div>

					<div>
						<button class="btn btn-panel">Cerrar sesión</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Sider from '@/components/Sider.vue'
export default {
  name: 'App',
   components: {
    Sider
  }
}
</script>


