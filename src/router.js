import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
function importComponent(path) {
    return () => import(`./components/${path}.vue`)
}
Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Root",
            meta: { title: 'Agragendis Residence' },
            component: importComponent('home'),
        },
        // {
        //     path: "/",
        //     name: "Root",
        //     meta: {title: 'Agragendis Residence'},
        //     component: importComponent('home'),
        //     children: [
        //         // To do list
        //         {
        //             path: "/blockA",
        //             name: "blockA",
        //             meta: {title: 'Block A'},
        //             component: importComponent('TodoList/blockA'),
        //         },
        //         {
        //             path: "/blockB",
        //             name: "blockB",
        //             meta: {title: 'Block B'},
        //             component: importComponent('TodoList/blockB'),
        //         },
        //         {
        //             path: "/blockC",
        //             name: "blockC",
        //             meta: {title: 'Block C'},
        //             component: importComponent('TodoList/blockC'),
        //         },
        //     ]
        // },
        {
            path: "/blockA",
            name: "blockA",
            meta: { title: 'Block A' },
            component: importComponent('TodoList/blockA'),
        },
        {
            path: "/blockB",
            name: "blockB",
            meta: { title: 'Block B' },
            component: importComponent('TodoList/blockB'),
        },
        {
            path: "/blockC",
            name: "blockC",
            meta: { title: 'Block C' },
            component: importComponent('TodoList/blockC'),
        },
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
});

export default router;