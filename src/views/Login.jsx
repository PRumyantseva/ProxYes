import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;

        signIn(user, () => navigate(fromPage, {replace: true}));
    }

  return (
    <div className="container">
      <h3 style={{marginBottom: '32px'}}>Login page</h3>
      <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label className="control-label">Name:</label>  
              <input className="form-control" name="username" />
          </div>
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  )
}

export {Login}