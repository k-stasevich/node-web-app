import './HomeLayout.scss';

import React, { useState } from 'react';

interface IHomeLayoutProps {
  isAuthorized: boolean;

  login(login: string, password: string): void;
}

export const HomeLayoutComponent: React.FC<IHomeLayoutProps> = props => {
  const { login: handleLogin } = props;

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="home-layout page">
      <div className="card">
        <h5 className="card-header">Login</h5>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Login</label>
              <input
                type="text"
                value={login}
                onChange={e => setLogin(e.target.value)}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter login"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleLogin(login, password)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
