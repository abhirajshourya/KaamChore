import { auth } from "./firebase-controller";
import { getGroups } from "./group-controller";

export const getUserChores = () => {
    const currentUser = auth.currentUser.toJSON();
    const groups = getGroups();
    let chores = [];
    
};
