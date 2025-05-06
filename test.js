let test = `{ "a": 1; }
{ "a": 1; }
{ "a": 1; }
{ "a": 1; }
{ "a": 1; }`;

test = test.split(/\r?\n/);
console.log(test.slice(3).join("\n"));