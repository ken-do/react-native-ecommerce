import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import IState from '../../interfaces/State';

import OrderList from './OrderList';
import { fetchOrders } from '../../asyncActions';


const mapStateToProps = (state: IState) => {
    return {
        orders: state.orders
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<object, void, AnyAction>) => {
    return {
        fetchOrders: (userId: string) => (dispatch(fetchOrders(userId)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);