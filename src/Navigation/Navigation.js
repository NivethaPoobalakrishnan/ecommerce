import React,{Component} from 'react'
import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import './Navigation.css';
import { connect } from 'react-redux'

import { useSelector } from 'react-redux'

class Navigation extends Component {
  
    render() {
      const { addeditems } = this.props;
    //const { cartItems } = this.props;
  //  console.log("testing"+this.props.addeditems);
   return (
        <header className="main-header">
          <nav>
            <ul>
            <li>
            <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
        </div>
            </li>
             <li>
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li>
                <NavLink to="/Cart">Cart</NavLink>
              </li>
              <li>
              <div className="header_basket">
              <ShoppingBasket />
            <span className="header_optionLineTwo header_basketcount">{addeditems.length}</span>
          </div>
              </li>
            </ul>
          </nav>
        </header>
      );
}
}
const mapStateToProps = (state)=>{
  return {
      addeditems: state.addedItems
       }
  }

export default  connect(mapStateToProps)(Navigation);