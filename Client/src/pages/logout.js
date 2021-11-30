import React from "react";

function Logout() {
    return <div>
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">My App</h5>
      <a class="btn btn-outline-primary" href="http://localhost:3000/">Home</a>
      <span style={{ paddingRight: 30 }}/>
      <a class="btn btn-outline-primary" href="http://localhost:3000/login">Login</a>
      <span style={{ paddingRight: 30 }}/>
      <a class="btn btn-outline-primary" href="http://localhost:3000/register">Sign up</a>

    </div>
    <center>
        <img src="./pages/static/images/imag.png" alt=""/>
        <br></br><br></br> <br></br><br></br>
        <h3>You are now logged out</h3>
        <br></br><br></br>
        <button  className="button" onClick={event => window.location.href="http://localhost:3000/login"}>Login</button>

    </center>

    </div>;
}

export default Logout;