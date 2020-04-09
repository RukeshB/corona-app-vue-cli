<template>
  <v-app-bar app color="#272727ed">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../assets/free-corona-virus-icon-3133-thumb.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Coronoya"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="../assets/coronoa.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <router-link to="/" class="route">Home</router-link>

    <router-link to="/introduction" class="route">Introduction</router-link>

    <router-link to="/myths" class="route">Myths</router-link>

    <router-link to="/world" class="route">Statistics</router-link>

    <router-link to="/news" class="route">News</router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      activeBtn: 1
    };
  }
};
</script>

<style scoped>
.nav-bar {
  max-height: 5vw;
}
.nav-content {
  margin: auto;
  width: auto;
  padding: 0;
}
.route {
  text-decoration: none;
  padding: 1vw;
  font-size: 1.5vw;
}
.route:hover,
.route:active {
  color: white;
}
</style>