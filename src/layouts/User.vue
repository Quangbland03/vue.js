<template>
  <div class="header">
    <div class="flex items-center my-2 justify-end mr-4 text-sm font-bold">
      <router-link
        class="flex items-center rounded-2xl p-2 justify-center"
        to="cart"
      >
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
        class="bg-[#9a772c] p-2 mx-4 text-white px-4 rounded-2xl hover:bg-blue-700"
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
      class="h-[103px] bg-[#efa707] mt-4 flex items-center justify-around"
    >
      <div>
        <a
          href="
        "
          ><img
            src="https://theme.hstatic.net/200000326645/1000824936/14/logo.png?v=260"
            alt="logo"
        /></a>
      </div>
      <div>
        <router-link
          class="px-4 py-10 bg-[#9a772c] text-white text-[14px] font-bold italic uppercase border-1 border-[#a0c1e0] transition ease-in-out duration-200"
          to="/home"
          >Trang Chủ</router-link
        >

        <router-link
          class="px-4 py-10 hover:bg-[#9a772c] text-white text-[14px] font-bold italic uppercase border-1 border-[#a0c1e0] transition ease-in-out duration-200"
          to="/gioithieu"
          >Giới thiệu</router-link
        >

        <router-link
          class="px-4 py-10 hover:bg-[#9a772c] text-white text-[14px] font-bold italic uppercase border-1 border-[#a0c1e0] transition ease-in-out duration-200"
          to="/STL"
          >STL File & 3d</router-link
        >

        <router-link
          class="px-4 py-10 hover:bg-[#9a772c] text-white text-[14px] font-bold italic uppercase border-1 border-[#a0c1e0] transition ease-in-out duration-200"
          to="/"
          >Jewlry 3d models</router-link
        >

        <router-link
          class="px-4 py-10 hover:bg-[#9a772c] text-white text-[14px] font-bold italic uppercase border-1 border-[#a0c1e0] transition ease-in-out duration-200"
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
  <!-- slide -->
  <div>
    <img src="https://theme.hstatic.net/200000326645/1000824936/14/slideshow_1.jpg?v=260" alt="">
  </div>

  <router-view />
  <div>
    <img
      class="w-full"
      src="https://file.hstatic.net/1000202622/file/2_footer-website-1_8f8c151515d24bd7a99d78c3d3bd20c8.png"
      alt=""
    />
  </div>
  <footer class="px-3 pt-4 lg:px-9 border-t-2 bg-gray-50">
    <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

        <div class="sm:col-span-2">
            <a href="#" class="inline-flex items-center">
                <img src="https://mcqmate.com/public/images/logos/60x60.png" alt="logo" class="h-8 w-8">
                <span class="ml-2 text-xl font-bold tracking-wide text-gray-800">MykingDom</span>
            </a>
            <div class="mt-6 lg:max-w-xl">
                <p class="text-sm text-gray-800">
                  ToyWeb is an online playground where creativity meets fun! Explore a vibrant world of educational and entertaining toys for children. From mind-stimulating educational games to imaginative play essentials, ToyWeb offers a diverse range of products from trusted brands. We are committed to providing families with a safe and convenient online shopping experience, assisting parents in finding quality toys that contribute to comprehensive child development. 
                    </p>
            </div>
        </div>

        <div class="flex flex-col gap-2 text-sm">
            <p class="text-base font-bold tracking-wide text-gray-900">Popular Courses</p>
            <a href="#">UPSC - Union Public Service Commission</a>
            <a href="#">General Knowledge</a>
            <a href="#">MBA</a>
            <p class="text-base font-bold tracking-wide text-gray-900">Popular Topics</p>
            <a href="#">Human Resource Management</a>
            <a href="#">Operations Management</a>
            <a href="#">Marketing Management</a>
        </div>

        <div>
            <p class="text-base font-bold tracking-wide text-gray-900">COMPANY IS ALSO AVAILABLE ON</p>
            <div class="flex items-center gap-1 px-2">
                <a href="#" class="w-full min-w-xl">
                    <img src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button"
                        class="h-10">
                </a>
                <a class="w-full min-w-xl" href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA">
                    <img src="https://mcqmate.com/public/images/icons/youtube.svg" alt="Youtube Button"
                        class="h-28">
                </a>
            </div>
            <p class="text-base font-bold tracking-wide text-gray-900">Contacts</p>
            <div class="flex">
                <p class="mr-1 text-gray-800">Email:</p>
                <a href="#" title="send email">quangnvgch211372@company.com</a>
            </div>
        </div>

    </div>

    <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p class="text-sm text-gray-600">© Copyright 2023 quangnvgch211372@company. All rights reserved.</p>
        <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
                <a href="#"
                    class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                    &amp; Cookies Policy
                </a>
            </li>
            <li>
                <a href="#"
                    class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                </a>
            </li>
        </ul>
    </div>

</footer>
 
</template>
<script>

</script>
