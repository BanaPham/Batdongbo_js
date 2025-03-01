import Navigo from "navigo";
import Home, {LogIn} from "./login.js"

const router = new Navigo('/');

document.addEventListener("click", (event) => {
    const button = event.target.closest("button"); 
    if (button) {
        const link = button.querySelector("a"); 
        if (link) {
            event.preventDefault(); 
            router.navigate(link.getAttribute("href")); 
        }
    }
});

router.on("/", function(){
    LogIn()
});

router.on("/home", function(){
    Home()
});

router.resolve();

export {router}