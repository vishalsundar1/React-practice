import React, {Component} from "react"
//using props. Props by default stores all property or data in react from State
export default class Product extends Component{
    // state = {
    //     id: this.props.product.id,
    //     productName: this.props.product.productName,
    //     price: this.props.product.price,
    //     quantity: this.props.product.quantity
    // }

    constructor(props){
        super(props);

        this.state = {
            product: this.props.product,
        };
    }

    render (){
        console.log(this.props)
        const { id, productName, price, quantity } = this.props.product;
        return (
            <div className="col-lg-6">
                <div className="card m-2">
            <div className="card-body">
        <div className="text-muted m-2">ID: {id}
            <span className="pull-right" onClick={() => this.props.onDelete(this.props.product)}>
            <i className="fa fa-times hand-icon"></i>
        </span>
        </div>
        <h5 className="pt-2 border-top">Product Name: {productName}</h5>
        <div>$ : {price} </div>         
        </div>
        {/* card body ends here */}  
        <div className="card-footer p-2 ">
            <div className="float-left">
                <span className="badge bg-primary p-2">{quantity}</span>
                <div className="btn-group p-2">
                    <button className="btn btn-outline-success" onClick={() => this.props.onIncrement(this.props.product)}>+</button>
                    <button className="btn btn-outline-success" onClick={()=>{this.props.onDecrement(this.props.product);}}>-</button>
                </div>
            </div>{/* Float-left ends here */}
            <div className="float-right text-end">
                {this.props.children}
            </div>
            {/*  float-right ends here */}
            
        </div> {/*card footer ends here*/}              
        </div>
            </div>
        
        );
    }

    componentDidMount(){
        //fetch data from data source
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

}