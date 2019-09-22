import loadable from '@loadable/component'
const Com1 = loadable(() => import('./Component/One'));
const Chat = loadable(() => import('./AppComponent/Chat'));

export default [
    {path: "/home", component: Com1, name: "Home"},
    {path: "/chatting", component: Chat, name: "Chat"},
]
