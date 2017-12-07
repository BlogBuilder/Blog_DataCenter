//路由映射
import Certification from '../components/basic/certification.vue'
import Account from '../components/basic/account.vue'
var routes = [
    // {
    //     path: "/nav1",
    //     name: "/nav1",
    //     component: Nav1,
    //     beforeEnter: (to, from, next) => {
    //         //TODO
    //         next();
    //     },
    //     children: [{
    //         path: "child1",
    //         component: Child1
    //     }, {
    //         path: "child2",
    //         component: Child2
    //     }]
    // },
    {
        path: "/account",
        name: "/account",
        component: Account
    },{
        path: "/certification",
        name: "/certification",
        component: Certification
    }
];

module.exports = routes;