const possibleValues = ['true', 'false', '!true', '!false', '^', '&', '|'];

const isGarbagevalue = (expression) => {
  const expressionArr = expression.split(' ');
  return expressionArr.every((value) => possibleValues.includes(value));
};

function booleanExpressionEvaluator(expression) {
  if (typeof expression !== 'string') throw Error(`Expected String, received ${typeof expression}`);
  if (!isGarbagevalue(expression)) throw Error('Expected the expression to be compose of - true, false, !, ^, &, !');
  return !!eval(expression);
}

export { booleanExpressionEvaluator };
