import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";

const { REACT_APP_HEADER_HOST: headerHost, REACT_APP_BLOGS_HOST: blogHost } =
  process.env;

function Header({ history, user }) {
  return (
    <MicroFrontend
      history={history}
      host={headerHost}
      name="Header"
      user={user}
    />
  );
}

function Blogs({ history, user }) {
  return (
    <MicroFrontend history={history} host={blogHost} name="Blogs" user={user} />
  );
}

function BlogDetail({ history }) {
  return (
    <div>
      <MicroFrontend history={history} host={blogHost} name="Blogs" />
    </div>
  );
}

const Home = ({ user }) => {
  return (
    <div className="container">
      <Header user={user} />
      <Blogs user={user} />
    </div>
  );
};

function App() {
  const [user] = useState("joao");
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={() => Home({ user })} />
          <Route exact path="/blogdetail/:blogid" component={BlogDetail} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
