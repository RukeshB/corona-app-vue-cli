<template>
  <div class="home">
    <DataTable v-bind:worlds="worlds" />
  </div>
</template>

<script>
// @ is an alias to /src
import DataTable from "@/components/DataTable.vue";
import axios from "axios";

export default {
  name: "WorldData",
  components: {
    DataTable
  },
  data() {
    return {
      worlds: []
    };
  },
  created() {
    axios
      .get("https://nepalcorona.info/api/v1/data/world")
      .then(res => {
        this.worlds = res.data;
        this.worlds = this.worlds.filter(world => world.country != "");
      })
      .catch(error => console.log(error));
  }
};
</script>
