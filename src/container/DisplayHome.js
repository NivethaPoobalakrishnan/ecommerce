import React,{Component} from 'react'
import * as actions from '../store/index';
import { connect } from 'react-redux';
class DisplayHome extends Component{

    render(){
    let itemList = this.props.items.map(item=>{
        return(
            <div key={item.id} onClick={()=> {this.props.addToCart(item.id)}}>
        <img src={item.img} alt={item.title}/>
        <p>{item.title}</p>
      <p>{item.desc}</p>
        <p><b>Price: {item.price}$</b></p>
      
                    </div>
            
        )
    })
    return (
        <div>
    {itemList}
        </div>
    );
}
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(actions.addToCart(id)),
 }
}

export default connect(null,mapDispatchToProps)(DisplayHome);