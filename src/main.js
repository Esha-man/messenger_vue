import { createApp } from 'vue'
import App from "./App"
import common from "@/components/common"

console.log(common)
const app = createApp(App)
common.forEach((el)=>{
    app.component(el.name, el)
})
app.mount('#app')
