import Logo from "./logo/index.jsx";
import Menu from "./menu/index.jsx";
import AccountManager from "./accountManager/index.jsx";

export default function Sidebar() {
    return (
        <aside className={'w-[275px] max-h-screen min-h-screen px-2 flex flex-col '}>
            <Logo/>
            <Menu/>

            <AccountManager/>
        </aside>
    )
}