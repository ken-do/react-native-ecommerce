import ICartItemDetails from './CartItemDetails';

export default interface CartItem {
    id: string,
    amount: number,
    details: ICartItemDetails,
    fetchDetails(): Promise<ICartItemDetails>
}
