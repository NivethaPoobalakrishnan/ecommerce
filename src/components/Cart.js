import React , {Component}from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
    render(){
        const cartitems = this.props.addeditems.map(item => {
            return (
              <div key={item.id}>
              <div>
              <img src={item.img} alt={item.img} className=""/>
              </div>
              <div>
              <p>{item.title}</p>
              <p>{item.desc}</p>
              <p>Quantity: {item.quantity}</p>
              </div>
              </div>
            )
          })
          return (
            <div>
            {cartitems}
            </div>
            );
      }
      }
      
      const mapStateToProps = (state)=>{
        return {
            addeditems: state.addedItems
             }
        }
   

export default connect(mapStateToProps)(Cart);