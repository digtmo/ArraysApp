<template>
    <div>
    <h1>Caso 1</h1>
    <p>Buscará la palabra "bat" en el arrays, si está incluida indicará true. </p>
    <p>{{pet}}</p>
    <v-btn color="error" text @click="Imprimir">
                  Imprimir
      </v-btn>
    </div>
    
</template>

<script>
export default {
name:"Includes",
data: () => ({
name:"Includes",
pet : ['cat','dog','bat','leon']
}),
methods: {
    Imprimir (){
        const respuestas7 = this.pet.includes('bat') // busca si está incluida la palabra en el array, devuelve true o false
        console.log(respuestas7)
    },
}
}
</script>