<template>
  <v-container>
    <v-row justify="center">
      <h1>Introduction</h1>
      <p>
        <v-img src="../assets/corona.jpg" class="leftimg" style="width:700px;height:400px;" />Coronaviruses are a group of related viruses that cause diseases in mammals and birds.
        In humans, coronaviruses cause respiratory tract infections that can be mild,
        such as some cases of the common cold (among other possible causes, predominantly rhinoviruses),
        and others that can be lethal, such as SARS, MERS, and COVID-19. Symptoms in other species vary:
        in chickens, they cause an upper respiratory tract disease, while in cows and pigs they cause diarrhea.
        There are yet to be vaccines or antiviral drugs to prevent or treat human coronavirus infections.
        <br />Coronaviruses constitute the subfamily Orthocoronavirinae, in the family Coronaviridae,
        order Nidovirales, and realm Riboviria. They are enveloped viruses with a positive-sense
        single-stranded RNA genome and a nucleocapsid of helical symmetry. The genome size of coronaviruses
        ranges from approximately 27 to 34 kilobases, the largest among known RNA viruses. The name
        coronavirus is derived from the Latin corona, meaning "crown" or "halo", which refers to the
        characteristic appearance reminiscent of a solar corona around the virions (virus particles) when
        viewed under two-dimensional transmission electron microscopy, due to the surface being covered in
        club-shaped protein spikes.
      </p>
    </v-row>
    <v-row>
      <h1>What are the symptoms this coronavirus causes?</h1>
      <p>
        According to the WHO, the most common symptoms of Covid-19 are fever, tiredness and a dry cough.
        Some patients may also have a runny nose, sore throat, nasal congestion and aches and pains or
        diarrhoea. Some people report losing their sense of taste and/or smell. About 80% of people who
        get Covid-19 experience a mild case – about as serious as a regular cold – and recover without
        needing any special treatment.
      </p>
      <p>
        About one in six people, the WHO says, become seriously ill. The elderly and people with underlying
        medical problems such as high blood pressure, heart problems or diabetes, or chronic respiratory
        conditions, are at a greater risk of serious illness from Covid-19.
      </p>
      <p>
        In the UK, the National Health Service (NHS) has identified the specific symptoms to look for as
        experiencing either:
      </p>
      <ul>
        <li>A high temperature – you feel hot to touch on your chest or back.</li>
        <li>A new continuous cough – this means you have started coughing repeatedly.</li>
      </ul>
      <p>
        As this is viral pneumonia, antibiotics are of no use. The antiviral drugs we have against flu will not
        work, and there is currently no vaccine. Recovery depends on the strength of the immune system.
      </p>
    </v-row>
    <v-row>
      <h1>Basic protective measures against the new coronavirus</h1>
      <p>
        <img src="../assets/Hand+wash1.png" class="rigntimg" />
        <b>Wash your hands frequently</b>
        <br />Regularly and thoroughly clean your hands with an alcohol-based
        hand rub or wash them with soap and water.
        <br />
        <b>Why?</b> Washing your hands with soap and water or using
        alcohol-based hand rub kills viruses that may be on your hands.
        <br />
        <br />
        <b>Maintain social distancing</b>
        <br />Maintain at least 1 metre (3 feet) distance between yourself and
        anyone who is coughing or sneezing.
        <br />
        <b>Why?</b> When someone coughs or sneezes they spray small liquid
        droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the
        droplets, including the COVID-19 virus if the person coughing has the disease.
        <br />
        <br />
        <b>Avoid touching eyes, nose and mouth</b>
        <br />
        <b>Why?</b> Hands touch many surfaces and can pick up
        viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the
        virus can enter your body and can make you sick.
        <br />
        <br />
        <b>Practice respiratory hygiene</b>
        <br />Make sure you, and the people around you, follow good respiratory
        hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze.
        Then dispose of the used tissue immediately.
        <br />
        <b>Why?</b> Droplets spread virus. By following good respiratory
        hygiene you protect the people around you from viruses such as cold, flu and COVID-19.
        <br />
        <br />
        <b>If you have fever, cough and difficulty breathing, seek medical care early</b>
        <br />Stay home if you feel
        unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow
        the directions of your local health authority.
        <br />
        <b>Why?</b> National and local authorities will have the
        most up to date information on the situation in your area. Calling in advance will allow your health care
        provider to quickly direct you to the right health facility. This will also protect you and help prevent
        spread of viruses and other infections.
      </p>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Introduction"
};
</script>

<style scoped>
.rigntimg {
  float: right;
  position: relative;
}
.leftimg {
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}
h1 {
  text-align: center;
}
</style>