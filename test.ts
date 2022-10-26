class Calculator {
    constructor(public firstParameter: number, public secondParameter: number, public thirdParameter: number) {
        this.firstParameter = firstParameter;
        this.secondParameter = secondParameter;
        this.thirdParameter = thirdParameter;
    }

    addition() {
        if (this.firstParameter + this.secondParameter === this.thirdParameter) {
            console.log(`The test is passed! The actual result '${this.firstParameter + this.secondParameter}' is equal to the expected result '${this.thirdParameter}'.`);
        } else {
            console.log(`The test is failed! The actual result '${this.firstParameter + this.secondParameter}' is not equal to the expected result '${this.secondParameter}'.`);
        }
    }

    deduction() {
        if (this.firstParameter - this.secondParameter === this.thirdParameter) {
            console.log(`The test is passed! The actual result '${this.firstParameter - this.secondParameter}' is equal to the expected result '${this.thirdParameter}'.`);
        } else {
            console.log(`The test is failed! The actual result '${this.firstParameter - this.secondParameter}' is not equal to the expected result '${this.thirdParameter}'.`);
        }
    }

    multiplication() {
        if (this.firstParameter * this.secondParameter === this.thirdParameter) {
            console.log(`The test is passed! The actual result '${this.firstParameter * this.secondParameter}' is equal to the expected result '${this.thirdParameter}'.`);
        } else {
            console.log(`The test is failed! The actual result '${this.firstParameter * this.secondParameter}' is not equal to the expected result '${this.thirdParameter}'.`);
        }
    }

    division() {
        if (this.firstParameter / this.secondParameter === this.thirdParameter) {
            console.log(`The test is passed! The actual result '${this.firstParameter / this.secondParameter}' is equal to the expected result '${this.thirdParameter}'.`);
        } else {
            console.log(`The test is failed! The actual result '${this.firstParameter / this.secondParameter}' is not equal to the expected result '${this.thirdParameter}'.`);
        }
    }

    involution() {
        if (Math.pow(this.firstParameter,this.secondParameter) === this.thirdParameter) {
            console.log(`The test is passed! The actual result '${this.firstParameter ** this.secondParameter}' is equal to the expected result '${this.thirdParameter}'.`);
        } else {
            console.log(`The test is failed! The actual result '${this.firstParameter ** this.secondParameter}' is not equal to the expected result '${this.thirdParameter}'.`);
        }
    }
}

const positiveTest1: any = new Calculator(1, 1, 2);
positiveTest1.addition();

const negativeTest2: any = new Calculator(1, 1, 1);
negativeTest2.addition();

const positiveTest3: any = new Calculator(1, 1, 0);
positiveTest3.deduction();

const negativeTest4: any = new Calculator(1, 1, 1);
negativeTest4.deduction();

const positiveTest5: any = new Calculator(1, 1, 1);
positiveTest5.multiplication();

const negativeTest6: any = new Calculator(1, 1, 0);
negativeTest6.multiplication();

const positiveTest7: any = new Calculator(1, 1, 1);
positiveTest7.division();

const negativeTest8: any = new Calculator(1, 0, 2);
negativeTest8.division();

const positiveTest9: any = new Calculator(2, 2, 4);
positiveTest9.involution();

const negativeTest10: any = new Calculator(5, 2, 1);
negativeTest10.involution();