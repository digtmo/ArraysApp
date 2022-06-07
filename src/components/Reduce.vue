<template>
    <div>
    <h1>Caso 1</h1>
    <p>Se imprimirá la suma de los numeros ingresados.</p>
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
    <p>{{numbers}}</p>
    <v-btn color="error" text @click="Imprimir">
                  Imprimir
      </v-btn>
    </div>
    
</template>

<script>
export default {
name:"Reduce",
data: () => ({
name:"Reduce",
numbers:[],
let1:"",
let2:"",
let3:"",
let4:"",
}),
methods: {
    Imprimir (){
        const sum = this.numbers.reduce((sum,item) => sum + item, 0)
        console.log("El total es", sum)
    },
     juntar (){
        this.numbers.push(parseInt(this.let1),parseInt(this.let2),parseInt(this.let3),parseInt(this.let4))
        console.log(this.numbers)
    },
}
}
</script>