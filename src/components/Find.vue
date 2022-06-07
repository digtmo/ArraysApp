<template>
    <div>
    <h1>Caso 1</h1>
     <v-form >
    <v-container>
      <v-row>
        <v-col cols="12" >
            <v-text-field 
              v-model="let1"
              label="Number 1"
              required
            ></v-text-field>

          <v-text-field
              v-model="let2"
              label="Number 2"
              required
            ></v-text-field>

            <v-text-field
              v-model="let3"
              label="Number 3"
              required
            ></v-text-field>

            <v-text-field
              v-model="let4"
              label="Number 4"
              required
            ></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="error" text @click="juntar">
                  Enviar
      </v-btn>
    </v-container>
    </v-form>
    <p>Se buscará e imprimirá el numero buscado en el siguiente array:</p>
    <p>{{numbers}}</p>
    <p>Ingresa el numero a buscar (debe estar en el array):</p>
    <v-form>
      <v-container>
        <v-row>
        <v-col cols="12">
            <v-text-field
                v-model="buscado"
                label="Numero a buscar"
                required
            ></v-text-field>
        </v-col>
      </v-row>
      </v-container>
    </v-form>
    <v-btn color="error" text @click="Imprimir">
                  Imprimir
      </v-btn>
    <br>
    <h1>Caso 2</h1>
    <p>Se imprimirán el products buscado que tenga id: "🥞"</p>
    <p>{{products}}</p>
  
   

    <v-btn color="error" text @click="Imprimir2">
                  Imprimir
    </v-btn>
    </div>
    
</template>

<script>
export default {
name:"Find",
data: () => ({
name:"Find",
buscado:"",
numbers:[],
let1:"",
let2:"",
let3:"",
let4:"",
products : [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ]
}),
methods: {
    Imprimir (){
        const respuesta3 = this.numbers.find(item => item == this.buscado)
        if (respuesta3){console.log('Se encontró el elemento buscado:', respuesta3)} 
        else {console.log(`No se encontró el elemento buscado: ${this.buscado}`)}
        
    },
    Imprimir2 (){
        const respuesta4 = this.products.find(item => item.id === '🥞') 
        console.log('Se encontró el elemento buscado:', respuesta4)
    },
     juntar (){
        this.numbers.push(parseInt(this.let1),parseInt(this.let2),parseInt(this.let3),parseInt(this.let4))
        console.log(this.numbers)
    },
}
}
</script>