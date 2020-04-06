<template>
  <v-container>
    <v-row>
      <v-col v-for="(news, index) in newses" :key="index" cols="6" class="news_container">
        <a v-bind:href="news.url">
          <div class="image">
            <v-img v-bind:src="news.image_url" height="300px" />
          </div>

          <div class="summery">
            <h3>{{news.title}}</h3>
            <p>{{news.summary}}</p>
            <p>
              <b>Source:</b>
              {{news.source}}
            </p>
            <!-- <h3>{{index%2}}</h3> -->
          </div>
        </a>
      </v-col>
    </v-row>
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
      .get("https://nepalcorona.info/api/v1/news")
      .then(res => {
        this.newses = res.data.data;
        console.log(this.newses);
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
.news_container {
  min-width: 400px;
}
.news_container a {
  text-decoration: none;
}
.image {
  height: 350px;
}
</style>