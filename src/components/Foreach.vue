<template>
  <div class="hello">
    <h1>Caso 1</h1>
    <p>Ingrese una letra en cada campo, 
    al dar clic en enviar se hará un push a un arrays vacío.</p>
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
    <p> Array:{{letttersnew}}</p>
    <p>Al dar clic en imprimir, se verá cada letra del array impresa por separado.</p>
     <v-btn color="error" text @click="Imprimir">
                  Imprimir
      </v-btn>
      <br>
      <h1>Caso 2</h1>
      
      <p>Se Imprimirá tittle and price</p>
    <p>{{Products}}</p>
    <v-btn color="error" text @click="sumar">
                  sumar
      </v-btn>
     <v-btn color="error" text @click="Imprimir2">
                  Imprimir
      </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Foreach',
  data: () => ({
    name: 'Foreach',
    let1:"",
    let2:"",
    let3:"",
    let4:"",
    letttersnew:[],
    lettters : ['a','b','c','d'],
    prices:[],
    Products : [
    { tittle: 'Burguer', price:21},
    { tittle: 'Pizza', price:41},
    { tittle: 'Tomates', price:3},
    { tittle: 'Sandias', price:9},
],
    newProducts:[]
  }),
  methods:{
    Imprimir() {
      this.letttersnew.forEach(item => {
       console.log(`${this.name}, Caso 1:`,item)
      })
    },
    Imprimir2() {
      this.Products.forEach(item => {
       console.log(`${this.name}, Caso 2: ${item.tittle} - ${item.price}`) 
      })
    },
    juntar (){
        this.letttersnew.push(this.let1,this.let2,this.let3,this.let4)
    },
    juntar2 (){
        this.prices.push(this.Products.price)
        console.log(this.prices)
    },
    sumar(){
      const summ = this.Products.map(item => item.price).reduce((prev,curr) => prev + curr, 0)
      console.log(summ)
    }
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

