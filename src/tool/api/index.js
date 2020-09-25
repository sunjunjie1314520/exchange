
import game from "./modules/game.js";

import user from "./modules/user.js";
import new_user from "./modules/new_user.js";

const version = true

let modules = {
    ...{
        game
    },
}

if (version) {
    modules = {...{modules}, user: {...user}}
} else {
    modules = {...modules, user: {...new_user}}
}

console.log(modules);

export default modules