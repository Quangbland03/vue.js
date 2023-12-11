<template>
    <div>
        <div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex">
      <h1 class="text-3xl">Users</h1>
    </div>
    <div class="px-3 py-4 flex justify-center">
      <table class="w-full text-md bg-white shadow-md rounded mb-4">
        <tbody>
          <tr class="border-b">
            <th class="text-left py-3">Name</th>
            <th class="text-left py-3">Description</th>
            <th class="text-left py-3">Price</th>
            <th class="text-left py-3">Category</th>
            <th class="text-left py-3">Image</th>
            <th class="text-left py-3">Action</th>
            <th></th>
          </tr>
          <tr class="border-b hover:bg-orange-100 bg-gray-100">
            <td class="py-3">
              <input
                type="text"
                value="user.name"
                class="bg-transparent border-b-2 border-gray-300 py-2 outline-none"
              />
            </td>
            <td class="py-3">
              <input
                type="text"
                value="user.email"
                class="bg-transparent border-b-2 border-gray-300 py-2 outline-none"
              />
            </td>
            <td class="py-3">
              <input
                type="text"
                value="user.email"
                class="bg-transparent border-b-2 border-gray-300 py-2 outline-none"
              />
            </td>
            <td class="py-3">
              <input
                type="text"
                value="user.email"
                class="bg-transparent border-b-2 border-gray-300 py-2 outline-none"
              />
            </td>
            <td class="py-3">
              <input
                type="text"
                value="user.email"
                class="bg-transparent border-b-2 border-gray-300 py-2 outline-none"
              />
            </td>

            <td class="py-3 flex justify-end">
              <button
                type="button"
                class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Save</button
              ><button
                type="button"
                class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
       
      </table>
      
    </div>
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
  
</template>
<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      products: [],
      currentPage: 1,
      totalPages: 1,
    };
  },
  methods: {
    fetchPage(page) {
      axios
        .get(`http://localhost:3000/productss?page=${page}`)
        .then((response) => {
          console.log(response);
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
