import ICRUDController from '../interfaces/CRUDController';
import { readFile, writeFile, readFileSync } from 'fs';

interface IDWise {
    id: string
}

export default class CRUDController<T extends IDWise> implements ICRUDController<T> {
    
    public databaseURL: string;
    private records: T[];

    constructor(databaseURL: string) {
        this.databaseURL = databaseURL;
        this.records = this.readFromJSON(databaseURL);
    }

    create(newRecord: T) {
        const record = this.findExisitingRecord(newRecord.id);

        if (record) {
            return record
        }
        
        this.records.push(newRecord);
        this.writeToJSON(this.records, this.databaseURL);
        return newRecord;
    }

    read(id: string) {
        const record = this.findExisitingRecord(id);
        if (record) {
            return record
        }
        console.log('the record does not exist');
    }
    
    update(id: string, data: Partial<T>) {
        this.records.forEach((record: T, index: number) => {
            if (id === record.id) {
                this.records[index] = {...record, ...data};
                this.writeToJSON(this.records, this.databaseURL);
                return id
            }
        })
        return id
    }

    remove(id: string) {
        this.records = this.records.filter(p => p.id !== id);
        this.writeToJSON(this.records, this.databaseURL);
        console.log(`the record with the id ${id} has been removed` );
    }

    index() {
        return this.records;
    }

    private findExisitingRecord(id: string) : T{
        return this.records.find(p => p.id === id);
    }

    private readFromJSON(filePath: string) : T[] {
        try {
            const data = readFileSync(filePath, 'utf8');
            if (data) {
                return JSON.parse(data);
            }
            return []
        } catch (e) {
            console.log(e)
        }
    }

    private writeToJSON(inputData, filePath) {
        writeFile(filePath, JSON.parse(inputData), err => {
            if (err) {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            }
        })
    }
}
