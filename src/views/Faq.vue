<template>
  <v-container>
    <v-row v-for="(faq, index) in faq" :key="index" justify="center">
      <v-col>
        <div class="summery">
          <h3>
            {{faq.question}}
            <br />
            ( {{faq.question_np}} )
          </h3>
          <p>
            {{faq.answer}}
            <br />
            ( {{faq.answer_np}} )
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Faq",
  data() {
    return {
      faq: []
    };
  },
  created() {
    axios
      .get("https://nepalcorona.info/api/v1/faqs")
      .then(res => {
        this.faq = res.data.data;
        console.log(res.data.data);
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
.myth_container {
  min-width: 400px;
  color: black;
}
.myth_container a {
  text-decoration: none;
}
</style>