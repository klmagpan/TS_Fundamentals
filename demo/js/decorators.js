"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMethodInfo = logMethodInfo;
// Logs method info, calling the original method
function logMethodInfo(origMethod, context) {
    function replacementMethod(...args) {
        console.log(`Decorated construst: ${context.kind}`);
        console.log(`Decorated construct name: ${context.name}`);
        const result = origMethod.call(this, ...args);
        return result;
    }
    return replacementMethod;
}
//# sourceMappingURL=decorators.js.map