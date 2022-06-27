//for using  export default we can call the class without braces
// in one file we can export  default only one class
export default class Person{
    constructor(schoolName,classId){
        this.schoolName=schoolName;
        this.classId=classId;
    }

    info(){
        console.log(this.schoolName,this.classId);
    }
}


export class Person2{
    constructor(schoolName,classId){
        this.schoolName=schoolName;
        this.classId=classId;
    }

    info(){
        console.log(this.schoolName,this.classId);
    }
}
