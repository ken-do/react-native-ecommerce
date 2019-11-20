import React from 'react';
import { DataTable } from 'react-native-paper';

import IOrder from '../../interfaces/Order';

import OrderListItem from './OrderListItem';

const OrderList = ({ orders }) => {
    const orderItems = orders.map((order: IOrder) => <OrderListItem order={order} />);

    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>ID</DataTable.Title>
                <DataTable.Title>Purchased On</DataTable.Title>
                <DataTable.Title>Buyer's name</DataTable.Title>
                <DataTable.Title>Total</DataTable.Title>
                <DataTable.Title>Status</DataTable.Title>
                <DataTable.Title>Details</DataTable.Title>
            </DataTable.Header>
            {orderItems}
            <DataTable.Pagination
                page={1}
                numberOfPages={3}
                onPageChange={(page) => { console.log(page); }}
                label="1-2 of 6"
            />
        </DataTable>
    );
}

export default OrderList;