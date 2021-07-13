import "./styles.css";
import users from "./utils/users";
import State from "./lib/state";
import List from "./components/list";

const AppState = new State(); // application state
const namesList = new List(); // Create a new user list.

AppState.update({ users });

AppState.addObserver(namesList);

namesList.render(AppState.get(), "user-list-container");

const newUser = {
  id: 3,
  name: "John"
};

AppState.update({ users: [...users, newUser] });
