import { createRouter, createWebHistory } from 'vue-router';
import ErrorDisplay from '@/views/ErrorDisplay';
import Todo from '@/views/Todo';
import Dashboard from '@/views/Dashboard';
import Income from '@/views/Income';
import Help from '@/views/Help';

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/income',
    name: 'Income',
    component: Income
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  /*{
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    component: EventCreate
  },*/
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    props: true,
    component: ErrorDisplay
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


export default router;
