<template>
    <div class="personal-information">
      <h2><u>Personal Information</u></h2>
      <div class="info-item">
        <span class="label"><strong>Name:</strong></span>
        <span class="details">Epaphras Makoko</span>
      </div>
      <div class="info-item">
        <span class="label"><strong>Registration Number:</strong></span>
        <span class="details">{{ registrationNumber }}</span>
      </div>
      <div class="info-item">
        <span class="label"><strong>Email:</strong></span>
        <span class="details">{{ email }}</span>
      </div>
      <div class="info-item">
        <span class="label"><strong>Phone Number:</strong></span>
        <span class="details">{{ phoneNumber }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      fullName: String,
      registrationNumber: String,
      email: String,
      phoneNumber: String
    }
  };
  </script>
  
  <style scoped>
  .personal-information {
    text-align: left;
    margin-bottom: 20px;
  }

  .personal-information > h2 {
    margin-bottom: 30px;
  }
  
  .info-item {
    margin-bottom: 20px;
  }
  
  .label {
    font-weight: bold;
    margin-right: 5px;
  }
  </style>
  