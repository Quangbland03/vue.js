<template>
  <div class="min-h-screen flex items-center justify-center">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
      <div class="flex justify-center items-center">
        <img
          src="http://www.maufree.vn/profiles/maufreevn/uploads/attach/1502424953_logo.png"
          class="bg-blue-600 rounded-full p-[2px] mb-2 w-[120px]"
          alt=""
        />
      </div>
      <h1 class="text-center font-bold mb-2 text-slate-600 text-[25px]">
        Login account
      </h1>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Nhập địa chỉ email"
        />
        <p
          v-if="error.email"
          class="bg-red-600 rounded-xl p-1 font-medium text-white"
        >
          {{ error.email }}
        </p>
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Mật khẩu
        </label>
        <input
          v-model="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Nhập mật khẩu"
        />
        <p
          v-if="error.password"
          class="bg-red-600 rounded-xl p-1 font-medium text-white"
        >
          {{ error.password }}
        </p>
      </div>

      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="submitForm"
        >
          Đăng nhập
        </button>
        <router-link to="register" class="underline font-medium text-blue-400"
          >don't have a account</router-link
        >
      </div>
      <div class="flex items-center justify-center mt-2">
        <router-link class="text-center text-slate-500 underline" to="/home"
          >Back to home</router-link
        >
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: {},
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://127.0.0.1:8000/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
  },
};
</script>
