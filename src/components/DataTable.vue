<template>
  <v-container>
    <v-card>
      <v-card-title background-color="#343a40">
        <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="worlds" :search="search" dark></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "DataTable",
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
      ]
    };
  },
  props: ["worlds"]
};
</script>
