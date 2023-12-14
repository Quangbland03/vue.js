<template>
  <div class="w-[80%]  bg-slate-100">
    <div class="max-w-xl mx-auto my-10  p-5 rounded-md shadow-md bg-blue-300">
      <h2 class="text-2xl font-semibold mb-5">Add Product</h2>

      <form
        action="/add-product"
        method="post"
       
        enctype="multipart/form-data "
      >
        <!-- Product Name -->
        <div class="mb-4">
          <label for="name" class="block text-gray-600 text-sm font-medium mb-2"
            >Product Name</label
          >
          <input
            type="text"
            id="name"
            name="name"
            class="w-full px-4 py-[4px] border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <!-- Description -->
        <div class="mb-4">
          <label
            for="description"
            class="block text-gray-600 text-sm font-medium mb-2"
            >Description</label
          >
          <textarea
            id="description"
            name="description"
            rows="4"
            class="w-full px-4  border rounded-md focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>

        <!-- Price -->
        <div class="mb-4">
          <label
            for="price"
            class="block text-gray-600 text-sm font-medium mb-2"
            >Price</label
          >
          <input
            type="number"
            id="price"
            name="price"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <!-- Image -->
        <div class="mb-4">
          <label
            for="image"
            class="block text-gray-600 text-sm font-medium mb-2"
            >Image</label
          >
          <input
            type="file"
            id="image"
            name="image"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            accept="image/*"
            required
          />
        </div>

        <!-- Category -->
        <div class="mb-4">
          <label
            for="category"
            class="block text-gray-600 text-sm font-medium mb-2"
            >Category</label
          >
          <select
            id="category"
            name="category"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <!-- Add more options as needed -->
          </select>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  </div>
</template>
