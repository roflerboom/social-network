// import renderEntireTree from "../render";

let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscrider() {},
  addPost() {
    let newPost = {
      key: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postsList.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscrider(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscrider(this._state);
  },
  subscribe(observer) {
    this._callSubscrider = observer;
  },
};

export default store;
window.Storage = store;
