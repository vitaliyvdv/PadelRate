import {AppRegistry} from "react-native"
// import App from "./src/App"
import StartPage from "./src/pages/start"
import {name as appName} from "./app.json"

AppRegistry.registerComponent(appName, () => StartPage)
