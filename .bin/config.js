require('dotenv').config();

const config = {
  OWNER: 'pestotech',
  EXERCISE_REPO_NAME: 'exercises',
  GITHUB_API_KEY: process.env.GITHUB_API_KEY,
  JS_EXERCISES_FOLDER_NAME: 'js-exercises',
  SKILLS_EXERCISE_FOLDER_NAME: 'skills-exercises',
  REACT_EXERCISE_FOLDER_NAME: 'react-exercises',
  ALL_QUESTION_TYPES: ['skills', 'react', 'js', 'algo', 'node']
};

module.exports = config;
