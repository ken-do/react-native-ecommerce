import * as express from 'express';

export default interface ICRUDController<T> {
    create(req: express.Request, res: express.Response),
    read(req: express.Request, res: express.Response),
    update(req: express.Request, res: express.Response),
    remove(req: express.Request, res: express.Response),
    index(req: express.Request, res: express.Response),
}