<template>
  <v-app>
    <v-bottom-navigation :value="activeBtn" background-color="#272727">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/free-corona-virus-icon-3133-thumb.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Coronoya"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/coronoa.png"
          width="100"
        />

        <v-spacer></v-spacer>

        <v-btn>
          <span>
            <router-link to="/">Home</router-link>
          </span>
        </v-btn>
        <v-btn>
          <router-link to="/news">News</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/about">About</router-link>
        </v-btn>
      </div>
    </v-bottom-navigation>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      activeBtn: 1
    };
  }
};
</script>
