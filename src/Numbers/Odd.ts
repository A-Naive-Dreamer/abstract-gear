export default class Odd {
    static isOddNumber(num: number): boolean {
        if (Number.isFinite(num) && Number.isInteger(num) && num & 1) return true;

        return false;
    }

    static range(start: number = 1, end: number = 10): Array<number> {
        let arrRange: Array<number> = [];

        for (let num: number = start ; num < end ; num += 1) {
            if (Odd.isOddNumber(num)) arrRange.push(num);
        }

        return arrRange;
    }
}
