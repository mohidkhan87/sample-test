<template>
  <div>
    <label :for="label">{{ label }}</label>
    <select :id="label" @change="onChange($event)" v-model="country">
      <option v-for="(option, index) in options" :key="index">
        {{ option.country_name }}
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
    currentCountry: {
      type: String,
      default: () => ''
    }
  },
  data(){
    return {
      country:this.currentCountry
    }
  },
  methods: {
    onChange(event){
      this.$emit('changeCountry', event.target.value)
    }
  }
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
  height: 35px;
  outline: none;
}
</style>
