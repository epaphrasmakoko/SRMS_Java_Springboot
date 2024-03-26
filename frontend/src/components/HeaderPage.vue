<!-- Header.vue -->
<template>
    <header class="header">
      <div class="logo">
        <!-- Your logo or branding goes here -->
        <img src="@/assets/StudentLogo.png" alt="Logo">
        <span>My Dashboard</span>
      </div>
      <nav class="nav">
        <!-- Navigation links -->
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/dashboard/student-profile">Profile</router-link>
        <router-link to="/">Logout</router-link>

      </nav>
      <div class="profile">
        <!-- User profile information -->
        <!-- Display user avatar, name, etc. -->
      </div>
    </header>
  </template>
  
  <script>
  export default {
    // Header component logic here
  }
  </script>
  
  <style scoped>
  /* Header styles here */
  .header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo img {
    height: 30px;
    margin-right: 10px;
  }
  
  .nav a {
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
  }
  
  /* .profile {
    /* Styles for user profile section */
  /*} */
  </style>
  