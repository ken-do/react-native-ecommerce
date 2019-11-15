import AsyncStorage from '@react-native-community/async-storage';

import ICartItem from '../interfaces/CartItem';

export default class AsyncStore {
    static set = async (key: string, value: ICartItem[]) =>  {
        try {
            const saved = await AsyncStorage.setItem(key, JSON.stringify(value));
            return saved
        } catch(err) {
            console.log(err);
        }
    }

    static get = async (key: string) => {
        try {
            const items = await AsyncStorage.getItem(key);
            return JSON.parse(items)
        } catch(err) {
            console.log(err);
        }
    }
}