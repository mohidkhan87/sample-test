// axios
import axios from "axios";
// import Vue from "vue";

const service = axios.create({
  baseURL: 'https://www.universal-tutorial.com/api/',
  headers:{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtb2hpZGtoYW44N0BnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiIzR3RSM0hnQi04U2ZyblAzV1NnbmtWQTROaWhURl9FRDNnWnNmQmtQN25waFR2cnRsczNZdEhhczBPRFdIZDhjTlN3In0sImV4cCI6MTYzMzg2NDg1N30.WZZxnvKGbmvG0Sx5bGdi-apzQav1hZSoLmk-CNxexdQ",
    "Accept": "application/json"
  }
});

service.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = token;
    // }
    return config;
  },
  (error) => {
    // Vue.notify({
    //   group: "api-msg",
    //   title: "Error",
    //   text: error.response.data.message,
    //   type: "error",
    // });
    return Promise.reject(error);
  }
);

// Add a response interceptor
service.interceptors.response.use(
  (res) => {
    // if (res.data.data && res.data.data.token) {
    //   const { token } = res.data.data;
    //   localStorage.setItem("token", token);
    // }
    return res;
  },
  (error) => {
    // const status = error.response.status;
    // if (status === 401) {
    //   localStorage.removeItem("token");
    //   window.location.href = "/login";
    // }
    // // removing the loader is exist
    // const appLoading = document.getElementById("loading-bg");
    // if (appLoading) {
    //   appLoading.style.display = "none";
    // }
    // const data = error.response.data.data;
    // if (data.constructor === Object && Object.entries(data).length > 0) {
    //   for (const key in error.response.data.data) {
    //     const element = error.response.data.data[key];
    //     element.forEach((text) => {
    //       Vue.notify({
    //         group: "api-msg",
    //         title: `${key} validation error`,
    //         text,
    //         type: "error",
    //       });
    //     });
    //   }
    // } else {
    //   Vue.notify({
    //     group: "api-msg",
    //     title: "Error",
    //     text: error.response.data.message,
    //     type: "error",
    //   });
    // }
    return Promise.reject(error);
  }
);

export default service;
