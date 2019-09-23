import { Matrix } from './Matrix';

export class MultilayerPerceptron {
    private inputLayer: number;
    private hiddenLayer: number;
    private outputLayer: number;
    
    private input: Array<number>;

    constructor(inputLayer: number, hiddenLayer: number, outputLayer: number) {
        this.inputLayer = inputLayer;
        this.hiddenLayer = hiddenLayer;
        this.outputLayer = outputLayer;

        this.input = [];
    }

    setInput(input: Array<number>) {
        this.input = input;
    }
}
