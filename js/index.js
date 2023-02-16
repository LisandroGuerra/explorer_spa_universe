import { Router } from "./router.js";


const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


// document.body.style.backgroundImage = "url('assets/mountains-universe-1.svg')"
// document.body.style.backgroundImage = "url('assets/mountains-universe-2.svg')"
// document.body.style.backgroundImage = "url('assets/mountains-universe-3.svg')"
// document.body.style.backgroundImage = "url('assets/mountains-universe-4.svg')"
