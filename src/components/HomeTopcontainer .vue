<template>
  <div class="top-content">
    <v-container fill-height fluid>
      <v-row align="center">
        <v-col>
          <v-row justify="center">
            <h1>Know More About Corona Virus</h1>
          </v-row>
          <v-row justify="center">
            <!-- <a class="button" href="Introduction.vue">Click Here</a> -->
            <router-link to="/introduction" class="button">Click Here</router-link>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomeTopcontainer"
};
</script>

<style scoped>
.top-content {
  margin-top: -10vh;
  background-image: url("../assets/corona.jpg");
  /* position: relative; */
  background-position: center;
  background-size: cover;
  height: 100vh;
  /* background-repeat: no-repeat; */
}
.top-content h1 {
  color: white;
  font-size: 3vw;
}

.button {
  text-decoration: none;
  color: white;
  border: solid white 2px;
  padding: 20px 50px 20px 50px;
}
.button:hover {
  background-color: #17a2b8b3;
  border: solid #17a2b8b3 2px;
  color: white;
}
</style>
