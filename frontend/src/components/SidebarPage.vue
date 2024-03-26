<!-- Sidebar.vue -->
<template>
    <aside class="sidebar">
      <ul>
        <!-- Sidebar links -->
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/dashboard/student-profile">Profile</router-link></li>
        <!-- Add more sidebar links as needed -->
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    // Sidebar component logic here
  }
  </script>
  
  <style scoped>
  /* Sidebar styles here */
  .sidebar {
    background-color: #333;
    color: #fff;
    padding: 1rem;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  