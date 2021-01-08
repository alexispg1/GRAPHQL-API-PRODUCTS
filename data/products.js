let products=[
    {
        id:1,
        name:"coca cola",
        description:" es un refresco de gas"
    },
    {
        id:2,
        name:"tequila",
        description:"se mescla con coca cola"
    
    } ,
    
    {
        id:3,
        name:"tonoyan",
        description:"aplica donde quiera"
    
    } ,
    
    ];
    
    const addProduct=(name,description)=>{
        const id =products[products.length-1].id+1;
        
        const newProduct={
            id,
            name,
            description
        };
        
        products=[...products,newProduct];
        
        return{...newProduct};
    
    };
    
    const getProducts=()=>{
        return products;
    }
    
    module.exports={
        getProducts,
        addProduct
    };
    
    
    