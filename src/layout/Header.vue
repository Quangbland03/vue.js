<template>
  <div class="header">
    
    <div class="flex items-center my-2 justify-end mr-4 text-sm font-bold">
      <router-link class="flex items-center rounded-2xl  p-2 justify-center" to="cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-red-500 ml-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <p class="text-slate-400 pr-[12px]">Cart</p>
      </router-link>
      
      <p class="mr-2" v-if="this.token">Hi: {{ currentUser.name }}</p>
      <router-link
        class="bg-red-500 p-2 mx-4 text-white px-4 rounded-2xl hover:bg-red-700"
        v-if="this.token"
        @click="logout"
        to="/logout"
        >Logout</router-link
      >
      <router-link
        class="bg-blue-500 p-2 mx-4 text-white px-4 rounded-2xl hover:bg-blue-700"
        v-if="this.token == null"
        to="/register"
        >Register</router-link
      >
      <router-link
        class="bg-red-500 p-2 mx-4 text-white px-4 hover:bg-red-700"
        v-if="this.token == null"
        to="/login"
        >Login</router-link
      >
    </div>
    <header
      class="h-[103px] bg-[#197cd8] mt-4 flex items-center justify-around"
    >
      <div>
        <a
          href="
        "
          ><img
            src="http://www.maufree.vn/profiles/maufreevn/uploads/attach/1502424953_logo.png"
            alt="logo"
        /></a>
      </div>
      <div>
        <router-link
          class="px-4 py-10 bg-[#0766bd] text-white text-[14px] font-bold italic uppercase border-1 border-[#a0c1e0] transition ease-in-out duration-200"
          to="/home"
          >Trang Chủ</router-link
        >

        <router-link
          class="px-4 py-10 hover:bg-[#0766bd] text-white text-[14px] font-bold italic uppercase border-1 border-[#a0c1e0] transition ease-in-out duration-200"
          to="/gioithieu"
          >Giới thiệu</router-link
        >

        <router-link
          class="px-4 py-10 hover:bg-[#0766bd] text-white text-[14px] font-bold italic uppercase border-1 border-[#a0c1e0] transition ease-in-out duration-200"
          to="/STL"
          >STL File & 3d</router-link
        >

        <router-link
          class="px-4 py-10 hover:bg-[#0766bd] text-white text-[14px] font-bold italic uppercase border-1 border-[#a0c1e0] transition ease-in-out duration-200"
          to="/"
          >Jewlry 3d models</router-link
        >

        <router-link
          class="px-4 py-10 hover:bg-[#0766bd] text-white text-[14px] font-bold italic uppercase border-1 border-[#a0c1e0] transition ease-in-out duration-200"
          to="/"
          >Hướng dẫn kỹ thuật</router-link
        >
      </div>
    </header>
    <div class="flex items-center justify-center">
      <input
        type="text"
        class="rounded-md w-[95%] border-none outline-none text-sm h-[30px] border-transparent"
        placeholder="Nhập từ khóa tìm kiếm..."
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 text-red-600"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  </div>
  <div>
    <img
      class="w-full"
      src="http://www.maufree.vn/profiles/maufreevn/uploads/attach/1688616070_banner-lk.png"
      alt=""
    />
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      currentUser: {},
      token: localStorage.getItem("token"),
    };
  },
  methods: {
    logout() {
      if (this.token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;

        axios
          .get("http://127.0.0.1:8000/api/logout")
          .then((response) => {
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
            this.$router.push({ name: "login" });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
  mounted() {
    if (this.token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;

      axios
        .get("http://127.0.0.1:8000/api/user")
        .then((response) => {
          this.currentUser = response.data.user;
          localStorage.setItem("user_id", response.data.user.id);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
};
</script>
