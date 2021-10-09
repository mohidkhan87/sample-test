<template>
  <div>
    <label :for="label">{{ label }}</label>
    <select :id="label" multiple @change="onChange" v-model="cities">
      <option v-for="(option, index) in options" :key="index">
        {{ option.city_name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => "",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data(){
    return {
      cities: []
    }
  },
  methods: {
    onChange() {
      this.$emit("changeCities", this.cities);
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  font-size: 14px;
  width: 100%;
  display: block;
}
select {
  background: #283046;
  color: #d0d2d6;
  margin-top: 8px;
  width: 100%;
  height: 100px;
  outline: none;
}
</style>
