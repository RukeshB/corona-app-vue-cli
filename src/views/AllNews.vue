<template>
  <div>
    <News v-bind:newses="newses" />
  </div>
</template>

<script>
import axios from "axios";
import News from "../components/News.vue";

export default {
  name: "AllNews",
  components: {
    News
  },
  data() {
    return {
      newses: []
    };
  },
  created() {
    axios
      .get("https://nepalcorona.info/api/v1/news")
      .then(res => {
        this.newses = res.data.data;
        console.log(this.newses);
      })
      .catch(error => console.log(error));
  }
};
</script>

