import React from "react";

function ErrorPage() {
    return <div>
       
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">My App</h5>
      <a class="btn btn-outline-primary" href="http://localhost:9999/login.html">Login</a>
      <span style={{ paddingRight: 30 }}/>
      <a class="btn btn-outline-primary" href="http://localhost:9999/">Sign up</a>

    </div> 
    <center>
        <br></br><br></br>
    <h1> 404 page not fonud  </h1>
    <img  className="img2" src="./images/404.png" alt="home page image"></img>
   
   </center>
    </div>;
}

export default ErrorPage;