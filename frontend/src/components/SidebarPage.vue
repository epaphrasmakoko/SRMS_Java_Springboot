<!-- Sidebar.vue -->
<template>
    <aside class="sidebar">
      <ul>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/dashboard/enrolled-courses">Courses</router-link></li>
        <li><router-link to="/dashboard/student-profile">Profile</router-link></li>
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
    padding: 40px;
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
  