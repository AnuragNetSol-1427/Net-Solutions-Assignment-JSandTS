class Person{
    "name": string;
    "age": number;

    constructor(x: string, y: number){
        this.name = x;
        this.age = y;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
        // console.log("Hello, my name is" + this.name + "and I am" + this.age + "years old");
      }
}

// const a = new Person;
// a.greet("Anurag", 19);


class Student extends Person {
  "courses": string[];
  "enrolled": boolean;

  constructor(name: string, age: number, courses: string[]){
    super(name, age);
    // this.name = name;
    // this.age = age;
    this.courses = courses;
  }

  listCourses(): string[] {
    return this.courses;
  }
}

const stu = new Student("Anurag", 19, ["maths", "physics"]);
stu.greet();
stu.listCourses();
console.log(stu.listCourses());