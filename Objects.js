let person = {
    firstName: "Rahul",
    lastName: "Attuluri",
    age: 28,
    run: function () {
      console.log("Start Running.");
    },
    habits: ["Playing Chess", "Singing", "Dancing"],
    car: {
      name: "Audi",
      model: "A6",
      color: "White",
    },
  };
  
  person.run();
  
  console.log(person.car.name);
  
  console.log(person.car["model"]);