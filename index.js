// @flow
import {isFunction} from './is-function';

const localIsFunction = (f: mixed): boolean %checks => typeof f === 'function';

const main = (fun?: () => void) => {
    if (localIsFunction(fun)) {
        // this works because the predicate function is local to this module
        fun();
    }

    if (isFunction(fun)) {
        // but when the predicate function is imported from other module, it fails :(
        // it works with types_first=false
        fun();
    }
}