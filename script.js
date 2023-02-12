// this is an objcet -- constructor

// ekta constructor banaw
// er vitore 5ta subject naw
// protita subject er mark er jonno ek ekta function banaw
// last ekta function banaw jate sob result dekha jai ebong student ta pass na fall ta dekhai result er sathe

function Student(Name) {
  this.UserName = Name;

  this.MarkSheet1 = function (Bangla) {
    return Bangla;
  };
  this.MarkSheet2 = function (English) {
    return English;
  };
  this.MarkSheet3 = function (Math) {
    return Math;
  };
  this.MarkSheet4 = function (Accounting) {
    return Accounting;
  };
  this.MarkSheet5 = function (Menagement) {
    return Menagement;
  };
  this.GoodBachOfTheYear = function (
    Bangla,
    English,
    Math,
    Accounting,
    Menagement
  ) {
    return (
      this.UserName +
      " Bangla : " +
      Bangla +
      " Eanglish : " +
      English +
      " Math : " +
      Math +
      " Accounting : " +
      Accounting +
      " Menagement : " +
      Menagement
    );
  };
}
let Result = new Student("Ismail");

console.log(Result.GoodBachOfTheYear(40, 50, 90, 40, 61));

let Results = new Student("Nazmul");

console.log(Results.GoodBachOfTheYear(60, 50, 90, 60, 61));
