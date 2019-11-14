import React from 'react';
import { DataTable } from 'react-native-paper';

const OrderListItem = ({ order }) => {
    return (
        <DataTable.Row>
            <DataTable.Cell>{order._id}</DataTable.Cell>
            <DataTable.Cell>{order.purchasedDate}</DataTable.Cell>
            <DataTable.Cell>{order.buyer.email}</DataTable.Cell>
            <DataTable.Cell>{order.total}</DataTable.Cell>
            <DataTable.Cell>{order.status}</DataTable.Cell>
            <DataTable.Cell>Actions</DataTable.Cell>
        </DataTable.Row>
    );
}

export default OrderListItem;