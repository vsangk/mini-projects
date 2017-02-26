import React from 'react';
import { Button } from 'react-bootstrap';

export class Login extends React.Component {
  showLock = () => {
    this.props.lock.show();
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={this.showLock}>Log In</Button>
      </div>
    );
  }
}

export default Login;
