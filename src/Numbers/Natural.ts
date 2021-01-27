export default class Natural {
    static isNaturalNumber(num: number): boolean {
        const IS_GREATER_THAN_ZERO = num > 0;

        if (Number.isFinite(num) && Number.isInteger(num) && IS_GREATER_THAN_ZERO) return true;

        return false;
    }

    static range(start: number = 1, end: number = 10): Array<number> {
        let arrRange: Array<number> = [];

        for (let num: number = start ; num < end ; num += 1) {
            if (Natural.isNaturalNumber(num)) arrRange.push(num);
        }

        return arrRange;
    }
}
