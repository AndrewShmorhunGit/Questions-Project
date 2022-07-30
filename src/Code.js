import React, { useState } from "react";

const Code = () => {
  const string = [
    `// Creating some variables`,
    `var v1 = {name: "John", age: 18};`,
    `var v2 = ["red", "green", "blue", "yellow"];`,
    `var v3 = [1, 2, 3, 4, 5];`,
    `var v4 = null;`,
    "",
    `// Testing the variables data type`,
    `typeof(v1); // Returns: "object"`,
    `typeof(v2); // Returns: "object"`,
    `typeof(v3); // Returns: "object"`,
    `typeof(v3); // Returns: "object"`,
    "",
    `// Testing if the variable is an array`,
    ` Array.isArray(v1);  // Returns: false`,
    `Array.isArray(v2);  // Returns: true`,
    `Array.isArray(v3);  // Returns: true`,
    `Array.isArray(v4);  // Returns: false`,
  ];
};

export default Code;
