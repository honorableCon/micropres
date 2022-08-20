import { createApp } from "vue";

import Header from "./Header.vue";


export default (element) => {
    createApp(Header).mount(element);
}
