// routers/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import RegistrationPage from '../components/RegistrationPage.vue'
import Dashboard from '../components/student/StudentDashboard.vue'
import EnrolledCourses from '../components/student/EnrolledCourses.vue'
import PersonalInformation from '../components/student/PersonalInformation.vue'
import StudentProfile from '../components/student/StudentProfile.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegistrationPage },
  { path: '/dashboard', component: Dashboard,
    children: [
      { path: '', redirect: 'enrolled-courses' },
      { path: 'enrolled-courses', component: EnrolledCourses },
      { path: 'personal-information', component: PersonalInformation },
      { path: 'student-profile', component: StudentProfile }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
