import Home from './components/Home.vue';
import Mypage from './components/Mypage.vue';
import Search from './components/Search.vue';
import Signup from './components/Signup.vue';
import Header from './components/header/Header.vue';
import LoggedHeader from './components/header/LoggedHeader.vue';

// export const routes = [
//   { path: '', component: Home },
//   { path: '/mypage', component: Mypage },
//   { path: '/search', component: Search },
//   { path: '/signup', component: Signup },

// ];

export const routes = [
  {path: '/',
  components :{
    default: Home,
    header: Header,
  },
  beforeEnter: (to, from, next)=> {
    let key = window.localStorage.getItem('key');
      // to.matched[0].instances.header = new Header;
    // if(key) {
    //   console.log(key);
    //   next({path: '/mypage'});
      
    // } else {
    //     next({path: '/'});
    //   }
    }
  },
  {path: '/mypage',
  components:{
    default: Mypage,
    header: LoggedHeader,
  },
  }
]