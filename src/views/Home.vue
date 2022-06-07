<template>
  <div class="home">
    <h1>ArraysApp[]</h1>
    <p>El objetivo de este proyecto es dar a conocer el funcionamiento de los metodos de manipulacion de Arrays y lograr un mejor entendimiento de estos.</p>
    <p>Todas las respuestas son impresas por consola.</p>
    <h1 class="text-center">ForEach</h1>
    <Foreach/>
    <br>
    <h1 class="text-center">Map & Reloaded</h1>
    <Foreach2/>
      <br>
    <h1 class="text-center">Filter</h1>
    <Filter1/>
    
    <h1 class="text-center">Reduce</h1>
    <Reduce/>

    <h1 class="text-center">Find</h1>
    <Find/>

    <h1 class="text-center">Some</h1>
    <Some/>

     <h1 class="text-center">Includes</h1>
    <includes/>

     <h1 class="text-center">Flatmap</h1>
    <Flatmap/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Foreach from '@/components/Foreach.vue'
import Foreach2 from '@/components/Foreach2.vue'
import Filter1 from '../components/Filtro.vue'
import Reduce from '../components/Reduce.vue'
import Find from '../components/Find.vue'
import Some from '../components/Some.vue'
import Includes from '../components/Includes.vue'
import Flatmap from '../components/Flatmap.vue'

export default {
  name: 'Home',
  components: {
    Foreach,
    Foreach2,
    Filter1,
    Reduce,
    Find,
    Some,
    Includes,
    Flatmap,
  }
}
    
</script>
