import React from 'react';
import { DataTable } from 'react-native-paper';
import OrderListItem from './OrderListItem';

const OrderList = ({ items }) => {
    const orderItems = items.map(item => <OrderListItem order={item} />);

    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>ID</DataTable.Title>
                <DataTable.Title>Purchased On</DataTable.Title>
                <DataTable.Title>Buyer's name</DataTable.Title>
                <DataTable.Title>Total</DataTable.Title>
                <DataTable.Title>Status</DataTable.Title>
                <DataTable.Title>Actions</DataTable.Title>
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