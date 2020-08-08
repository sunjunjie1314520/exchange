
import game from "./modules/game.js";
import user from "./modules/user.js";

const modules = {
    ...{
        game
    },
    ...{
        user
    }
}

console.log(modules);

export default modules