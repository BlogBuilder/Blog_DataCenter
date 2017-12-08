//路由映射

import Article from '../components/article/article.vue';
import Article_List  from '../components/article/list.vue';
import Article_Create from '../components/article/create.vue'

import Category from '../components/category/category.vue';
import Category_List  from '../components/category/list.vue';
import Category_Create  from '../components/category/create.vue';
import Category_Update from '../components/category/update.vue';

import Tag from '../components/tag/tag.vue';
import Tag_List  from '../components/tag/list.vue';
import Tag_Create  from '../components/tag/create.vue';
import Tag_Update from '../components/tag/update.vue';

let routes = [
    {
        path: "/article",
        name: "article",
        component: Article,
        children: [{
            path: "list",
            component: Article_List
        }, {
            path: "create",
            component: Article_Create
        }]
    },
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
    },
    {
        path: "/tag",
        name: "tag",
        component: Tag,
        children: [{
            path: "list",
            component: Tag_List
        }, {
            path: "create",
            component: Tag_Create
        }, {
            path: "update/:id",
            component: Tag_Update
        }]
    }
];

module.exports = routes;