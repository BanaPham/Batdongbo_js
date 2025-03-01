import Navigo from "navigo";
import LogIn, {Home} from "./login.js"

const router = new Navigo('/');

router.on("/", function(){
    LogIn()
});

router.on("/home", function(){
    Home()
});

router.resolve();

export {router}