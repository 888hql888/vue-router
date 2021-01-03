import Router from 'vue-router'
import box from "../components/box.vue"
import box2 from "../components/box2.vue"

const routes = [{
        path: "/",
        name: "home",
        component: () => { return import ('../home.vue') },
        beforeEnter: (to, from, next) => {
            console.log('======= start 路由独享守卫')
            console.log('路由独享守卫')
            console.log('======= end 路由独享守卫')

        }

    },
    {
        path: "/box10",
        name: "box10",
        component: box // box是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    },
    {
        path: "/box11",
        name: "box11",
        component: box
    },
    //动态路由匹配
    {
        path: "/box2/:name/:pwd",
        name: "box2",
        component: box2
    },
    //使用通配符 * 匹配任意路由 404找不到
    {
        path: "*",
        component: () => { return import ("../components/404.vue") }
    },
    //嵌套路由使用,在parent路由中，在里面嵌套一层子路由
    {
        path: "/parent",
        component: () =>
            import ("../views/parents.vue"), //区别于上一个()=>{return ...}
        children: [{
                path: "/parent/son1", //路径也可以 /son1
                component: () =>
                    import ("../components/son1.vue")
            },
            {
                path: "/parent/son2", //路径也可以 /son2
                component: () =>
                    import ("../components/son2.vue")
            },
        ]
    },
    //命名视图 综合案例 （可以运用到工作中）
    {
        path: "/namedHome",
        component: () =>
            import ('../views/nameViewsExample/components/userNavSetting.vue'),
        children: [{
                path: "nav1",
                component: () => {
                    return import ('../views/nameViewsExample/components/nav1.vue')
                }
            },
            {
                path: "nav2",
                component: () => {
                    return import ('../views/nameViewsExample/components/nav2.vue')
                }
            },
            {
                path: "nav3",
                component: () => {
                    return import ('../views/nameViewsExample/components/nav3.vue')
                }
            }
        ]
    }
]
const router = new Router({
    routes,
    mode: "hash"
})
console.log('======start 全局前置守卫 ======')
router.beforeEach((to, from, next) => {
    console.log(to, 'to 参数一')
    console.log(from, 'from 参数二')
    console.log('我是全局前置钩子函数，用在router.js或者main.js中(异步)')
    next();
})
console.log('======end 全局前置守卫 ======')




console.log('======start 全局后置守卫 ======')
router.afterEach((to, from) => {
    console.log(to, 'to 参数一')
    console.log(from, 'from 参数二')
    console.log('我是全局后置钩子函数，用在router.js或者main.js中(异步)')
})
console.log('======end 全局后置守卫 ======')



export default router;