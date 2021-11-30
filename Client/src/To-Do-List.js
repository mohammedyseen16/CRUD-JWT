import axios from "axios";
import { Card, Header, Form, Input, Icon } from "semantic-ui-react";
import tempQoute from './pages/Dashboard'
import React, {Component } from 'react'

let endpoint = "http://localhost:8080";


class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: "", 
      director: "",
      release_date: "",
      language: "",
      description: "",
      items: [],
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = () => {
    let { movie, director, release_date, language, description } = this.state;
     
    if (movie) {
      axios
        .post(
          endpoint + "/api/movie",
          {
            movie,
            director,
            release_date,
            language,
            description     
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          this.getMovie();
          this.setState({
            movie: "",
            director: "",
            release_date: "",
            language: "",
            description: "",

          });
          console.log(res);
        });
    }
  };

  getMovie = () => {
    axios.get(endpoint + "/api/movie").then((res) => {
      if (res.data) {
        this.setState({
          items: res.data.map((item) => {
            let color = "yellow";
            let style = {
              wordWrap: "break-word",
            };

            if (item.status) {
              color = "green";
              style["textDecorationLine"] = "line-through";
            }

            return (
              <div>  
                <div class="ui card">            
                  <div class="content">
                    <div class="header">{item.movie}</div>
                    <div class="description"><p>Director: {item.director}</p></div>
                    <div class="description"><p>Movie Language: {item.language}</p></div>   
                    <div class="description"><p>Release Date: {item.release_date}</p></div><br />
                    <div class="description"> <p> {item.description} </p> </div><br />
                    <button className="button1" onClick={() => this.deleteMovie(item._id)}> Delete </button>
                  </div>
                </div> 
              </div> 
            
            );
          }),
        });
      } else {
        this.setState({
          items: [],
        });
      }
    });
  };

  updateMovie = (id) => {
    axios
      .put(endpoint + "/api/movie/" + id, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res);
        this.getMovie();
      });
  };

  undoMovie = (id) => {
    axios
      .put(endpoint + "/api/undoMovie/" + id, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res);
        this.getMovie();
      });
  };

  deleteMovie = (id) => {
    axios
      .delete(endpoint + "/api/deleteMovie/" + id, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res);
        this.getMovie();
      });
  };

  render() {
    return  (  
      <div className="yaseen">
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">My App</h5>
          <a class="btn btn-outline-primary" href="http://localhost:3000/">Home</a>
          <span style={{ paddingRight: 10 }}/>
          <a class="btn btn-outline-primary" href="http://localhost:3000/logout" onClick={ event => window.localStorage.clear()}>Log out</a>
      </div>
        <div className="row">
          <Header className="header" as="h2">
            Create Movie
          </Header>
        </div>
        <div className="row">
          <Form onSubmit={this.onSubmit}>
            
            <label>Enter Movie Name</label>
            <Input
              type="text"
              name="movie"
              onChange={this.onChange}
              value={this.state.movie}
              fluid
              placeholder="Create Movie"
            />
            <br/>
            <label>Enter Director Name</label>
            <Input
              type="text"
              name="director"
              onChange={this.onChange}
              value={this.state.director}
              fluid
              placeholder="Director name"
            />
            <br/>
            <label>Select Movie Language</label>
            <Input list="languages" name="mylist"
              autocomplete = "off"
              type="text"
              name="language"
              onChange={this.onChange}
              value={this.state.language}
              fluid
              placeholder="Movie Language"  
            />
            <datalist id="languages" >
              <option value="English" />
              <option value="Hindi" />
              <option value="Kannada" />
              <option value="Telugu" />
              <option value="Tamil" />
              <option value="Malayalam" />
            </datalist>
            <br/>
            <label>Enter Relaese date</label>
            <Input
              type="text"
              name="release_date"
              onChange={this.onChange}
              value={this.state.release_date}
              fluid
              placeholder="Relaese date"
            />
            <br/>
            <label>Type Somthing about movie</label>
            <input
              type="text"
              name="description"
              onChange={this.onChange}
              value={this.state.description}
              fluid
              placeholder="Type description...."
            />
             
            <div className="wrap">
              <button class="button">Add Details</button>
              <span style={{ paddingRight: 30 }}/>
              <button class="button1" onClick={event =>  window.location.href=(endpoint + "/api/movie")}>
                Read Movie
              </button>
            </div> 
          </Form>
          <br /> <br />
        </div>
        <span style={{ paddingRight: 30 }}/>
          <div className="sample">
            <div className="row">
              <Card.Group>{this.state.items} </Card.Group>
              <span style={{ paddingRight: 30 }}/>
              <br></br><br></br><br></br>
            </div> 
            <span style={{ paddingRight: 30 }}/>
          </div>
      </div>  
    );
  }
}


export default ToDoList;
 
