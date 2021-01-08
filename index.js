
var express =require("express");
var app =express();

var graphqlHTTP=require("express-graphql");
var {buildSchema}=require("graphql");

var cors = require("cors");

var {getProducts, addProduct}=require("./data/products");

//add cors
app.use(cors());


//create serve graphql
var schema=buildSchema(`
    type Product {
        description :String,
        name :String,
        id: Int 
    }

    type Query {
        hello :String,
        products:[Product],
        product(id:Int!):Product,
},
    type Mutation{
        createProduct(name: String!,description:String!):Product
    }

    `);

var root ={
    hello: ()=>{
        return "hello word !"
    },
    product: ()=>{
        return getProducts();
    },
    product:({ id })=>{
        const products=getProducts();
        return products.find(p=> p.id === id);
    },
    createProduct: args =>{
        const{name,description}=args;
        return addProduct(name,description);
    },

}   

app.use(
    "/graphql",
    graphqlHTTP({
      schema:schema,
      rootValue:root,
      graphql:true
    })
);

app.listen(4000);

console.log("running : "+"http://localhost:4000/graphql");
