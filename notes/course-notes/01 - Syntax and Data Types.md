# 01 - Syntax and Data Types

## Basic Types and Variable Declarations
- When using var (global), a variable can be called before it is declared.
	- let does not work in this sense and will return an error
- let, var, const

## Type Annotations
- Example: let x: string = ‘I will forever be a string’;
- Cannot assign a new type of value to something that has already been initialized (even without annotations)

## Built-in (Optional) Types
- Void: Represents absence of a type
- Null:Can be assigned any type
- Undefined: Can be assigned any type
- Never
- Any: When you effectively want to opt out of type checking by the compiler, can assign any value to it

## Union Types
- Example: let someValue: number | string May contain either a number or string
- Compiler Option: –strictNullChecks
- Null and undefined are no longer valid values for every other type


## Arrays
- Example 1: let strArray1: string[] - [‘here’, ‘are’, ‘strings’];
- Example 2: let strArray2: Array<string> = [‘here’, ‘are’, ‘more’, ‘strings’]
- Example 3: let anyArray: any[] = [42, true, ‘banana’]

## Controlling Program Flow
- For statement: for(initialisation, condition, action) {}
- While Statement: while(condition) {}
- Switch Statement Example
		<pre> 
	```typescript
	
		let fruit: string = 'apple';

		switch(fruit) {
			case `orange`:
				console.log("You have selected an orange.);
				break;
			case `apple`:
				console.log("You have selected an apple.`);
			default:
				console.log(`You have selected a different fruit`);
		}
	```
	</pre>

