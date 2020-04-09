<template>
  <v-container>
    <v-row justify="center">
      <v-col v-for="(myth, index) in myths" :key="index" class="myth_container">
        <a v-bind:href="myth.source_url">
          <div class="image">
            <img v-bind:src="myth.image_url" />
          </div>

          <!-- <div class="summery">
            <h3>{{myth.myth}}</h3>
            <p>{{myth.myth}}</p>
            <p>
              <b>Source:</b>
              {{myth.source_name}}
            </p>
          </div>-->
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "About",
  data() {
    return {
      myths: []
    };
  },
  created() {
    axios
      .get("https://nepalcorona.info/api/v1/myths")
      .then(res => {
        this.myths = res.data.data;
        console.log(res.data.data);
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
.myth_container {
  min-width: 400px;
}
.myth_container a {
  text-decoration: none;
}
.image img {
  height: 600px;
  width: 500px;
  padding-bottom: 30px;
  min-width: 400px;
}
</style>