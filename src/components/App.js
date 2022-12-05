import React from "react";
//import axios from "axios";
import unsplash from "../api/unsplash";
import SearchBarRefactored from "./SearchBarRefactored";
import ImageList from "./ImageList";

//now we dont want to call our API inside SearchBar component, its job is to get input and submit form
//we want the API to be called by our App component. Now props can only send data from parent to child
//how to communicate from child to parent?
//well its pretty much like event handling onChnage, onSubmit etc.
//we will invoke a callback to a method IN App component FROM SearchBar

//now we are using onSubmit, but it doesnt have to be that name cuz it is a prop. we can use runMeWhenUserSubmits. we only have to use specific names in jsx

//now React's job is to show html and handle user interaction. sending requests needs to be done by AJAX client

// to handle network stuuf, we will use
//fetch(function built into browsers) or axios(3rd party package we can install using npm)[RECOMMENDED]

class App extends React.Component {
    state = { images: [] }; //empty array

    /*onSearchSubmit(term) {
        console.log("API called");
        axios
            .get("https://api.unsplash.com/search/photos", {
                //address or root url, object that will options to customize the request
                params: { query: term },
                headers: { Authorization: "Client-ID wztEmKqp386GI6v2KLRkAQdVqFWZL2GSKqXyCEzNZt0" } //get these details from documentatin
            })
            .then(response => {
                //then function is invoked later when request is complete
                console.log(response);
                console.log(response.data.results);
            });
        //you can view results in Inspect, Network, select query, Preview >> results >> url
    }

ALTERNATE AND EASIER WAY:
    */
    /*
    ASYNC - AWAIT syntax
    //async onSearchSubmit(term) {
    onSearchSubmit = async term => {
        console.log("API called");
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            //address or root url, object that will have options to customize the request
            params: { query: term },
            headers: { Authorization: "Client-ID wztEmKqp386GI6v2KLRkAQdVqFWZL2GSKqXyCEzNZt0" } //get these details from documentatin
        });
        //console.log(response.data.results);

        console.log(this); //says this is an object of something called onSubmit
        //now we see the function onSearchSubmit is called by this.props.onSubmit() in SearchBar component
        //calue of  'this' can be determined what is before the dot (.), in this case, props
        //soooo, 'this' is actually refering to props object. it only has 'onSubmit' rn, so we see in cosole log 'onSubmit'
        //but if we add more props and console.log(this), we will see it is actually the props object
        this.setState({ images: response.data.results }); //GIVES ERROR: this.setState is not a function
        //EXACT SAME PROBLEM AS BEFORE.
        //SOLUTION? use constructor and bind onSearchSubmit, setup onSearch submit as arrow function, or wrap our callback in arrow function where it is called
    };

NOT APPROPRIATE TOO KEEP SO MUCH CONFIGURATION INSIDE APP COMPONENT
CREATE NEW api FOLDER
    */

    onSearchSubmit = async term => {
        const response = await unsplash.get("/search/photos", {
            params: { query: term, per_page: 50 } //default is 10, i changed it to 50, but used 10 only while developing
        });
        this.setState({ images: response.data.results });
    };
    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBarRefactored onSubmit={this.onSearchSubmit} />

                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
