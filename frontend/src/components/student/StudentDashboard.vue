<template>
    <div class="dashboard">
      <Header />
  
      <div class="main">
        <Sidebar />
  
        <!-- Main content area -->
        <div class="content">
          <router-view></router-view>
          <div>
            <h1>Welcome Epa</h1>
            <img src="@/assets/graduate.jpeg" alt="Logo" class="">
          </div>
        </div>
      </div>
  
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
    min-height: 150vh;
    margin: 0px;
  }
  
  .main {
    display: flex;
    flex: 1;
  }
  
  .content {
    display: flex;
    justify-content: space-around;
    flex: 1;
    padding: 1rem;
  }
  img {
    max-width: 30rem;
  }
  </style>
  