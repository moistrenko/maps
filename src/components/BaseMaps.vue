<template>
  <l-map class="map" :zoom="zoom" :center="currentCity">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker :lat-lng="currentCity"></l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  props: {
    currentCity: {
      require: false,
      type: Array,
      default() {
        return [55.7504461, 37.6174943];
      },
    },
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        "&copy; <a target='_blank' href='http://osm.org/copyright'>OpenStreetMap</a> contributors",
      zoom: 15,
    };
  },
};
</script>

<style scoped>
.map {
  width: 50%;
  height: 300px;
  flex-shrink: 0;
}
</style>
