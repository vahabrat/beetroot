import profileReducer from './profile_reducer.js'
import dialogsReducer from './dialogs_reducer.js'
import sidebarReducer from './sidebar_reducer.js'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {

    _state: {
        profilePage:{
            posts: [
                {id: 1, message:"Hi, how are you?", likesCount: 12},
                {id: 2, message:"Hi, its my first post", likesCount: 12},
                {id: 3, message:"Cool, I am glad for you", likesCount: 12},
                {id: 4, message:"Ok, then, get the fuck up out of here", likesCount: 12},
                {id: 5, message:"Fuck off, son of a bitch", likesCount: 12}
            ],
            newPostText:'it-vahabrat'
        },
        dialogsPage:{
            messages:[

            {id:1, message:'Hi'},
            {id:2, message:'How is your it-kamasutra?'},
            {id:3, message:'Yo'},
            {id:4, message:'Yo'},
            {id:5, message:'Yo'}

            ],
            dialogs:[

                {id:1, name:'Kostik'},
                {id:2,name:'Zheka'},
                {id:3,name:'Sanya'},
                {id:4,name:'Yuri'},
                {id:5,name:'Sergiy'},
                {id:6,name:'Valera'},
                {id:7,name:'Mymra'},
                {id:8,name:'Markiz'},
                {id:9,name:'Oksanka'},
                {id:10,name:'Vova'},
                {id:11,name:'Alisochka'},
                {id:12,name:'Bubik'}

            ],

            newMessageBody:""
        },
        sidebar:{}
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State has been changed')
    },

    subscribe(observer){
        this._callSubscriber = observer; //observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;