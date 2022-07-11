




class Person { 

    constructor(name) {
        this.name = name;
    }

    greet() {
        document.writeln(`Hello Mr. ${this.name}. How are you ? `)
    }
}


class Student extends Person {

}

let student1 = new Student('Huseyn hocam');

student1.greet()