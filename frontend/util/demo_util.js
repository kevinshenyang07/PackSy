const getRandomDemoUser = () => {

  const demoUsers = [
    { email: 'norris.k@gmail.com', password: '123456'},
    { email: 'aaron.wayne@gmail.com', password: '123456'},
    { email: 'dallas.tall@gmail.com', password: '123456'},
    { email: 'debrafong@gmail.com', password: '123456'},
    { email: 'louis.cruz@gmail.com', password: '123456'},
  ];

  const max = Math.floor(demoUsers.length - 1);
  const idx = Math.floor(Math.random() * max);

  return demoUsers[idx];
};

export default getRandomDemoUser;
