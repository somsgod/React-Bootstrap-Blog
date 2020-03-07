import BlogPage from './pages/Blog/BlogPage';
import HomePage from './pages/Home/HomePage';

const PageList = [
  {
    name: 'Home',
    path: '/',
    description: '',
    component: HomePage,
  },
  {
    name: 'World',
    path: '/world',
    description: '',
    component: BlogPage,
  },
  {
    name: 'India',
    path: '/india',
    description: '',
    component: BlogPage,
  },
  {
    name: 'Technology',
    path: '/technology',
    description: '',
    component: BlogPage,
  },
  {
    name: 'Design',
    path: '/design',
    description: '',
    component: BlogPage,
  },
  {
    name: 'Business',
    path: '/business',
    description: '',
    component: BlogPage,
  },
];

export default PageList;