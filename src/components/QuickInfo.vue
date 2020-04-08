<template>
  <v-container>
    <v-combobox
      v-model="select"
      :items="country"
      label="Country"
      outlined
      dense
      v-on:change="$emit('change', select)"
    ></v-combobox>
    <v-row class="center">
      <v-col v-bind:key="single.id" v-for="single in single" cols="6" class="content">
        <h1>{{single.country}} Update</h1>
        <v-row>
          <v-col cols="6">
            <h3>{{single.totalCases}}</h3>
            <p>Total Positive Case</p>
          </v-col>
          <v-col cols="6">
            <h3>{{single.newCases}}</h3>
            <p>Today's Positive Case</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <h3>{{single.totalRecovered}}</h3>
            <p>Recovered</p>
          </v-col>
          <v-col cols="6">
            <h3>{{single.activeCases}}</h3>
            <p>Isolation</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <h3>{{single.totalDeaths}}</h3>
            <p>Total Deaths</p>
          </v-col>
          <v-col cols="6">
            <h3>{{single.newDeaths}}</h3>
            <p>Today's Deaths</p>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-bind:key="world.id" v-for="world in world" cols="6" class="content">
        <h1>{{world.country}} Update</h1>
        <v-row>
          <v-col cols="6">
            <h3>{{world.totalCases}}</h3>
            <p>Total Positive Case</p>
          </v-col>
          <v-col cols="6">
            <h3>{{world.newCases}}</h3>
            <p>Today's Positive Case</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <h3>{{world.totalRecovered}}</h3>
            <p>Recovered</p>
          </v-col>
          <v-col cols="6">
            <h3>{{world.activeCases}}</h3>
            <p>Isolation</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <h3>{{world.totalDeaths}}</h3>
            <p>Total Deaths</p>
          </v-col>
          <v-col cols="6">
            <h3>{{world.newDeaths}}</h3>
            <p>Today's Deaths</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "QuickInfo",
  data() {
    return {
      select: "Nepal"
    };
  },
  props: ["world", "single", "country"]
};
</script>

<style scoped>
.center {
  text-align: center;
}
.content {
  background-color: #272727;
  color: white;
  border: solid white 2vw;
  border-top: none;
  border-bottom: none;
  min-width: 400px;
}

.content h1 {
  border-bottom: solid white 2px;
  color: #1697f6;
}
</style>