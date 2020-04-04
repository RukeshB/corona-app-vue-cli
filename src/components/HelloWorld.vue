<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="worlds" :search="search"></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Country",
          align: "start",
          filterable: true,
          value: "country"
        },
        { text: "Total Case", value: "totalCases" },
        { text: "New Case", value: "newCases" },
        { text: "Total Death", value: "totalDeaths" },
        { text: "New Daath", value: "newDeaths" },
        { text: "Active Cases", value: "activeCases" },
        { text: "Total Recovered", value: "totalRecovered" }
      ],
      worlds: []
    };
  },
  created() {
    axios
      .get("https://nepalcorona.info/api/v1/data/world")
      .then(res => (this.worlds = res.data))
      .catch(error => console.log(error));
  }
};
</script>
