import React, { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers:[{id:1, name:"Scott", phone:"123-456", address: {city: "London"}, photos: "https://picsum.photos/id/1010/60"},
      {id:2, name:"Jones", phone:"123-455", address: {city: "Bombay"}, photos: "https://picsum.photos/id/1011/60"},
      {id:3, name:"Allen", phone:"123-443", address: {city: "Berlin"}, photos: "https://picsum.photos/id/1012/60"},
      {id:4, name:"James", phone:null, address: {city: "New York"}, photos: "https://picsum.photos/id/1013/60"},
      {id:5, name:"John", phone: null, address: {city: "Chicago"}, photos: "https://picsum.photos/id/1040/60"}
    ],
  };

  /*customerNameStyle = (custName)=> {
    if (custName.startsWith("S")) return "green-highlight";
    else if(custName.startsWith("J")) return "red-highlight";
    else return "blue-highlight";
  };*/

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
        </h4>
        <span className="badge bg-secondary m-2">
          {this.state.customersCount}
        </span>
        <button className="btn btn-info" onClick= {this.onRefreshClick} >Refresh</button>

        <table className="table">
          <thead>
            {this.createTbl()}
          </thead>
          <tbody>
            {this.getCustomerRow()}
          </tbody>
        </table>
      </div>
    );
  }
  //refresh method
  onRefreshClick = ()=>{
    const randomCount = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    this.setState({customersCount: randomCount  });
  }

  getPhoneToRender = (phone) => {
    return phone ? (phone):(
    <span className="bg-warning p-2 text-center">No Phone</span>);
  }

  createTbl = () =>{
    return (<tr>
              <th>ID</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>);
  }

  getCustomerRow = () =>{
    return (this.state.customers.map((cust, index)=>{
              return(
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>
                    <img src={cust.photos} alt="Customer"></img>
                    <button className="btn btn-sm btn-secondary" onClick={() => {this.onChangePictureClick(cust, index);}}>Change Picture</button>
                    </td>
                  {/*<td className={this.customerNameStyle(cust.name)}>{cust.name}</td>*/}
                  <td>{cust.name}</td>
                  <td>{this.getPhoneToRender(cust.phone)}</td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })
          );
  }

  onChangePictureClick= (cust, index) =>{
    //console.log(index)
    //console.log(cust)
    var custArr = this.state.customers;
    custArr[index].photos = "https://picsum.photos/id/1000/60";
    this.setState({customers: custArr})
  };


}
