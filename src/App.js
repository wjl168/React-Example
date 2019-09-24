import React, { Component } from 'react';
// import { createStore } from 'redux';
import {
  BrowserRouter as Router,  // HashRouter as Router
  Route,
  NavLink,
  Redirect,
  withRouter,
  Switch
} from "react-router-dom";
import './app.css'
import State from "./page/state/State";
import StatePlus from "./page/state/StatePlus";
import ListKey from "./page/listKey/ListKey";
import Forms from "./page/form/Forms";
import ChildOrSlot from "./page/children/ChildOrSlot";
import Topics from "./page/router/Child";
import Todo from "./page/todo/Todo";
import Count from "./page/count/Count";
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
class App extends Component {
  render() {
    return (
      <Router>
        <AuthButton />
        <nav>
          <NavLink exact activeClassName='on' to="/">Home</NavLink>
          <NavLink activeClassName='on' to="/state">State</NavLink>
          <NavLink activeClassName='on' to="/statePlus">状态提升</NavLink>
          <NavLink activeClassName='on' to="/listKey">ListKey</NavLink>
          <NavLink activeClassName='on' to='/form'>表单</NavLink>
          <NavLink activeClassName='on' to='/childOrSlot'>组合VS继承</NavLink>
          <NavLink activeClassName='on' to="/topics">路由</NavLink>
          <NavLink activeClassName='on' to="/innerPage">callBack</NavLink>
          <NavLink activeClassName='on' to="/protected">个人中心</NavLink>
          <NavLink activeClassName='on' to="/todo">redux</NavLink>
          <NavLink activeClassName='on' to="/count">count</NavLink>
        </nav>
        <hr/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/state" component={State} />
          <Route path="/statePlus" component={StatePlus} />
          <Route path="/listKey" component={ListKey} />
          <Route path='/form' component={Forms} />
          <Route path='/childOrSlot' component={ChildOrSlot} />
          <Route path="/topics" component={Topics} />
          <Route path="/innerPage" component={() => <h2>inner Page</h2>} />
          <Route path="/login" component={Login} />
          <Route path="/todo" component={Todo} />
          <Route path="/count" component={Count} />
          <PrivateRoute path="/protected" component={Protected} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        欢迎!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          退出
        </button>
      </p>
    ) : (
      <p>您没有登录</p>
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>必须登录才能查看 {from.pathname}</p>
        <button onClick={this.login}>登录</button>
      </div>
    );
  }
}
const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>404
    </h3>
  </div>
);
export default App
