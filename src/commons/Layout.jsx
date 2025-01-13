import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { InputStyled, NavbarStyled } from "./LayoutStyle";



export const Layout = () => {


    return(
        <>
        <header>
            <NavbarStyled>
                {<HiOutlineMenuAlt2/>}
                <InputStyled type="text" />
                <button><CiSearch /></button>
                <MdOutlineEmail />
                <FaRegBell/>
                <MdOutlineMessage />
            </NavbarStyled>
        </header>
        </>
    )
}