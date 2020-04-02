<template>
  <div class="hello">
    <h1>Home</h1>
    <table
      id="dtBasicExample"
      class="table table-striped table-bordered table-sm"
      cellspacing="0"
      width="100%"
    >
      <thead>
        <tr>
          <th class="th-sm">Country</th>
          <th class="th-sm">Total Case</th>
          <th class="th-sm">New Case</th>
          <th class="th-sm">Total Death</th>
          <th class="th-sm">New Daath</th>
          <th class="th-sm">Active Cases</th>
          <th class="th-sm">Total Recovered</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="world.id" v-for="world in worlds">
          <td>{{world.country}}</td>
          <td>{{world.totalCases}}</td>
          <td>{{world.newCases}}</td>
          <td>{{world.totalDeaths}}</td>
          <td>{{world.newDeaths}}</td>
          <td>{{world.activeCases}}</td>
          <td>{{world.totalRecovered}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Country</th>
          <th>Total Case</th>
          <th>New Case</th>
          <th>Total Death</th>
          <th>New Daath</th>
          <th>Active Cases</th>
          <th>Total Recovered</th>
        </tr>
      </tfoot>
    </table>
    <Vue-Tabulator v-model="dados" :options="options" />
  </div>
</template>
<script src="../assets/pagination.js"></script>
<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
