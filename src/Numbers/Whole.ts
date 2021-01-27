export default class Whole {
    static isWholeNumber(num: number): boolean {
        const IS_GREATER_THAN_MIN_ONE = num > -1;

        if (Number.isFinite(num) && Number.isInteger(num) && IS_GREATER_THAN_MIN_ONE) return true;

        return false;
    }

    static range(start: number = 1, end: number = 10): Array<number> {
        let arrRange: Array<number> = [];

        for (let num: number = start ; num < end ; num += 1) {
            if (Whole.isWholeNumber(num)) arrRange.push(num);
        }

        return arrRange;
    }
}
