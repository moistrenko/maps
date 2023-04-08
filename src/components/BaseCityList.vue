<template>
  <ul class="cities-list" v-if="cities.length">
    <li v-for="city in cities" :key="city.place_id">
      <a href="#" @click.prevent="changeMap(city)">{{ city.display_name }}</a>
    </li>
  </ul>
  <div v-else>Список городов пуст</div>
</template>

<script>
export default {
  props: {
    cities: {
      type: Array,
    },
  },
  methods: {
    changeMap(city) {
      this.$emit("changeMap", city);
    },
  },
};
</script>
