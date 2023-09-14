// import renderEntireTree from "../render";

let renderEntireTree = () => {};
const state = {
  profilePage: {
    postsList: [
      { key: 1, message: "Привет, Машенька", likesCount: 12 },
      { key: 2, message: "Привет, Мишенька", likesCount: 1213 },
      { key: 3, message: "Привет, Мишенька", likesCount: 1213 },
      { key: 4, message: "Привет, Мишенька", likesCount: 1213 },
    ],
    newPostText: "Пример текста из state.js",
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
  sideBar: {},
};

export const addPost = () => {
  let newPost = {
    key: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postsList.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};

export const apdateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
};

export default state;
