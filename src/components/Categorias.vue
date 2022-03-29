
<template>
    <Sider />
      <section class="home-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="home-title">
                        <h1 class="titulo-categoria">Lista de Categorías</h1>
                    </div>
                </div>
            <div class="row">
                <div class="col-md-4 cate-cent">
                    <div class="card-categoria">
                        <p class="titulo-card-categoria">ACCIÓN</p>
                        <div class="edi-boton d-flex justify-content-end"><router-link to="/actualizar-categoria">Editar</router-link></div>
                    </div>
                </div>
                <div class="col-md-4 cate-cent">
                    <div class="card-categoria">
                        <p class="titulo-card-categoria">AVENTURA</p>
                        <div class="edi-boton d-flex justify-content-end "><router-link to="/actualizar-categoria">Editar</router-link></div>
                    </div>
                </div>
                <div class="col-md-4 cate-cent">
                    <div class="card-categoria">
                      <p class="titulo-card-categoria">COMEDIA</p>
                        <div class="edi-boton d-flex justify-content-end "><router-link to="/actualizar-categoria">Editar</router-link></div>
                    </div>
                </div>

                <div class="col-md-4 cate-cent">
                    <div class="card-categoria">
                      <p class="titulo-card-categoria">TERROR</p>
                        <div class="edi-boton d-flex justify-content-end "><router-link to="/actualizar-categoria">Editar</router-link></div>
                    </div>
                </div>

                <div class="col-md-4 cate-cent">
                    <div class="card-categoria">
                      <p class="titulo-card-categoria" >ROMANCE</p>
                        <div class="edi-boton d-flex justify-content-end "><router-link to="/actualizar-categoria">Editar</router-link></div>
                    </div>
                </div>

                <div class="col-md-4 cate-cent">
                    <div class="card-categoria">
                      <p class="titulo-card-categoria">MISTERIO</p>
                        <div class="edi-boton d-flex justify-content-end "><router-link to="/actualizar-categoria">Editar</router-link></div>
                    </div>
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