import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = props => {
    //console.log(props.images);
    //
    // map((element) => { /* ... */ })
    // map(callbackFn)
    //
    /* const images = props.images.map(image => {
        return <img src={image.urls.regular} alt={image.alt_description} key={image.id} />;
    });
    //
    */
    //now we get a warning to use 'key' prop for our list.
    //it will work perfectly fine, but React uses 'key' to enhance the performance
    //when a new item is added to a list, in our case images, React will compare that list to what we have currently rendered in html DOM
    //if the item with a key is already rendered, it not will not rerender/update the whole list in html, only the new item which is not currently rendered
    //so key has to be unique. and almost all APIs that return a list of objects, have an id property with them
    //so we will assign image.id to key attribute of our element

    //instead of using image.desc, image.id,image.urls everytime, we can destructure it

    /*
    const images = props.images.map(({ alt_description, id, urls }) => {
        //it will take an item from images(called it image in above code), and in that, it will take the mentioned properties --> mentioned by {}
        return <img src={urls.regular} alt={alt_description} key={id} />;
    });
    //return images;
    return <div className="image-list">{images}</div>;
};

*/

    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image} />;
    });
    //return images;
    return <div className="image-list">{images}</div>;
};

export default ImageList;
