// const data ={
//     professionalName: 'Arden Dubiel',
//   nameLink: {
//     firstName: 'Arden',
//     // url: 'https://nathanbirch.netlify.app/',
//   },
//   base64Image: 'lalalala',
//   firstName: 'Arden',
//   primaryDescription: ' is a student at BYUI',
//   workDescription1:
//     'She is majoring in Web Design and Devlopement',
//   workDescription2:
//     'She stays very busy with all her classes and other activites',
//   linkTitleText: 'Check out my work below',
//   linkedInLink: {
//     link: 'https://www.linkedin.com/in/arden-dubiel/',
//     text: 'LinkedIn',
//   },
//   githubLink: {
//     link: 'https://github.com/Ardenz1',
//     text: 'GitHub',
//   },
  
// };

// exports.getData = (req, res, next) => {
//     res.status(200).json(data)
// };

const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('user').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]); // we just need the first one (the only one)
  });
};

module.exports = { getData };