const getRandomDemoUserEmail = () => {

  // pw all 123456
  const demoUserEmails = [
    'norris.k@gmail.com',
    'aaron.wayne@gmail.com',
    'dallas.tall@gmail.com',
    'louis.cruz@gmail.com',
    'debrafong@gmail.com'
  ];

  const max = Math.floor(demoUserEmails.length - 1);
  const idx = Math.floor(Math.random() * max);

  return demoUserEmails[idx];
};

export default getRandomDemoUserEmail;
