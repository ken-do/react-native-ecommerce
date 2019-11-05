import IProduct from './Product';

export default interface CartItem {
    id: string,
    amount: number,
    details: IProduct,
    fetchDetails(): Promise<IProduct>,
}
