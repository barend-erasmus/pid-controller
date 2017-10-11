import { PIDController } from './controller';

const pidController = new PIDController(10, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, 16, 6, 4, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

let current = 0;

setInterval(() => {
    const output = pidController.calculate(current);
    
    console.log(`${output} - ${current}`);

    if (output < 0) {
        current = current + (output * -1 / 100);
    }else {
        current = current - (output / 100);
    }
}, 1000)

