<template>
  <div class="hello">
    <h1>Caso 1</h1>
    <p>Se ingresarán 4 palabras y solo se imprimirán 
    las que tengan más de 5 letras</p>
    
    <v-form >
    <v-container>
      <v-row>
        <v-col cols="12" >
            <v-text-field 
              v-model="let1"
              label="Letra 1"
              required
            ></v-text-field>

          <v-text-field
              v-model="let2"
              label="Letra 2"
              required
            ></v-text-field>

            <v-text-field
              v-model="let3"
              label="Letra 3"
              required
            ></v-text-field>

            <v-text-field
              v-model="let4"
              label="Letra 4"
              required
            ></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="error" text @click="juntar">
                  Enviar
      </v-btn>
    </v-container>
    </v-form>
    <p>{{letttersnew}}</p>
    
     <v-btn color="error" text @click="Imprimir">
                  Imprimir
      </v-btn>
      <br>
      <h1>Caso 2</h1>
       <p>Se imprimirán solos los que tengan delivered true</p>
    <p>{{orders}}</p>
     <v-btn color="error" text @click="Imprimir2">
                  Imprimir
      </v-btn>

      <h1>Caso 3 + flatMap</h1>
       <p>Se imprimirán solos los nombres de los que tengan valor true</p>
    <p>{{orders}}</p>
     <v-btn color="error" text @click="Imprimir3">
                  Imprimir
      </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Filtro',
  data: () => ({
    name:'Filtro',
    letttersnew:[],
    let1:"",
    let2:"",
    let3:"",
    let4:"",
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
      delivered: false
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
     const nuevoArrays = this.letttersnew.filter(item => item.length > 5)
     console.log(`${this.name}, Caso 1:`,nuevoArrays)
    },
    Imprimir2() {
     const nuevoArrays2 = this.orders.filter(item => item.delivered)
     console.log(nuevoArrays2)
    },
    Imprimir3(){
    const nuevoArrays2 = this.orders.filter(item => item.delivered)
     console.log(nuevoArrays2)
    const nv3 = nuevoArrays2.flatMap(item => item.customerName)
     console.log(nv3)
    },
    juntar (){
        this.letttersnew.push(this.let1,this.let2,this.let3,this.let4)
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

