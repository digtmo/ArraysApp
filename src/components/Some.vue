<template>
    <div>
    <h1>Caso 1</h1>
    <p>Se imprimirá un true o false en funcion de la condición decladarada. (en este caso si hay algun objeto que tenga el valor true en delivered.</p>
    <p>{{data}}</p>
    <v-btn color="error" text @click="Imprimir">
                  Imprimir
      </v-btn>
    <br>
    </div>
    
</template>

<script>
export default {
name:"Some",
data: () => ({
name:"Some",
numbers:[1,30,39,29,10,13],
data: [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: false,
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
      delivered: false,
    },
    {
        customerName: "RomiNi",
        total: 240,
        delivered: false,
      },
  ]
}),
methods: {
    Imprimir (){
        const respuestadatas = this.data.some(item => item.delivered)// busca si hay algun valor true en el array datas.delivered
        console.log(respuestadatas)
    },
}
}
</script>