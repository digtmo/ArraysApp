<template>
  <div class="hello">
    <h1>Caso 1</h1>
     <p>Se Imprimirá cada letra pero dentro de un array</p>
    <p>{{lettters}}</p>
     <v-btn color="error" text @click="Imprimir">
                  Imprimir
      </v-btn>
      <br>
      <h1>Caso 2</h1>
       <p>Se Imprimirá cada customerName</p>
    <p>{{orders}}</p>
     <v-btn color="error" text @click="Imprimir2">
                  Imprimir
      </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Foreach',
  data: () => ({
    name:'Map',
    lettters : ['a','b','c','d'],
    orders : [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
],
  }),
  methods:{
    Imprimir() {
     const nuevoArrays = this.lettters.map(item => item)
     console.log(`${this.name}, Caso 1:`,nuevoArrays)
    },
    Imprimir2() {
     const nuevoArrays2 = this.orders.map(item => item.customerName)
     console.log(`${this.name}, Caso 1:`,nuevoArrays2)
    },
  },
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

