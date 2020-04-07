<template>
  <v-container>
    <v-row class="center">
      <v-col v-bind:key="nepal.id" v-for="nepal in nepal" cols="6" class="content">
        <h1>{{nepal.country}} Update</h1>
        <v-row>
          <v-col cols="6">
            <h3>{{nepal.totalCases}}</h3>
            <p>Total Positive Case</p>
          </v-col>
          <v-col cols="6">
            <h3>{{nepal.newCases}}</h3>
            <p>Today's Positive Case</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <h3>{{nepal.totalRecovered}}</h3>
            <p>Recovered</p>
          </v-col>
          <v-col cols="6">
            <h3>{{nepal.activeCases}}</h3>
            <p>Isolation</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <h3>{{nepal.totalDeaths}}</h3>
            <p>Total Deaths</p>
          </v-col>
          <v-col cols="6">
            <h3>{{nepal.newDeaths}}</h3>
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
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "QuickInfo",
  data() {
    return {};
  },
  props: ["world", "nepal"]
};
</script>

<style scoped>
.center {
  text-align: center;
}
.content {
  background-color: #272727;
  color: white;
  border: solid white 10px;
}

.content h1 {
  border-bottom: solid white 2px;
  color: #1697f6;
}
</style>