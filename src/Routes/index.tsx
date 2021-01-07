import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' component={() => <div>Home Page</div>} />
          <Route component={() => <div>Not Found</div>} />
        </Switch>
      </div>
    </>
  );
};

export default Routes;
