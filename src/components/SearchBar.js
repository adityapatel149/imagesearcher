import React from "react";

//onChange, onClick, onSubmit

class SearchBar extends React.Component {
    //convention: on<Element><Event>
    onInputChange(event) {
        console.log(event.target.value);
    }

    // we do not put () after onInputChange because it will be called whener the component is rendered. we want to call it at some time in future
    // when we dont include () we are only passing a reference
    // OR <input type="text" onChange={(e) => console.log(e.target.value)} />

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
