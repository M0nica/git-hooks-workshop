// bad styling that should fail eslint

const nameChecker = function (name) {
  if (name == 'Cardi') {
    console.log('Party with Cardi');
  }

  function doSomething() {
    console.log('do something');
  }
};
