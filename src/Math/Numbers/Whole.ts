import Natural from './Natural';

export default class Whole {
    static readonly DEFAULT_FIRST_TERM : number = 0;
    static readonly DEFAULT_LAST_TERM  : number = Number.MAX_SAFE_INTEGER;
    static readonly DEFAULT_DIFFERENCE : number = 1;

    private _firstTerm  : number = Whole.DEFAULT_FIRST_TERM;
    private _lastTerm   : number = Whole.DEFAULT_LAST_TERM;
    private _difference : number = Whole.DEFAULT_DIFFERENCE;

    get firstTerm() {
        return this._firstTerm;
    }

    set firstTerm(firstTerm: number) {
        try {
            if (Whole.isWholeNumber(firstTerm) && firstTerm < this._lastTerm) {
                this._firstTerm = firstTerm;
            } else {
                console.trace('ERROR');
                throw 'ERROR';
            }
        } catch {
            if (!Whole.isWholeNumber(firstTerm)) {
                console.error('DESC:', 'The first term must be whole number!');
            } else if (!(firstTerm < this._lastTerm)) {
                console.error('DESC:', 'The first term must be less than the last term!');
            }
        }
    }

    get lastTerm() {
        return this._lastTerm;
    }

    set lastTerm(lastTerm: number) {
        try {
            if (Whole.isWholeNumber(lastTerm) && lastTerm > this._firstTerm) {
                this._lastTerm = lastTerm;
            } else {
                console.trace('ERROR');
                throw 'ERROR';
            }
        } catch {
            if (!Whole.isWholeNumber(lastTerm)) {
                console.error('DESC:', 'The last term must be whole number!');
            } else if (!(lastTerm > this._firstTerm)) {
                console.error('DESC:', 'The last term must be more than the first term!');
            }
        }
    }

    get difference() {
        return this._difference;
    }

    set difference(difference: number) {
        try {
            if (Number.isFinite(difference) && Number.isInteger(difference) && difference >= Whole.DEFAULT_DIFFERENCE && (difference % Whole.DEFAULT_DIFFERENCE) === 0) {
                this._difference = difference;
            } else {
                console.trace('ERROR');
                throw 'ERROR';
            }
        } catch {
            if (!Number.isFinite(difference)) {
                console.error('DESC:', 'The difference must be finite number!');
            } else if (!Number.isInteger(difference)) {
                console.error('DESC:', 'The difference must be integer!');
            } else if (!(difference >= Whole.DEFAULT_DIFFERENCE)) {
                console.error('DESC:', 'The custom difference must be more than or equal to the default difference!');
            } else if (!((difference % Whole.DEFAULT_DIFFERENCE) === 0)) {
                console.error('DESC:', 'The custom difference must be multiple of the default difference!');
            }
        }
    }

    static isWholeNumber(num: number): boolean {
        if (Number.isFinite(num) && Number.isInteger(num) && num > -1) return true;

        return false;
    }

    getArrSet(start: number = this._firstTerm, end: number = this._lastTerm): Array<number> {
        let arrSet: Array<number> = [];

        for (let num: number = start ; num < end ; num += 1) {
            if (Whole.isWholeNumber(num)) arrSet.push(num);
        }

        return arrSet;
    }

    getTerm(position: number = this._firstTerm): number {
        try {
            if (Natural.isNaturalNumber(position)) {
                let term: number = this._firstTerm + ((position - 1) * this._difference);

                return term;
            } else {
                console.trace('ERROR');
                throw 'ERROR';
            }
        } catch {
            if (!Natural.isNaturalNumber(position)) {
                console.error('DESC:', 'The position must be natural number!');
            }
        }
    }

    getSum(position: number = this._firstTerm): number {
        try {
            if (Natural.isNaturalNumber(position)) {
                let sum: number = (position / 2) * ((2 * this._firstTerm) + ((position - 1) * this._difference));

                return sum;
            } else {
                console.trace('ERROR');
                throw 'ERROR';
            }
        } catch {
            if (!Natural.isNaturalNumber(position)) {
                console.error('DESC:', 'The position must be natural number!');
            }
        }
    }
}
