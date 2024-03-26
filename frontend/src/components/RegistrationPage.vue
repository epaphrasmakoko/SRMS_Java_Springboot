<template>
  <div class="registration-page">
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div class="card">
            <img src="@/assets/StudentLogo.png" alt="Logo" class="logo">
            <h2 class="card-title">Student Registration</h2><br>
            <div class="card-body">
              <form @submit.prevent="register" class="registration-form">
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input type="text" id="firstName" v-model="firstName" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="middleName">Middle Name</label>
                  <input type="text" id="middleName" v-model="middleName" class="form-control">
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" id="lastName" v-model="lastName" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="registrationNumber">Registration Number</label>
                  <input type="text" id="registrationNumber" v-model="registrationNumber" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="dob">Date of Birth</label>
                  <input type="date" id="dob" v-model="dob" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="phoneNumber">Phone Number</label>
                  <input type="tel" id="phoneNumber" v-model="phoneNumber" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="courses">Courses</label>
                  <select id="courses" v-model="selectedCourse" class="form-control" required>
                   <option value="" disabled selected>Select Course</option>
                   <option v-for="course in courses" :key="course.id" :value="course.id">{{ course.name }}</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Register</button>
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
      firstName: '',
      middleName: '',
      lastName: '',
      registrationNumber: '',
      dob: '',
      phoneNumber: '',
      selectedCourse: null, // Variable to store the selected course
      courses: [ // Sample course data (replace with actual course data)
        { id: 1, name: 'CSDFE' },
        { id: 2, name: 'CNISE' },
        { id: 3, name: 'SE' }
        // Add more courses as needed
      ]
    };
  },
  methods: {
    register() {
      // Perform registration logic here
      console.log('Registering with first name:', this.firstName, 'middle name:', this.middleName, 'last name:', this.lastName, 'registration number:', this.registrationNumber, 'date of birth:', this.dob, 'phone number:', this.phoneNumber, 'selected course:', this.selectedCourse);
      // Redirect to dashboard after successful registration
      this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>

.logo {
    max-width: 80px;
  }

.registration-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.registration-form {
  width: 300px;
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="tel"],
input[type="date"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
}

select {
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
