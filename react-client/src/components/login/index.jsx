import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Dynanner</h1>
        {/* Google auth login */}
        <a href="/auth/google" className="btn btn-outline-secondary">
          <span className="fab fa-google-plus-g" />  Log In
        </a>
      </div>
    );
  }
}

export default Login;
