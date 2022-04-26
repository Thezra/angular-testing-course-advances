import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {
    let calculator: CalculatorService, loggerSpy: any;

    beforeEach(() => {
        /* beforeEach is used so every test is isolated
        so the test don't intefiere with each other and that
        every test can be run separately */
        console.log("Calling beforeEach");

        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);
        calculator = new CalculatorService(loggerSpy);
    });

    it('should add two numbers', () => {
        console.log("Add test");
        const result = calculator.add(2, 2);

        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('should subtract two numbers', () => {
        console.log("Subtract test");
        const result = calculator.subtract(2, 2);

        expect(result).toBe(0, 'Unexpected subtraction result');
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

});