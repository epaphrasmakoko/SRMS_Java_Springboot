<template>
    <div class="personal-information">
      <h2>Personal Information</h2>
      <div class="info-item">
        <span class="label">Name:</span>
        <span>{{ fullName }}</span>
      </div>
      <div class="info-item">
        <span class="label">Registration Number:</span>
        <span>{{ registrationNumber }}</span>
      </div>
      <div class="info-item">
        <span class="label">Email:</span>
        <span>{{ email }}</span>
      </div>
      <div class="info-item">
        <span class="label">Phone Number:</span>
        <span>{{ phoneNumber }}</span>
      </div>
      <!-- Add more personal details as needed -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      fullName: String,
      registrationNumber: String,
      email: String,
      phoneNumber: String
      // Add more props for additional personal information
    }
  };
  </script>
  
  <style scoped>
  .personal-information {
    margin-bottom: 20px;
  }
  
  .info-item {
    margin-bottom: 10px;
  }
  
  .label {
    font-weight: bold;
    margin-right: 5px;
  }
  </style>
  