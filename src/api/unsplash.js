import axios from "axios";

//now we can have an instance of axios client that keeps default values like where to get request from,headers,params etc.

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: { Authorization: "Client-ID wztEmKqp386GI6v2KLRkAQdVqFWZL2GSKqXyCEzNZt0" }
});
