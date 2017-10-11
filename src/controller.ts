import * as fs from 'fs';

export class PIDController {

    private previousError: number = 0;
    private iTerm: number = 0;

    constructor(
        private target: number,
        private outputMin: number,
        private outputMax: number,
        private pGain: number,
        private iGain: number,
        private dGain: number,
        private iTermMin: number,
        private iTermMax: number
    ) {

    }


    public calculate(current: number) {
        const error = current - this.target;

        const pTerm = error * this.pGain;

        const dTerm = (error - this.previousError) * this.dGain;

        let output;

        this.previousError = error;

        this.iTerm += error * this.iGain;

        if (this.iTerm > this.iTermMax) {
            this.iTerm = this.iTermMax;
        } else if (this.iTerm < this.iTermMin) {
            this.iTerm = this.iTermMin
        }

        output = pTerm + this.iTerm + dTerm;

        if (output < this.outputMin) {
            output = this.outputMin
        } else if (output > this.outputMax) {
            output = this.outputMax;
        }

        // fs.appendFileSync('pTerm.log', pTerm + '\n');
        // fs.appendFileSync('iTerm.log', this.iTerm + '\n');
        // fs.appendFileSync('dTerm.log', dTerm + '\n');

        // fs.appendFileSync('output.log', output + '\n');
        // fs.appendFileSync('current.log', current + '\n');

        return output;
    }
}