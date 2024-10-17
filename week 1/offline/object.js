// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj); // objects is a class and keys is a static method , it creats arrays of the keys of an array
  console.log("After Object.keys():", keys);

  let values = Object.values(obj); // similar to keys but creates arrays of  values
  console.log("After Object.values():", values);

  let entries = Object.entries(obj); // it creates arrays of arrays of keys and value
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property"); // it returns true , if object has the specified key
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" }); // it creats a new object after adding the specified properties to it
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
