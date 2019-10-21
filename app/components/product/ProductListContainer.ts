import { connect } from 'react-redux';
import IState from '../../interfaces/State';
import { fetchProducts } from '../../actions';
import ProductList from './ProductList';

const mapStateToProps = (state: IState) => {
    return {
        products: state.products
    }
}

const mapsDispatchToProps = (dispatch: any) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapsDispatchToProps)(ProductList);