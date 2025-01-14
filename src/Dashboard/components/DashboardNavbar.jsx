import { LeftIcon, NavbarStyled, RightIcon, TitleNavbar, ContainerPage, MailIcon, BellIcon, MessageIcon} from "./Navbar";

export const DashboardNavbar = () => {


    return(
        <NavbarStyled>
            <ContainerPage>
                <RightIcon />
                <LeftIcon/>
                <TitleNavbar>DashBoard</TitleNavbar>
            </ContainerPage>
            <div>
                <MailIcon />
                <BellIcon />
                <MessageIcon />
            </div>

        </NavbarStyled>
    )
}