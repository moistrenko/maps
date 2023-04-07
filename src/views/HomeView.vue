<template>
  <div class="home">
    <input type="text" v-model.lazy="search" placeholder="Search" />
    <div class="maps-wrapper">
      <ul class="sities-list" v-if="cities.length">
        <li v-for="city in cities" :key="city.place_id">
          <a href="#" @click.prevent="changeMap(city)">{{
            city.display_name
          }}</a>
        </li>
      </ul>
      <div v-else>Список городов пуст</div>
      <BaseMaps :currentCity="currentCity" />
    </div>
  </div>
</template>

<script>
import BaseMaps from "@/components/BaseMaps.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    BaseMaps,
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
.sities-list li {
  text-align: left;
}
a {
  color: black;
}
</style>
