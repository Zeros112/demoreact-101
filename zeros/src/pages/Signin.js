import React from "react";
import { Container } from "react-bootstrap";

function Signin(props) {
    return (
      <div>
          <h3>Sign in</h3>
           <div>
            <p>Username</p>
            <input
              className="form-control"
              type="text"
              placeholder="demo@gmail.com"
              autoFocus
              required
              value={props.email}
              onChange={(e) => props.handleEmail(e)}
            />
          </div>

          <div>
          <p>Password</p>
          <div>
            <input
              className="form-control"
              type="password"
              placeholder="password"
              required
              value={props.password}
              onChange={(e) => props.handlePassword(e)}
            />
          </div>
        </div>

        <div>
        <button
          className="btn btn-primary btn-sm w-100 mt-2"
          onClick={() => props.handleSignin()}
        >
          Sign in
        </button>
        <div className="d-flex align-items-center justify-content-center">
          <p className="text-center mt-3 mr-1">Don't have an account ?</p>
          &nbsp;
          <button
            type="button"
            className="btn btn-link px-0"
            onClick={() => props.setHasAccount(!props.hasAccount)}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;

            
/*function Signin (){
    return(
    <div>
        <h3>Sign in</h3>

        <div>
            <p>Username</p>
            <input
                className="form-control w-100"
                type="text"
                placeholder="demo@gmail.com"
                value=""
                autoFocus
                required
                
                />
        </div>
        <div>
            <p>Password</p>
            <input
                className="form-control"
                type="password"
                placeholder="demo1234"
                value=""
                required
                
                />
        </div>

        <div>
            <button className="btn btn-primary mt-2 w-100 ">Sign in</button>
            <div className="d-flex align-items-center justify-content-center">
                
            </div>
        </div>
        </div>
        );
}
export default Signin;*/