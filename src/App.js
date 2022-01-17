
import Home from './pages/Home/Home';
import Dashboard from "./pages/Dashboard/Dashboard";
import ReduxProvider from "./redux/Provider";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
    return (
    <BrowserRouter>
        <ReduxProvider>
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route
            path="/dashboard"
            exact
            render={(props) => <Dashboard {...props} />}
        />
        </ReduxProvider>
    </BrowserRouter>
    );
}

export default App;
