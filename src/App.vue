<template>
  <div id="app">
    <div v-if="loading" class="loader"></div>
    <h2>Sample Testing</h2>
    <div class="card">
      <div>
        <CountryDropdown
          :label="'Country'"
          :currentCountry="currentCountry"
          :options="countryOptions"
          @changeCountry="changeCountry"
          :key="currentCountry"
        />
      </div>
      <div>
        <StateDropdown
          :label="'State'"
          :currentState="currentState"
          :options="stateOptions"
          @changeState="changeState"
          :key="currentState"
        />
      </div>
      <div>
        <CityDropdown
          :label="'City'"
          @changeCities="changeCities"
          :options="cityOption"
        />
      </div>
    </div>
    <h2>Number of selected cities: {{ count }}</h2>
  </div>
</template>

<script>
import CountryDropdown from "./components/CountryDropdown.vue";
import StateDropdown from "./components/StateDropdown.vue";
import CityDropdown from "./components/CityDropdown.vue";

export default {
  name: "App",
  components: {
    CountryDropdown,
    StateDropdown,
    CityDropdown,
  },
  data() {
    return {
      countryOptions: [],
      stateOptions: [],
      cityOption: [],
      currentCountry: "",
      currentState: "",
      count: 0,
      loading: false,
    };
  },
  methods: {
    async getCountries() {
      const resp = await this.axios.get("/countries/");
      this.countryOptions = resp.data;
      this.currentCountry = this.countryOptions[0].country_name;
    },
    async getStates() {
      const resp = await this.axios.get(`/states/${this.currentCountry}`);
      this.stateOptions = resp.data;
      this.currentState = this.stateOptions[0].state_name;
    },
    async getCities() {
      const resp = await this.axios.get(`/cities/${this.currentState}`);
      this.cityOption = resp.data;
    },
    async changeCountry(country) {
      const index = this.countryOptions.findIndex(
        (cont) => cont.country_name === country
      );
      this.currentCountry = this.countryOptions[index].country_name;
      this.loading = true;
      try {
        await this.getStates();
        this.getCities();
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
    async changeState(state) {
      const index = this.stateOptions.findIndex(
        (cont) => cont.state_name === state
      );
      this.currentState = this.stateOptions[index].state_name;
      this.loading = true;
      try {
        await this.getCities();
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
    changeCities(cities) {
      this.count = cities.length;
    },
  },
  async mounted() {
    this.loading = true;
    try {
      await this.getCountries();
      await this.getStates();
      await this.getCities();
      this.loading = false;
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  },
};
</script>

<style lang="scss">
#app {
  background: #161d31;
  h2 {
    width: 80%;
    margin: 10px auto;
    color: #d0d2d6;
    font-weight: 600;
  }
  .card {
    width: 80%;
    margin: 0 auto;
    background-color: #283046;
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 24%);
    border-radius: 0.428rem;
    color: #ffffff;
    display: flex;
    div {
      padding: 20px 10px;
      flex: 1;
      @media only screen and (max-width: 768px) {
        padding: 10px;
      }
    }
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  .loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 40%;
    top: 40%;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
