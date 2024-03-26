<template>
    <div class="dashboard">
      <!-- Include the header component -->
      <Header />
  
      <div class="main">
        <!-- Include the sidebar component -->
        <Sidebar />
  
        <!-- Main content area -->
        <div class="content">
          <h1>Welcome to the Student Dashboard</h1>
          <router-view></router-view>
        </div>
      </div>
  
      <!-- Include the footer component -->
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../HeaderPage.vue'
  import Sidebar from '../SidebarPage.vue'
  import Footer from '../FooterPage.vue'
  
  export default {
    components: {
      Header,
      Sidebar,
      Footer
    }
  }
  </script>
  
  <style scoped>
  /* Dashboard styles here */
  .dashboard {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .main {
    display: flex;
    flex: 1;
  }
  
  .content {
    flex: 1;
    padding: 1rem;
  }
  </style>
  