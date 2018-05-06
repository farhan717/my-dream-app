export class Information{
    firstNumber: number;
    secondNumber: number;
    private summation: number;
    
    constructor(f?:number, s?: number){
        this.firstNumber = f;
        this.secondNumber = s;
    }
    ShowTheNumbers()
    {
        console.log("First Number : " + this.firstNumber);
        console.log("Second Number : " + this.secondNumber); 
    }
    CalculateSum()
    {
            this.summation =  this.firstNumber  +  this.secondNumber;
    }
    ShowSummation()
    {
        console.log("Summation : " + this.summation); 
    }
    get Summation()
    {
        return this.summation;
    }
    set FirstNumber(v: number){
        this.firstNumber = v;
    }
    set SecondNumber(v: number){
        this.secondNumber = v;
    }
}