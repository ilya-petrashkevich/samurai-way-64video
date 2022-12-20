import {profileReducer, addPostAC, updateNewPostTextAC, setUserProfile} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reduser";
import navbarReducer from "./navbar-reducer";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingProgress,
    toggleIsFetching,
    unfollow,
    usersReducer,
    UserType
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";


export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

export type newMessageBodyType = string
// let newMessageBody: newMessageBodyType = "";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type newPostTextType = string //это под снос
// let newPostText: newPostTextType = 'it-kamasutra.com'; //это под снос

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null | string
        vk: string
        twitter: string
        instagram: string
        youtube: null | string
        github: string
        mainLink: null | string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
//ЭТО КОСТЫЛЬ ЧТО БЫ ВСЁ НЕ ПАДАЛО!!
// let profile: ProfileType = {
//     "aboutMe": "!!!!!",
//     "contacts": {
//         "facebook": "!!!!!",
//         "website": null,
//         "vk": "!!!!!",
//         "twitter": "!!!!!!!!!!!!",
//         "instagram": "!!!!!!!!!!!",
//         "youtube": null,
//         "github": "!!!!!!!!!!!!",
//         "mainLink": null
//     },
//     "lookingForAJob": true,
//     "lookingForAJobDescription": "!!!!!!!!!!!!!!",
//     "fullName": "!!!!!!!!!!!!!",
//     "userId": 1,
//     "photos": {
//         "small": ''/*"https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0"*/,
//         "large": ''/*"https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"*/
//     }
// };

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: newPostTextType
    profile: ProfileType
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType

    usersPage: UsersPageType
    sidebar: {}
}

// let pageSize = 0;
// let totalUsersCount = 0;
// let currentPage = 0;
// let isFetching = false;
//
// let dialogs: DialogsType[] = [
//     {id: 1, name: "Dimich"},
//     {id: 2, name: "Andrew"},
//     {id: 3, name: "Sveta"},
//     {id: 4, name: "Sasha"},
//     {id: 5, name: "Viktor"},
//     {id: 6, name: "Valera"},
// ];
//
// let messages: MessagesType[] = [
//     {id: 1, message: "Hi"},
//     {id: 2, message: "How are you"},
//     {id: 3, message: "Yo"},
//     {id: 4, message: "Bla"},
//     {id: 5, message: "Blabla"},
//     {id: 6, message: "Blablabla"},
// ];
//
// let posts: PostsType[] = [
//     {id: 1, message: "Hi, how are you?", likesCount: 12},
//     {id: 2, message: "It`s my first post", likesCount: 5},
// ];
//
// let users: UserType[] = [
//     {
//         id: 1,
//         photoURL: 'https://comp-pro.ru/wp-content/uploads/b/7/0/b702c0cdba04fbaca0a1226ecf052fac.jpeg',
//         followed: false,//fullName: 'Dmitry'
//         name: 'Dmitry',
//         status: 'boss',
//         location: {city: 'Minsk', country: 'Belarus'}
//     },
//     {
//         id: 2,
//         photoURL: 'https://comp-pro.ru/wp-content/uploads/b/7/0/b702c0cdba04fbaca0a1226ecf052fac.jpeg',
//         followed: true, //fullName: 'Sasha'
//         name: 'Sasha',
//         status: 'boss',
//         location: {city: 'Moscow', country: 'Russia'}
//     },
//     {
//         id: 3,
//         photoURL: 'https://comp-pro.ru/wp-content/uploads/b/7/0/b702c0cdba04fbaca0a1226ecf052fac.jpeg',
//         followed: false, //fullName: 'Andrew'
//         name: 'Andrew',
//         status: 'boss',
//         location: {city: 'Kiev', country: 'Ukraine'}
//     }
// ];


// export let state: StateType = {
//     dialogsPage: {
//         dialogs,
//         messages
//     },
//     profilePage: {
//         posts,
//         newPostText //эта строчка под снос
//     }
// }

// export let addPost = (postMessage?: string) => {
//     let newPost: PostsType = {
//         id: state.profilePage.posts.length + 1, // или просто номер вставлять вручную
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     onChange();
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     onChange();
// }

// export type StoreType = {
//     _state: StateType
//     _onChange: () => void
//     subscribe: (callback: () => void) => void
//     getState: () => StateType
//     dispatch: (action: ActionsTypes) => void // в значение ключа action можно напрямую вставить AddPostActionType | UpdateNewPostTextActionType
// }

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>;


// export const store: StoreType = {
//     _state: {
//         dialogsPage: {
//             dialogs,
//             messages,
//             newMessageBody
//         },
//         profilePage: {
//             posts,
//             newPostText, //эта строчка под снос
//             profile
//         },
//         usersPage: {
//             users,
//             pageSize,
//             totalUsersCount,
//             currentPage,
//             isFetching
//         },
//         sidebar: {}
//     },
//     _onChange() {
//         console.log('State was changed')
//     },
//     subscribe(callback/*: () => void*/) {
//         this._onChange = callback;
//     },
//     getState() {
//         return this._state;
//     },
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.usersPage = usersReducer(this._state.usersPage, action)
//         this._state.sidebar = navbarReducer(this._state.sidebar, action)
//
//         // this._state.usersPage = usersReducer(this._state.usersPage, action)
//
//         this._onChange();
//     }
// }
