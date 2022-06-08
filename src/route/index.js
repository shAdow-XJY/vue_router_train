import {createRouter, createWebHashHistory} from "vue-router";
const homePage = () => import("../pages/HomePage")
const pageOne = () => import("../pages/PageOne")
const pageTwo = () => import("../pages/PageTwo")
const pageThree = () => import("../pages/PageThree")
const pageFour = () => import("../pages/PageFour")
const pageFive = () => import("../pages/PageFive")


const routes = [
    // {path: "/",redirect: "/pageOne" },
    {
        path: "/",
        name: "homePage",
        component: homePage
    },
    {
        path: "/pageOne",
        name: "pageOne",
        component: pageOne
    },
    {
        path: "/pageTwo",
        name: "pageTwo",
        component: pageTwo
    },
    {
        path: "/pageThree",
        name: "pageThree",
        component: pageThree
    },
    {
        path: "/pageFour",
        name: "pageFour",
        component: pageFour
    },
    {
        path: "/pageFive",
        name: "pageFive",
        component: pageFive
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
