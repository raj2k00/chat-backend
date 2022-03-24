"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("messages", [
      {
        uuid: "7648485a-6657-48d7-87d6-6a98931d3598",
        content: "Hello there!",
        from: "Mohan",
        to: "Alan",
        hasSeen: false,
        createdAt: "2022-03-19 07:00:00",
        updatedAt: "2022-03-19 07:00:00",
      },
      {
        uuid: "ae4df4f1-a428-400d-bb16-edd4237e0c47",
        content: "How is your Studies Going?",
        from: "Alan",
        to: "Mohan",
        hasSeen: false,
        createdAt: "2022-03-19 08:00:00",
        updatedAt: "2022-03-19 08:00:00",
      },
      {
        uuid: "0a7c92ac-f69c-4799-8aad-9663a4afb47d",
        content: "Good? How about you?",
        from: "Mohan",
        to: "Alan",
        hasSeen: false,
        createdAt: "2022-03-19 09:00:00",
        updatedAt: "2022-03-19 09:00:00",
      },
      {
        uuid: "240dd560-5825-4d5d-b089-12a67e8ec84c",
        content: "Hmm. Going....",
        from: "Alan",
        to: "Mohan",
        hasSeen: false,
        createdAt: "2022-03-19 10:00:00",
        updatedAt: "2022-03-19 10:00:00",
      },
      {
        uuid: "60909592-cfd7-4b16-a1ce-709091d5f6d7",
        content: "Who are you?",
        from: "Friend",
        to: "Alan",
        hasSeen: false,
        createdAt: "2022-03-19 11:00:00",
        updatedAt: "2022-03-19 11:00:00",
      },
      {
        uuid: "a10ad37d-c70b-4093-ae33-e5d0ab9498e1",
        content: "Thats my Question",
        from: "Alan",
        to: "Friend",
        hasSeen: false,
        createdAt: "2022-03-19 12:00:00",
        updatedAt: "2022-03-19 12:00:00",
      },
      {
        uuid: "be49ab98-5271-4eb9-a630-dd6d37e420ed",
        content: "Hello there. How it is going",
        from: "Friend",
        to: "Fire",
        hasSeen: false,
        createdAt: "2022-03-19 13:00:00",
        updatedAt: "2022-03-19 13:00:00",
      },
      {
        uuid: "a10ad37d-c70b-4093-ae33-e5d0ab9429e4",
        content: "That's amazing!! Great Question!",
        from: "Fire",
        to: "Friend",
        hasSeen: false,
        createdAt: "2022-03-19 14:00:00",
        updatedAt: "2022-03-19 14:00:00",
      },
      {
        uuid: "be49ab98-5271-4eb9-a630-dd6d37e623j7",
        content: "Thanks ;)",
        from: "Friend",
        to: "Fire",
        hasSeen: false,
        createdAt: "2022-03-19 15:00:00",
        updatedAt: "2022-03-19 15:00:00",
      },
      {
        uuid: "fd4cee68-5caf-4b1b-80a9-5b9add7fd863",
        content: "Do you know who I am?",
        from: "Fire",
        to: "Mohan",
        hasSeen: false,
        createdAt: "2022-03-19 11:00:00",
        updatedAt: "2022-03-19 11:00:00",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("messages", null, {});
  },
};