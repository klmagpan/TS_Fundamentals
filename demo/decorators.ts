// Logs method info, calling the original method
export function logMethodInfo(origMethod: any, context: ClassMethodDecoratorContext) {
	function replacementMethod(this:any, ... args:any[]) {
		console.log(`Decorated construst: ${context.kind}`);
		console.log(`Decorated construct name: ${context.name as string}`);
		const result = origMethod.call(this, ...args);
		return result;
	}
	return replacementMethod;
}
