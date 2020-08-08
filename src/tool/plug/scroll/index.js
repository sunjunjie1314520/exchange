
import Scroll from "./index.vue";

let plug = {}

plug.install = function (Vue, options){
    
    Vue.component(Scroll.name, Scroll)
}

export default plug