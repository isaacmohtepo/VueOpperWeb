<template>
    <Sider />
<section class="home-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="home-title">
                        <h1 class="titulo-categoria">Crear categoría</h1>
                    </div>
                </div>
            <div class="row">
               
                <div class="col-md-4 div-nom-cate">
                  <label for="nombre" class="form-label">Nombre de categoría</label>
                  <input type="nombre" class="form-control form-login" id="nombre" aria-describedby="nombre" placeholder="COMEDIA">
                </div>

                
            </div>
            
            <div class="row">
                <div class="col-md-4">
                    <button class="btn btn-general">Crear</button>
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