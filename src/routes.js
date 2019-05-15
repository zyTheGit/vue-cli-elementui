
import Login from './components/Login'
import Home from './components/Home'
import Music from './components/Music'
import Photo from './components/Photo'
import Vedio from './components/Vedio'
import Mv from './components/Mv'
const routes = [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/home',
        redirect:'/home/music',//默认显示一个子页面
        component: Home,
        name:'Home',
        children:[
            {
                path:'photo',
                name:'Photo',
                component:Photo
            },
            {
                path:'vedio',
                name:'Vedio',
                component:Vedio
            },
            {
                path:'mv',
                name:'Mv',
                component:Mv
            },
            {
                path:'music',
                name:'Music',
                component:Music
            }
        ]
    }
]
export default routes;