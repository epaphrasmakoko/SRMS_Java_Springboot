<template>
    <div class="login-page">
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col-md-5">
            <figure>
                <figcaption><h5><strong>STUDENT REGISTRATION MANAGEMENT SYSTEM</strong></h5></figcaption>
                <img src="@/assets/StudentLogo.png" alt="Logo" class="logo">
              </figure>
            <div class="card form1">
              <div class="card-body">
                <form @submit.prevent="login" class="login-form">
                  <h2 class="card-title">Login</h2>
                  <div class="form-group">
                    <input type="text" id="username" v-model="username" class="form-control" required placeholder="Username">
                  </div>
                  <div class="form-group">
                    <input type="password" id="password" v-model="password" class="form-control" required placeholder="Password">
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Perform login logic here
        console.log('Logging in with username:', this.username, 'and password:', this.password);
        // Redirect to dashboard after successful login
        this.$router.push('/dashboard');
      }
    }
  };
  </script>
  
  <style scoped>
  
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .login-form {
    width: 100%;
    padding: 40px;
    background-color: #e0e0e0;
    border-radius: 20px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
  .form1 {
    border: 0cap;
  }
  
  .logo {
    max-width: 200px; /* Adjust the max-width value as needed */
    margin-bottom: 20px; /* Optional: Add some margin below the logo */
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  button {
    width: 100%;
    padding: 10px;
  }

  </style>
  