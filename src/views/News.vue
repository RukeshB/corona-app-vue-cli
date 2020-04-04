<template>
  <v-container>
    <div v-for="news in newses" :key="news.id">
      <div class="col-5">
        <a v-bind:href="news.url">
          <v-img v-bind:src="news.image_url" contain min-width="400" width="400" />
          <h2>{{news.title}}</h2>
        </a>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "News",
  data() {
    return {
      newses: []
    };
  },
  created() {
    axios
      .get("https://nepalcorona.info/api/v1/news?limit=5")
      .then(res => {
        this.newses = res.data.data;
        console.log(this.newses);
      })
      .catch(error => console.log(error));
  }
};
</script>