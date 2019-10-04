export interface IProduct {
    readonly id: number;
    readonly title: string;
    readonly desc: string;
    readonly price: number;
    readonly img: ImageData;
}

const products: ReadonlyArray<IProduct> = [
    {
        id: 1,
        title: 'Winter body',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
        price: 110,
        img: require('../../images/item1.jpg')
    },
    {
        id: 2,
        title: 'Adidas',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
        price: 80,
        img: require('../../images/item2.jpg')
    },
    {
        id: 3,
        title: 'Vans',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
        price: 120,
        img: require('../../images/item3.jpg')
    },
    {
        id: 4,
        title: 'White',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
        price: 260,
        img: require('../../images/item4.jpg')
    },
    {
        id: 5,
        title: 'Cropped-sho',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
        price: 160,
        img: require('../../images/item5.jpg')
    },
    {
        id: 6,
        title: 'Blues',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
        price: 90,
        img: require('../../images/item6.jpg')
    }
];

export default products;