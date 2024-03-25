<template>
    <div class="login-page"> <!-- Apply the .login-page class here -->
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col-md-6">
            <div class="card">
              <img src="@/assets/StudentLogo.png" alt="Logo" class="logo">
              <h2 class="card-title">Login</h2><br>
              <div class="card-body">
                <form @submit.prevent="login" class="login-form">
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" v-model="username" class="form-control" required>
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="password" class="form-control" required>
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
  /* Add your CSS styles here */
  
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .login-form {
    width: 400px;
    padding: 40px;
    background-color: #f8f9fa;
    border-radius: 20px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
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
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  