module.exports = {
  invalidQuestionNameMessage(questionName) {
    return `${questionName} does not seem to be in correct case.
Please make sure that the question name is in kebab-case.\n`;
  },
  noFilePresentMessage(questionName) {
    return `${questionName} does not contain any files. Please check the question name again.
If the name is correct, contact instructors.`;
  },
};
