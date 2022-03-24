"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash("12345678", 10);
    const createdAt = new Date();
    const updatedAt = createdAt;

    await queryInterface.bulkInsert("users", [
      {
        username: "Mohan",
        email: "mohan@example.com",
        password: password,
        imageUrl: `https://res.cloudinary.com/dtv8z6zgr/image/upload/v1647773985/julian-wan-WNoLnJo7tS8-unsplash_kybhum.jpg`,
        createdAt,
        updatedAt,
      },
      {
        username: "Alan",
        email: "alan@example.com",
        password: password,
        imageUrl:
          "https://res.cloudinary.com/dtv8z6zgr/image/upload/v1647773985/aiony-haust-3TLl_97HNJo-unsplash_1_wxuwix.jpg",
        createdAt,
        updatedAt,
      },
      {
        username: "Friend",
        email: "friend@example.com",
        password: password,
        imageUrl:
          "https://res.cloudinary.com/dtv8z6zgr/image/upload/v1647773985/jeremy-hynes-nHG_sF_k0w0-unsplash_hxjaan.jpg",
        createdAt,
        updatedAt,
      },
      {
        username: "Fire",
        email: "fire@example.com",
        password: password,
        imageUrl:
          "https://res.cloudinary.com/dtv8z6zgr/image/upload/v1646028901/sample.jpg",
        createdAt,
        updatedAt,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
