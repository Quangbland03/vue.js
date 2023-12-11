<template>
  <div class="flex justify-between">
    <aside class="bg-gray-800 text-white min-h-screen p-4 w-[25%]">
      <h1 class="text-2xl font-semibold mb-6">Admin Dashboard</h1>
      <ul>
        <li class="mb-2">
          <a href="#" class="block p-2 bg-gray-700 hover:bg-gray-600 rounded"
            >Dashboard</a
          >
        </li>
        <li class="mb-2">
          <a href="#" class="block p-2 bg-gray-700 hover:bg-gray-600 rounded"
            >Users</a
          >
        </li>
        <li class="mb-2">
          <a href="#" class="block p-2 bg-gray-700 hover:bg-gray-600 rounded"
            >Settings</a
          >
        </li>
        <!-- Add more menu items as needed -->
      </ul>
    </aside>
    
    <router-view ></router-view>
  </div>
</template>
