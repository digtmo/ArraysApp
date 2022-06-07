<template>
    <div>

 <v-form >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="pet1"
            :counter="10"
            label="Mascota 1"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="pet2"
            :counter="10"
            label="Mascota 2"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="pet3"
            label="Mascota 3"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

        

    <h1>Caso 1</h1>
    <p>Buscará la palabra "bat" en el arrays, si está incluida indicará true. </p>
    
    <v-btn color="error" text @click="juntar">
                  Imprimir
      </v-btn>
    </div>
    
</template>

<script>
export default {
name:"Flatmap",
data: () => ({
name:"Flatmap",
pet1 : "",
pet2:"",
pet3:"",
kitpet:[],
}),
methods: {
    juntar (){
        this.kitpet.push(this.pet1,this.pet2,this.pet3)
        console.log(this.kitpet)

    },
  
}
}
</script>