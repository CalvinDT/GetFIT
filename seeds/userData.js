

const { User } = require('../models');

const userData = [
    {
      "user_name": "Sal",
      "email": "sal@hotmail.com",
      "password": "password12345",
      "age": "25",
      "weight": "150",
      "height": "180"
    },
    {
      "user_name": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "password12345",
      "age": "29",
      "weight": "190",
      "height": "175"
    },
    {
      "user_name": "Amiko",
      "email": "amiko2k20@aol.com",
      "password": "password12345",
      "age": "22",
      "weight": "140",
      "height": "150"
    },
    {
      "user_name": "Jordan",
      "email": "jordan99@msn.com",
      "password": "password12345",
      "age": "30",
      "weight": "150",
      "height": "160"
    },
    {
      "user_name": "Blake",
      "email": "the_blake@yahoo.com",
      "password": "password12345",
      "age": "35",
      "weight": "150",
      "height": "180"
    }
  ];

  const seedUserData = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,});

  module.exports = seedUserData;