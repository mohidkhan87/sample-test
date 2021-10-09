<template>
  <div>
    <label :for="label">{{ label }}</label>
    <select :id="label" @change="onChange($event)" v-model="state">
      <option v-for="(option, index) in options" :key="index">
        {{ option.state_name }}
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
    currentState: {
      type: String,
      default: () => ''
    }
  },
  data(){
    return {
      state:this.currentState
    }
  },
  methods: {
    onChange(event){
      this.$emit('changeState', event.target.value)
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
