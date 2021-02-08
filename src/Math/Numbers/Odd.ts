export default class Odd {
    private static readonly DIFFERENCE = 2;

    static isOddNumber(num: number): boolean {
        if (Number.isFinite(num) && Number.isInteger(num) && num & 1) return true;

        return false;
    }

    static getArrSet(start: number = 1, end: number = 10): Array<number> {
        let arrRange: Array<number> = [];

        for (let num: number = start ; num < end ; num += 1) {
            if (Odd.isOddNumber(num)) arrRange.push(num);
        }

        return arrRange;
    }

    getTerm(position: number, firstTerm: number): number {
        let term: number = firstTerm + ((position - 1) * Odd.DIFFERENCE);

        return term;
    }

    getSum(position: number, firstTerm: number): number {
        let sum: number = (position / 2) * ((2 * firstTerm) + ((position - 1) * Odd.DIFFERENCE));

        return sum;
    }
}
