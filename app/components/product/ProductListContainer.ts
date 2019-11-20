import { connect } from 'react-redux';
import IState from '../../interfaces/State';
import { fetchProducts } from '../../asyncActions';
import ProductList from './ProductList';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const mapStateToProps = (state: IState) => {
    return {
        products: state.products
    }
}

const mapsDispatchToProps = (dispatch: ThunkDispatch<object, void, AnyAction>) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapsDispatchToProps)(ProductList);