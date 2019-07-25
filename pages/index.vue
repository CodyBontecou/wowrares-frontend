<template>
  <v-container grid-list-md>
    <v-layout align-top justify-center row wrap class="pa-5">
      <v-flex xs12>
        <p class="text-uppercase grey--text display-1 font-weight-medium">
          <span class="font-weight-light">Wow</span>
          <span>rares</span>
        </p>
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-text-field solo v-model="zone" label="Zone name..." append-icon="search" @click:append required></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex d-flex xs12>
        <p class="grey--text font-weight-medium">
          <span class="">Introducing Wowrares.com</span>
          <span class="font-weight-light">A tool to optimize your WoW Classic experience.</span>
        </p>
      </v-flex>
      <v-flex d-flex xs12 md4>
        <v-card color="dark-grey">
          <v-card-title primary class="title">Navigate</v-card-title>
          <v-img src="nav-cropped.png"></v-img>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 md4>
        <v-card>
          <v-card-title primary class="title">Locate</v-card-title>
          <v-img src="timber-only-map.png"></v-img>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 md4>
        <v-card>
          <v-card-title class="title">Loot</v-card-title>
          <v-img src="timber-loot-cropped.png"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
    }),
    async fetch({store}) {
      await store.dispatch('fetchAllZones');
    },
  }
</script>
