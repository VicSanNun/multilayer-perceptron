import { MultilayerPerceptron } from './classes/MultilayerPerceptron';
import { Matrix } from './classes/Matrix';
const NeuralNetwork = new MultilayerPerceptron(2, 3, 1);
const matrix = new Matrix(3, 3);
console.log(matrix.getMatrix());