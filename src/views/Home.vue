<template>
  <div class="home">
    <QuickInfo v-bind:world="world" v-bind:nepal="nepal" />
  </div>
</template>

<script>
// @ is an alias to /src
import QuickInfo from "@/components/QuickInfo.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    QuickInfo
  },
  data() {
    return {
      worlds: [],
      world: [],
      nepal: ""
    };
  },
  created() {
    axios
      .get("https://nepalcorona.info/api/v1/data/world")
      .then(res => {
        this.worlds = res.data;
        this.world = this.worlds.filter(world => world.country == "World");
        this.nepal = this.worlds.filter(nepal => nepal.country == "Nepal");
        console.log(this.world);
        console.log(this.nepal);
      })
      .catch(error => console.log(error));
  }
};
</script>
