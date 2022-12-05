import React from "react";

//in old code, we did not know the value of input at any instance. in order to get the value we would have to get into DOM, find input element, and get
//the value. ------UNCONTROLLED----------------

//our react world only knew its value during the onChange callback. only for that small sliver of time
//source of data was in our html element, not in our react world.

//WE DONT LIKE THAT. WE WANT ALL DATA TO BE STORED IN OUR REACT, AND NOT IN THE HTML DOM

//------CONTROLLED COMPONENT------------------

//AFTER REFACTORING, HTML GETS ITS VALUE FROM OUR REACT CMOPONENTS (value: {this.state.term})
//now i give it a default value, or
//easily manipulate the text froevery keystroke, like force it to be uppercase --> term: e.target.value.toUpperCase()

class SearchBarRefactored extends React.Component {
    state = { term: "" };

    onFormSubmit = event => {
        event.preventDefault(); //by default, browser tries to submit form data to some backend server and refresh the page on pressing Enter
        console.log("term = " + this.state.term); //GIVES A NASTY ERROR --> Cannot read property 'state' of undefined --> it means it is trying to read undefined.state
        //JS thinks this is not an instance of SearchBar but of 'undefined'
        /*now to determine the value of 'this', we do not look at the function, we see where the function is called
         for ex: car = new Car();
         car.setDriveSound('vrooom')
         car.getSound() ==> will return this.sound variable.
         now.... 'this' in this.sound refers to 'car'

         now, in our case, onFormSubmit is getting ripped off from our SearchBar at some point. there is no reference to the instance   

        one way to fix it is define a constructor(){
        this.getSound = this.getSound.bind(this) makes a new function that is binded to the instance
        }

        ANOTHER WAY TO FIX IT IS USING A FEATURE OF BABEL.
        WE DEFINE THE FUNCTION USING ARROW FUNCTION AND BABEL WILL AUTOMATICALLY BIND IT TO THE INSTANCE
        I.E. USE onFormSubmit = (event) =>{} instead of onFormSubmit(event){}


        ANOTHER WAY TO FIX IT IS ALREADY USED BY US BEFORE.
        WE PASSED AN ARROW FUNCTION DIRECTLY TO onChange PROP

        SO WE CAN DEFINE onFormSubmit(event){}
        and then use onSubmit = {(event) => this.onFormSubmit(event)} USED PARENTHESIS HERE
         */

        //INVOKE FUNCTION. SO WE USE ()
        this.props.onSubmit(this.state.term); //we have been using props with functional components, in classbased components, we have to use this.props
    };

    /* user types input
     callback gets invoked (onChange)
     we call setState to update term
     Component rerenders as we updated state
     now when it rerenders, we provide the term to 'value' attribute of input tag.
     if value = "asdasd" it will not change even when i type something in it as it will always rerender with value 'asdasd'
     */
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBarRefactored;
