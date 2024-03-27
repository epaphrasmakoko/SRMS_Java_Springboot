<!-- Header.vue -->
<template>
  <header class="header">
    <div class="logo">
      <figure>
        <img src="@/assets/StudentLogo.png" alt="Logo" class="logo">
        <figcaption><strong>SRMS</strong></figcaption>
      </figure>
    </div>
    <div>
      <h3><strong>STUDENT REGISTRATION MANAGEMENT SYSTEM</strong></h3>
    </div>
    <div>
      <nav class="nav">
        <router-link to="/dashboard/student-profile">Profile</router-link>
        <router-link to="/" class="link-danger">Logout</router-link>
      </nav>
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
  margin-left: 40px;
  max-width: 50px;
}
figcaption {
  margin-left: 40px;
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