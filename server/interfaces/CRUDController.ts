export default interface CRUDController<T> {
    create: (product: T) => T,
    read: (id : string) => T,
    update: (id : string, data: Partial<T>) => string,
    remove: (id: string) => void,
    index: () => T[],
}