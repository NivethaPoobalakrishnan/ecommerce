import React , {Component}from 'react'
import { connect } from 'react-redux';
import * as actions from '../store/index';
import DisplayHome from '../container/DisplayHome';

class Home extends Component {

    componentDidMount () {
        this.props.initProduct();
    }
    render(){
        return(
            <div>
            <DisplayHome items={this.props.product}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
  product: state.items
    };
}

const mapDispatchToProps = dispatch => {
    return {
        initProduct: () => dispatch(actions.initProduct()),
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
