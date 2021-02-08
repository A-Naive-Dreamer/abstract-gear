export default class Even {
    private static readonly DIFFERENCE: number = 2;
    private _firstTerm: number                 = 2;

    get firstTerm() {
        return this._firstTerm;
    }

    set firstTerm(firstTerm: number) {
        if (Even.isEvenNumber(firstTerm)) {
            this._firstTerm = firstTerm;
        }
    }

    static isEvenNumber(num: number): boolean {
        if (Number.isFinite(num) && Number.isInteger(num) && !(num & 1)) return true;

        return false;
    }

    getArrSet(start: number = 1, end: number = 10): Array<number> {
        let arrRange: Array<number> = [];

        for (let num: number = start ; num < end ; num += 1) {
            if (Even.isEvenNumber(num)) arrRange.push(num);
        }

        return arrRange;
    }

    static getDifference() {
        return Even.DIFFERENCE;
    }

    getTerm(position: number, firstTerm: number = this._firstTerm): number {
        let term: number = firstTerm + ((position - 1) * Even.DIFFERENCE);

        return term;
    }

    getSum(position: number, firstTerm: number): number {
        let sum: number = (position / 2) * ((2 * firstTerm) + ((position - 1) * Even.DIFFERENCE));

        return sum;
    }
}
