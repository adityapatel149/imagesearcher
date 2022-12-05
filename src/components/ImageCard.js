import React from "react";

//React Refs 1. Give access to single DOM element
//           2. We create refs in constructor, assign them to intance variables, then pass to a particular JSX element as props

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    state = { spans: 0 };

    componentDidMount() {
        console.log(this.imageRef);
        //ref is a js object which has a 'current' property, which references a dom node (in our case, img)
        console.log(this.imageRef.current.clientHeight); //will show 0 because image is not loaded yet, but if you open the object, then it will show proper value inside as by that time, image has been loaded

        this.imageRef.current.addEventListener("load", this.setSpans);
        //call setSpans when image loads
    }

    //calling it setSpans cuz we are setting grid-row-end property and its unit is spans
    //this property gives 2 rows to an image if value is 2 spans (basically row-span)
    //after grid-auto-rows = 150px, our images are getting cut, so we will give it more space(more rows)if needed by setting appropriate span for each
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        //const spans = Math.ceil(height / 150);
        const spans = Math.ceil(height / 10); //how many rows needed
        this.setState({ spans: spans });
        //now we were setting grid-auto-rows to 150, so some images were getting way too much space(2 rows) even if their size did not need 300px
        //so to make it more precise, we will set grid-auto-row to 10px only (SMART)
    };

    render() {
        const { alt_description, urls } = this.props.image; //destructure
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
            </div>
        ); //ref is the only way to reference the particular dom element created by our jsx
    }
}

export default ImageCard;
