<template>
    <div class="enrolled-courses">
      <h2>Enrolled Courses</h2>
      <div v-for="(course, index) in courses" :key="index">
        <h3>{{ course.name }}</h3>
        <div class="semester">
          <h4>Semester 1</h4>
          <ul>
            <li v-for="subject in course.semester1Subjects" :key="subject.id">{{ subject.name }}</li>
          </ul>
        </div>
        <div class="semester">
          <h4>Semester 2</h4>
          <ul>
            <li v-for="subject in course.semester2Subjects" :key="subject.id">{{ subject.name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      courses: Array
    }
  };
  </script>
  
  <style scoped>
  .enrolled-courses {
    margin-bottom: 20px;
  }
  
  .semester {
    margin-bottom: 15px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 5px;
  }
  </style>
  