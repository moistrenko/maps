<template>
  <div class="home">
    <base-input type="text" placeholder="Search" v-model="search" />
    <div class="maps-wrapper">
      <base-city-list :cities="cities" @changeMap="changeMap" />
      <base-maps :currentCity="currentCity" />
    </div>
  </div>
</template>

<script>
import BaseMaps from "@/components/BaseMaps.vue";
import BaseCityList from "@/components/BaseCityList.vue";
import BaseInput from "@/components/BaseInput.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    BaseMaps,
    BaseCityList,
    BaseInput,
  },
  data() {
    return {
      search: "",
      cities: [],
      currentCity: [55.7504461, 37.6174943],
    };
  },
  methods: {
    getCities() {
      axios(
        `https://nominatim.openstreetmap.org/search?q=${this.search}&format=json`
      ).then((res) => {
        this.cities = res.data;
      });
    },
    changeMap(city) {
      this.currentCity = [city.lat, city.lon];
    },
  },
  watch: {
    search(city) {
      this.getCities(city);
    },
  },
};
</script>

<style>
.maps-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 40px;
}
.cities-list li {
  text-align: left;
}
a {
  color: black;
}
</style>
