# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**

It represents a form of Memoization, which can really helpful in avoiding a heavy computation again and again. For example very simple example can be when calculating Fibonacci numbers. Memoization technique can be used, or in cases where IO/ heavy computation operation is required, the same can be used but every side has a pro and con. Memoziation uses memory so we should be well aware of the same before appling these techniques.

### **What _extra_ test cases can you add to the test file?**

_Add relevant test-cases in the test file_
