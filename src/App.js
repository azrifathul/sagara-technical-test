import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routers";
import CircleBackground from "./components/circleBackground";
import "./styles.scss";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Router>
        <CircleBackground />
        <Header />
        <Switch>
          {routes.map(({ path, component }, idx) => {
            return (
              <Route key={idx} path={path} exact>
                {component}
              </Route>
            );
          })}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
