import React, { Component } from 'react';
import contacts from "./contacts.json";

const contactAll = contacts;

const myTable = document.querySelector("#table tbody");

export default class RandomContact extends Component {
    state = {
        contacts : contactAll
    }

    handleClick = () => {
        // <tr>
        // <td><img src=randomContact.pictureUrl alt="image-star" width= "100px"/></td>
        // <td>randomContact.name}</td>
        // <td>{randomContact.popularity.toFixed(2)}</td>
        // </tr>
        const index = Math.floor(Math.random()* this.state.contacts.length) 
        const randomContact = this.state.contacts[index];
        this.setState(
            {
                contacts: this.state.contacts.splice(index,1)
            }
        )
    }
    render() {
   
        return (
            <div>
                <button onClick={(evt) => this.handleClick()}>{this.props.children}</button>
            </div>
        )
    }
}

