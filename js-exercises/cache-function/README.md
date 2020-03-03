# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**

Web Page Caching: In order make mobile/web app lightweight & flexible UI, you can create dynamic web pages in the server & serve it through api along with appropriate data. So if you have millions of users, you can serve such on the fly created full/fragmented web pages from the cache for a certain time period.

### **What _extra_ test cases can you add to the test file?**

_Add relevant test-cases in the test file_
