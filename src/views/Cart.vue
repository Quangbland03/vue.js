<template>
  <div class="bg-gray-100">
    <div class="container mx-auto mt-8">
      <div class="bg-white p-8 rounded shadow">
        <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
        <!-- Cart Items -->
        <table class="w-full border-collapse">
          <thead>
            <tr class="">
              <th class="py-2 text-left">Stt</th>
              <th class="py-2 text-left">Image</th>
              <th class="py-2 text-left">Product Code</th>
              <th class="py-2 text-left">Price</th>
              <th class="py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cart" :key="index" class="border-b" :id="'productRow_'+ item.id" >
              <td class="py-2">{{ index + 1 }}</td>
              <td class="py-2">
                <img
                  :src="item.image"
                  alt="Product Image"
                  class="w-16 h-16 object-cover rounded"
                />
              </td>
              <td class="py-2">
                <p class="text-gray-500 text-sm">{{ item.msp }}</p>
              </td>
              <td class="py-2">
                <p class="text-gray-800">{{ item.price }}$</p>
              </td>
              <td class="py-2">

                <button
                  @click="removeCart(item.id)"
                  class="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Total -->
        <div class="mt-4">
          <p class="text-xl font-semibold">Total: $400.000</p>
        </div>

        <!-- Checkout Button -->
        <div class="mt-8">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Cart",
  data() {
    return {
      cart: {},

    };
  },
  created() {
    this.fetchCart();
  },
  methods: {
    fetchCart() {
      axios
        .get("http://127.0.0.1:8000/api/getCart")
        .then((response) => {
          this.cart = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.error("Error loading cart data: " + error);
        });
    },
    removeCart(id) {
      axios
        .delete(`http://127.0.0.1:8000/api/removeCart/${id}`)
        .then((response) => {
          const deletedProductRow = document.getElementById(`productRow_${id}`);
          if (deletedProductRow) {
            deletedProductRow.remove();
          }
          console.log(response);
        })
        .catch((error) => {
          console.error("Lỗi khi tải dữ liệu sản phẩm: " + error);
        });
    },
  },
};
</script>
