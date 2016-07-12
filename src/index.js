/**
 * Created by kuo zi on 2016/7/12.
 */
import Vue from "vue";
import Router from "vue-router";
import App from "./app.vue";
import A from "./components/a.vue";
import B from "./components/b.vue";

Vue.use(Router);

var router = new Router();

router.map({
    "/": {
        component: A
    },
    "/a": {
        name: "a",
        component: A
    },
    "/a/:info": {
        name: "pa",
        component: A
    },
    "/b": {
        name:"b",
        component: B
    },
    "/b/:info": {
        name:"pb",
        component: B
    }
});

router.start(App, "body");