import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {mainMenu} from "../../../../utils/consts.jsx";
import Button from "../../../../components/button/index.jsx";
import More from "./more/index.jsx";
import New from "./new/index.jsx";

export default function Menu() {
    return (
        <nav className={'mt-0.5 mb-1'}>
            {
                mainMenu.map((menu, index) => (
                    <NavLink to={menu.path} className={'block group'} key={index}>
                        {({isActive}) => (
                            <div
                                className={classNames('p-3 rounded-full inline-flex transition-colors items-center gap-5 group-hover:bg-[#eff3f41a]', {
                                    'font-bold': isActive
                                })}>
                                <div className={'w-[26.25px] h-[26.25px] relative'}>
                                    {menu?.notification && <span
                                        className={'w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px] border-black border-solid border-[1px]'}>{menu?.notification}</span>}
                                    {isActive && menu.icon.active}
                                    {!isActive && menu.icon.passive}
                                </div>
                                <div className={'text-xl pr-4'}>
                                    {menu.title}
                                </div>
                            </div>
                        )}
                    </NavLink>
                ))
            }
           <More/>
            <New/>
        </nav>
    )
}