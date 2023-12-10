<template>
  <div class="grid grid-cols-12 mx-6 gap-6">
    <div class="col-span-9 gap-6">
      <img :src="productDetail.image" alt="" />
      <p class="font-bold text-lime-500 mt-2">Mã số: {{ productDetail.msp }}</p>
      <p class="font-bold text-red-400 mt-2">
        Price: {{ productDetail.price }}
      </p>
      <p class="mt-2">{{ productDetail.description }}</p>
      <button
        @click="addToCart"
        class="p-4 bg-blue-500 text-white text-2xl mt-2 font-bold w-full rounded-[40px] mb-6 shadow-xl"
      >
        Add to cart
      </button>
      <router-link
        to="/"
        class="p-2 bg-slate-400 text-white text-xl mt-2 font-bold w-full rounded-[40px] shadow-xl"
        >Back to Home</router-link
      >
      <div class="border-2 mt-4 p-4">
        <p class="text-blue-400 font-bold text-xl uppercase">
          Thông tin liên hệ
        </p>
        <p>
          Công ty TNHH tự động hóa Đông Phương Hà Nội <br />
          Website: CNC Đông Phương <br />
          Địa chỉ:
        </p>
        <p class="mt-1 text-base text-slate-500 font-bold mb-2">
          Website: CNC Đông Phương Địa chỉ: + Trụ sở chính: Phạm Kham, Lạc Hồng,
          <br />
          Văn Lâm, Hưng Yên + Nhà máy sản xuất: KCN Phố Nối A - Giai Phạm - Yên
          <br />
          Mỹ - Hưng Yên + Chi nhánh: Hố Nai 3, Biên Hòa, Đồng Nai<br />
        </p>
        <p class="text">TAGS:</p>
        <p
          class="p-2 bg-slate-200 border-2 w-[20%] rounded-md hover:bg-slate-400"
        >
          Mân trần mới 2023
        </p>
      </div>
      <div class="max-w-2xl mt-8">
        <h1 class="text-2xl font-bold mb-4">Comment Form</h1>

        <form action="#" method="post" class="bg-white p-6 rounded shadow-md">
          <div class="mb-4">
            <label
              for="comment"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Comment:</label
            >
            <textarea
              id="comment"
              name="comment"
              rows="4"
              class="w-full h-[70px] p-2 border rounded outline-0"
            ></textarea>
          </div>

          <button type="submit" class="bg-blue-500 text-white p-2 rounded">
            Submit Comment
          </button>
        </form>
        <div class="max-w-2xl mx-auto mt-8">
          <!-- Comment List -->
          <div class="bg-white p-6 rounded shadow-md">
            <h2 class="text-xl font-bold mb-4">Comments</h2>

            <ul>
              <!-- Comment Item -->
              <li class="mb-2">
                <strong class="text-blue-500">John Doe:</strong>
                <p class="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </li>

              <!-- Add more comment items as needed -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-3">
      <img
        src="http://www.maufree.vn/profiles/maufreevn/uploads/attach/1688625230_may-cnc-2225-6.jpg"
        alt=""
      />
      <img
        class="mt-4"
        src="http://windcam.vn/profiles/windcamvn/uploads/attach/post/images/S%E1%BA%A3n-ph%E1%BA%A9m-m%C3%A1y-cnc-%C4%91a-n%C4%83ng-3d-k%E1%BA%BFt-h%E1%BB%A3p-4d.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Home from "../views/Home.vue";

export default {
  name: "Detail",
  components: {
    Home,
  },
  data() {
    return {
      productDetail: null,
    };
  },
  created() {
    const productId = this.$route.params.id;
    this.fetchProduct(productId);
  },
  methods: {
    fetchProduct(id) {
      axios
        .get(`http://127.0.0.1:8000/api/showProduct/${id}`)
        .then((response) => {
          this.productDetail = response.data;
        })
        .catch((error) => {
          console.error("Lỗi khi tải dữ liệu sản phẩm: " + error);
        });
    },
    addToCart() {
      const productId = this.$route.params.id;

      const requestData = {
        msp: this.productDetail.msp,
        image: this.productDetail.image,
        price: this.productDetail.price,
        product_id: productId,
        user_id: localStorage.getItem("user_id"),
      };

      axios
        .post("http://127.0.0.1:8000/api/cart", requestData)
        .then((response) => {
          alert("Add to card success");
          this.$router.push({ name: "cart" });
        })
        .catch((error) => {
          console.error("Lỗi khi thêm sản phẩm vào giỏ hàng: " + error);
        });
    },
  },
};
</script>
