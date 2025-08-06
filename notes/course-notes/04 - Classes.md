# 04 - Classes
- Class Definition
	- Template for creating objects
	- Provides state storage and behavior
	- Encapsulates reusable functionality
- Define types, properties and methods, constructors, access modifiers, inheritance, and abstract classes

## Parts of a Class
- Constructor
	- Method named “constructor” – maximum of one per class
	- Use optional parameters to call different ways
	- Executed by using the “new” keyword
	- Example: 

		<pre>
	```typescript
	class ReferenceItem {
		constructor(title:string, publisher?: string) {
			// perform initialization
		}
	}

	let encyclopedia = new ReferenceItem(`WorldPedia`, `WorldPub);
	```
	</pre>

## Properties and Methods
- Like interfaces, can contain properties and methods, but unlike interfaces, includes the implementation
- Accessors: getter and setter methods (get/set keywords)
	- Get: optional to set a type
	- Set: Not allowed to specify a return type
	- Call methods on a class using the dot syntax

		
	```typescript
	class ReferenceItem {
		numberOfPages: number;
		get editor(): string {
			// custom getter logic goes here, should return value
		}
		set editor (newEditor: string) {
			// custom setter logic goes here
		}

		printChapterTitle(chapterNum: number): void {
			// print title here
		}

## Parameter Properties
- Initialize properties on a new object by passing parameters to class’s constructor, then setting the properties equal to the parameters inside of the constructor
		
	
	```typescript
	class Author {
		name: string;
		constructor(authorName: string) {
			name = authorName;
		}
	}
	class Author {
		constructor(public name: string) { }
	}
	```
	- public name: want the same name as the parameter and that it should be set equal to the value passed to the constructor
- Static Properties (of the class itself, not instances)
	```typescript
		class Library {
			constructor(public name: string) { }
			static descrition: string = "A source of knowledge";
		}

		let lib = new Library ('New York Public Library);
		let name = lib.name // available on instance of class
		let desc = Library.description // available on class
	```
- Access Modifiers (control visibility for consumers of a class)
	- Public (Default): Required to declare a constructor parameter as a class property
	- Private: Declare that a class member should only be accessible inside that class
		- Not accessible to consumers of the class/subclass
		- `# (private field): extra protection
	- Protected: Only available inside the class in which they’re declared and any subclass of that class

# Inheritance
```typescript
	class ReferenceItem {
		title: string;
		printItem(): void { }
	}

	class Journal extends ReferenceItem {
		constructor() {
			super();
		}

		contributors: string[];
	}
	
```

- super() → used to inherit from the parent class

## Abstract Classes
- Created with the “abstract” keyword
- Base classes that may not be instantiated, can only create instances of subclasses
- May contain implementation details
- Abstract methods are not implemented

## lass Expressions
- Define a class but can only be used when you’re creating other expressions
- Example 1: 
	```typescript
		let Musical = class extends Video {
			printCredits(): void {
				console.log(`Musical credits: ${this.producer}`);
			}
		}
	```

