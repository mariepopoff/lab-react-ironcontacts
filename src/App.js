import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import RandomContact from "./RandomContact";
import React, { Component } from "react";

const contactsArray = [
  contacts[0],
  contacts[1],
  contacts[2],
  contacts[3],
  contacts[4],
];
const contactsAll = contacts;

class App extends Component {
  state = {
    contacts: contactsArray,
  };

  delete = (i) => {
    const array= [...this.state.contacts];
    const newContacts = array.splice(i,1);
    this.setState({
      contacts: array
    });
  };

  randomContact = () => {
    this.setState({
      contacts: [...this.state.contacts, contactsAll[Math.floor(Math.random() * contactsAll.length)]],
    });
  };

  sortName =() => {
    const newContacts = [...this.state.contacts];
    console.log(newContacts.sort(function (a,b) {return a.name.localeCompare() - b.name.localeCompare()}));
    this.setState({
      contacts : newContacts.sort(function (a,b) {return ('' + a.name).localeCompare(b.name);})
    })
  }

  sortPopularity =() => {
    const newContacts = [...this.state.contacts];
    console.log(newContacts.sort(function (a,b) {return a.popularity - b.popularity}));
    this.setState({
      contacts : newContacts.sort(function (a,b) {return a.popularity - b.popularity})
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={(evt) => this.randomContact()}> Add Random Contact</button>
        <button onClick={(evt) => this.sortName()}> Sort by name</button>
        <button onClick={(evt) => this.sortPopularity()}> Sort by popularity</button>

        <table>
          <thead id="table">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, i) => {
              return (
                <tr key={i}>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      alt="image-star"
                      width="100px"
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                  <button onClick={(evt) => this.delete({i})}> Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
