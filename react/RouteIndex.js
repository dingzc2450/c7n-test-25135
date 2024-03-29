import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { inject } from 'mobx-react';
import { asyncRouter, nomatch } from '@choerodon/boot';

const Role = asyncRouter(() => import('./role'));
const CreateRole=asyncRouter(() => import('./role/createRole'));
const Home=asyncRouter(() => import('./home'));
const User=asyncRouter(() => import('./user'));
@inject('AppState')
class RouteIndex extends React.Component {
  render() {
    const { match, AppState } = this.props;
    return (
      <Switch>
         <Route path={`${match.url}/home`} component={Home} />

        <Route exact path={`${match.url}/role`}component={Role} />
        <Route path={`${match.url}/user`}component={User} />
        <Route exact path={`${match.url}/role/create`}component={CreateRole} />
       </Switch>
    );
  }
}

export default RouteIndex;
