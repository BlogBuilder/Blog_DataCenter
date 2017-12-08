//路由映射

import Category from '../components/category/category.vue';
import Category_List  from '../components/category/list.vue';
import Category_Create  from '../components/category/create.vue';
import Category_Update from '../components/category/update.vue';
let routes = [
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
        path: "/category",
        name: "category",
        component: Category,
        children: [{
            path: "list",
            component: Category_List
        }, {
            path: "create",
            component: Category_Create
        }, {
            path: "update/:id",
            component: Category_Update
        }]
    }
];

module.exports = routes;