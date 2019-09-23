import { AMatrix } from '../interfaces/IMatrix';

export class Matrix {
    private rows: number;
    private columns: number;

    private data: Array<number>;

    constructor (rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;

        this.data = this.buildMatrix(this.rows, this.columns);
    }

    private buildMatrix(rows: number, columns: number): Array<number> {
        let matrix: Array<number> = [];

        for (var i = 0; i < rows; i++) {
            let row: any = [];
            for (var j = 0; j < columns; j++) {
                row.push(Math.random());
            }
            matrix.push(row);
        }

        return matrix;
    }

    private static multiply(matrixA: Array<number>, matrixB: Array<number>): any{

    }

    private static sum(matrixA: Array<number>, matrixB: Array<number>): any {
        
    }

    public getMatrix() {
        return this.data;
    }
}
