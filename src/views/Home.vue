<template>
  <div class="home">
    <HomeTopcontainer />

    <h1>Statistics</h1>
    <QuickInfo
      v-bind:world="world"
      v-bind:single="single"
      v-bind:country="country"
      v-on:change="change"
    />
    <h1>Nepal News</h1>
    <News v-bind:newses="newses" />
    <router-link to="/news">View More</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import QuickInfo from "@/components/QuickInfo.vue";
import HomeTopcontainer from "../components/HomeTopcontainer .vue";
import News from "../components/News.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    QuickInfo,
    HomeTopcontainer,
    News
  },
  data() {
    return {
      worlds: [],
      world: [],
      single: [],
      country: [],
      newses: []
    };
  },
  methods: {
    change(select) {
      this.world = this.worlds.filter(world => world.country == "World");
      this.single = this.worlds.filter(single => single.country == select);
    }
  },
  created() {
    axios
      .get("https://nepalcorona.info/api/v1/data/world")
      .then(res => {
        this.worlds = res.data;
        this.world = this.worlds.filter(world => world.country == "World");
        this.single = this.worlds.filter(single => single.country == "Nepal");
        this.worlds.forEach(world => {
          if (world.country != "" && world.country != "World")
            this.country.push(world.country);
        });
        axios
          .get("https://nepalcorona.info/api/v1/news?limit=4")
          .then(res =>
            (this.newses = res.data.data).catch(error => console.log(error))
          );
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
* {
  text-align: center;
}
h1 {
  margin-top: 5vh;
  text-decoration: underline;
}
</style>