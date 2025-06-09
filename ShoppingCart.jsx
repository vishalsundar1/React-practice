import { render } from "@testing-library/react";
import React, {Component} from "react";
import Product from "./product";

export default class ShoppingCart extends Component{
    // to render products we need data, data is given by State.
    constructor()
    {
        //calling constructor of component class
        super();
        //initialize state
        this.state = {
            products:[],
         };
    }    

    render(){
        return (
        <div className="container-fluid">
            <h4>Shopping Cart</h4>
        <div className="row">
        {this.state.products.map((prod) => {
            return (<Product 
            key={prod.id} 
            product = {prod}
            onIncrement= {this.handleIncrement}
            onDecrement = {this.handleDecrement}
            onDelete = {this.handleDelete}
            >
                <button className="btn btn-primary">Buy Now</button>
            </Product>
            );
        })}
        </div>
        </div>
        )
    }
    // render ends here

    // Methods
    //Executes affter constructor and current component renders
    componentDidMount = async()=>{
        //fetch data from data source
        //http request
        var response = await fetch("http://localhost:8000/products", {method:"GET"});
        var prods = await response.json()
        console.log(prods)
        this.setState({products: prods})
        // promise.then((response)=>{
        //     if(!response.ok){
        //         throw new Error("Network response not OK!")
        //     }
        //     console.log(response)
        
        // var jsonify_response = response.json();
        // jsonify_response.then((prods)=>{
        //     console.log(prods)
        //     this.setState({products: prods})
        //  })
        // })
        
    }

    componentDidUpdate(prevProps, prevState){
        //executes after mount when props/state is updated
        //make conditional http calls to update DB.
        //executed for each change in props or state
        console.log(prevProps,
            prevState,
            this.state,
            this.props
        )
    }

    componentWillUnmount(){
        //when parent  deletes current iinstance or if user routs out during routing
        //http cleanup codes

    }

    componentDidCatch(error, info){
        
    }


    handleIncrement = (product) =>{
        console.log("Increment", product);
        // clone the product array
        let allProducts = [...this.state.products];
        // get index of array
        let index = allProducts.indexOf(product);
        allProducts[index].quantity++;
        this.setState({products: allProducts})
        //console.log(allProducts[index]);
    };

    handleDecrement = (product)=>{
        console.log("Decrement", product);
        let allProducts = [...this.state.products];
        // get index of array
        let index = allProducts.indexOf(product);
        allProducts[index].quantity--;
        this.setState({products: allProducts})
        if (allProducts[index].quantity <= 0){
            allProducts[index].quantity = 0
            this.setState({products: allProducts})
        }
        //console.log(allProducts[index]);
    };

    handleDelete = (product)=>{
        // clone the product array
        let allProducts = [...this.state.products];
        // get index of array
        let index = allProducts.indexOf(product);
        if(window.confirm("Are you sure to delete?")){
        allProducts.splice(index, 1);
        this.setState({products: allProducts})
        }
        
    };
}