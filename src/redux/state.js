const state = {
  profilePage: {
    postsList: [
      { key: 1, message: "Привет, Машенька", likesCount: 12 },
      { key: 2, message: "Привет, Мишенька", likesCount: 1213 },
      { key: 3, message: "Привет, Мишенька", likesCount: 1213 },
      { key: 4, message: "Привет, Мишенька", likesCount: 1213 },
    ],
  },
  dialogsPage: {
    dialogsList: [
      { key: 1, name: "Misha" },
      { key: 2, name: "Masha" },
    ],

    messagesList: [
      { key: 1, message: "Привет, Машенька" },
      { key: 2, message: "Привет, милый. Как же я тебя люблю!" },
      { key: 3, message: "Привет, милый. Как же я тебя люблю!" },
    ],
  },
  usersList: [
    { key: 1, name: "Misha", secondname: "Sokolov" },
    { key: 2, name: "Masha", secondname: "Peresypkina" },
  ],
};

export default state;
