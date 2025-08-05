// export function logMethodInfo(origMethod: any, _context: ClassMethodDecorator Context) {
// 	function replacementMethod(this:any, ... args:any[]) {
// 		console.log(`Decorated construst: ${_context.kind}`);
// 		console.log(`Decorated construct name: ${_context.name as string}`);
// 		const result = origMethod.call(this, ...args);
// 		return result;
// 	}
// 	return replacementMethod;
// }