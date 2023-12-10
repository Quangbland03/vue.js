<template>
  <p class="text-xl text-blue-500 font-bold m-6">Cateogory: Dạ triện</p>
  <input
    type="text" 
    class="border-none outline-0 ml-4 mb-3 w-full"
    v-model="searchText"
    placeholder="Search here..."
  />
  <div class="grid grid-cols-12 mx-6 gap-6">
    <div class="col-span-9 gap-6">
      <div class="grid grid-cols-3 gap-3">
        <!-- product -->
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="border-2 py-3"
        >
          <img :src="product.image" alt="" />
          <div class="flex items-center justify-between mx-4">
            <p class="text-orange-500 font-medium">Mã số: {{ product.msp }}</p>
            <p class="text-red-500 font-medium">Price: {{ product.price }}</p>
          </div>
          <p class="mx-4">{{ product.description }}</p>
          <div class="flex items-center justify-between gap-6 mt-4 mx-4">
            <router-link
              :to="'/detail/' + product.id"
              class="bg-blue-400 p-2 rounded-md text-white font-medium hover:bg-blue-700 uppercase text-sm"
              >Show detail</router-link
            >
            <button
              class="bg-green-500 p-2 rounded-md text-white font-medium hover-bg-green-700 uppercase text-sm flex items-center justify-center gap-2"
            >
              <p>Add Cart</p>
            </button>
          </div>
        </div>

        <!-- product -->
      </div>
      <div class="pagination-container">
        <nav class="flex items-center justify-center" aria-label="Pagination">
          <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a
                class="page-link text-gray-500 hover:text-gray-700"
                @click="fetchPage(currentPage - 1)"
                tabindex="-1"
                >Previous</a
              >
            </li>

            <li
              v-for="page in totalPages"
              :key="page"
              class="page-item"
              :class="{ active: currentPage === page }"
            >
              <a
                class="page-link bg-blue-500 hover:bg-blue-700 text-white"
                @click="fetchPage(page)"
                >{{ page }}</a
              >
            </li>

            <li
              class="page-item"
              :class="{ disabled: currentPage === totalPages }"
            >
              <a
                class="page-link text-gray-500 hover:text-gray-700"
                @click="fetchPage(currentPage + 1)"
                >Next</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="col-span-3 border-2 p-4 shadow-xl">
      <p class="uppercase text-blue-500 font-bold mb-2">Danh mục mẫu</p>
      <div class="p-2 text-sm">
        <p class="uppercase">Mẫu nhà cổ</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Cuốn thư</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Hoàng phi</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Câu đối</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Đại tự</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Tứ quý</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Sen trần</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Mẫu nhà cổ</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Khung</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Cuốn lịch</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Cnc khác</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Mãu cnc 3d</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Mẫu đuc siêu cấp</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Mân trần</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Cột đứng</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Phào chỉ</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Mân đào</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Phật giáo</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">TỨ linh</p>
        <hr class="mt-2" />
      </div>
      <div class="p-2 text-sm">
        <p class="uppercase">Cửa phào</p>
        <hr class="mt-2" />
      </div>
    </div>
  </div>

  <Home />
</template>
<script>
import axios from "axios";
import Home from "./Home.vue";

export default {
  name: "DaTrien",
  components: {
    Home,
  },
  data() {
    return {
      products: [],
      currentPage: 1,
      totalPages: 1,
      searchText: "",
    };
  },
  methods: {
    fetchPage(page) {
      axios
        .get(`http://127.0.0.1:8000/api/getProduct?page=${page}`)
        .then((response) => {
          this.products = response.data.data;
          this.currentPage = response.data.pagination.current_page;
          this.totalPages = response.data.pagination.last_page;
        })
        .catch((error) => {
          console.error("Lỗi khi tải dữ liệu sản phẩm: " + error);
        });
    },
  },
  created() {
    this.fetchPage(this.currentPage);
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        return product.msp
          .toLowerCase()
          .includes(this.searchText.toLowerCase());
      });
    },
  },
};
</script>
<style>
.disabled {
  display: none;
}
.active {
  background: blue;
}
.pagination-container {
  margin-top: 20px;
}

.pagination {
  display: flex;
  list-style: none;
  padding: 0;
}

.page-item {
  margin: 0 5px;
}

.page-link {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.page-link:hover {
  background-color: #f1f1f1;
}

.disabled .page-link {
  cursor: not-allowed;
}

.active .page-link {
  background: blue;
  color: white;
}
</style>
