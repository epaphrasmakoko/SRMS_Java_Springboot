<template>
  <div class="registration-page vh-100 ">
    <div class="container">
      <div class="row justify-content-center ">
        <div class="col-md-6">
          <img src="@/assets/StudentLogo.png" alt="Logo" class="logo">
          <div class="card form1">
            <h2 class="card-title">Student Registration</h2><br>
            <div class="card-body scrollable-card-body">
              <form @submit.prevent="register" class="registration-form">
                <div class="form-group">
                  <input type="text" id="firstName" v-model="firstName" class="form-control" required placeholder="First Name">
                </div>
                <div class="form-group">
                  <input type="text" id="middleName" v-model="middleName" class="form-control"  required placeholder="Middle Name">
                </div>
                <div class="form-group">
                  <input type="text" id="lastName" v-model="lastName" class="form-control" required placeholder="Last Name">
                </div>
                <div class="form-group">
                  <input type="text" id="registrationNumber" v-model="registrationNumber" class="form-control" required placeholder="Registration Number">
                </div>
                <div class="form-group">
                  <input type="tel" id="phoneNumber" v-model="phoneNumber" class="form-control" required placeholder="Phone Number">
                </div>
                <div class="form-group">
                  <input type="email" id="email" v-model="phoneNumber" class="form-control" required placeholder="Email">
                </div>
                <div class="form-group">
                  <label for="dob">Date of Birth</label>
                  <input type="date" id="dob" v-model="dob" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="courses">Courses</label>
                  <select id="courses" v-model="selectedCourse" class="form-control" required>
                   <option value="Select Course" disabled selected>Select Course</option>
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
      courses: [ 
        { id: 1, name: 'CSDFE' },
        { id: 2, name: 'CNISE' },
        { id: 3, name: 'SE' }
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
.scrollable-card-body {
  max-height: 75vh; /* Set a maximum height for the card body */
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
}

.logo {
  padding-top: 5px;
    max-width: 80px;
  }

.registration-form {
  width: 100%;
  padding: 40px;
  background-color: #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 30px;
}

label {
  display: block;
  font-weight: bold;
}

button {
  width: 100%;
  padding: 10px;
}

.form1 {
    border: 0cap;
  }
</style>
