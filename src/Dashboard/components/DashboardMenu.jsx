import { useState } from "react"
import { LeftIcon, NavbarStyled, RightIcon, TitleNavbar, ContainerPage, MailIcon, BellIcon, MessageIcon} from "./Navbar";
import { CardContainer, ContainerLogo, ContainerTitle, CustomIcon, EmailUser, FooterText, IconBookings, IconContact, IconDashboard, IconHeart, IconRooms, IconUsers, ImgUser, ListSide, SectionMenu, SideStyled, SubtitleLogo, TitleLogo, TravlStyled, Ulist } from "./Dashboard";
import { ButtonDefault } from "../../commons/Button";


export const DashboardMenu = () => {

    const [side, setSide] = useState(false);

    const handleSideMenu = () => {
        setSide(!side);
    }


    return(
        <>
        <SectionMenu>
        <SideStyled style={{ display: side ? "block" : "none" }}>
            <ContainerLogo>
                <CustomIcon/>
                <ContainerTitle>
                <TitleLogo>travl</TitleLogo>
                <SubtitleLogo>Hotel Admin Dasboard</SubtitleLogo>
            </ContainerTitle>
            </ContainerLogo>    
                <article>
                    <Ulist>
                        <ListSide><IconDashboard/>Dashboard</ListSide>
                        <ListSide><IconBookings/>Bookings</ListSide>
                        <ListSide><IconRooms/>Rooms</ListSide>
                        <ListSide><IconContact/>Contact</ListSide>
                        <ListSide><IconUsers/>Users</ListSide>
                    </Ulist>
                </article>
                <CardContainer>
                    <ImgUser src="IMAGENES/RoomsDetails/1726741504852.jpg" alt="imgUser" />
                    <h3>Pablo López</h3>
                    <EmailUser>pablo.losu.dev@gmail.com</EmailUser>
                    <ButtonDefault>Contact Us</ButtonDefault>
                </CardContainer>
                <TravlStyled>Travl Hotel Admin Dashboard</TravlStyled>
                <FooterText>2025 All Rights Reserved</FooterText>
                <FooterText>Made whit<IconHeart/>by Pablo</FooterText>
                </SideStyled>
        <NavbarStyled>
            <ContainerPage>
                <RightIcon onClick={handleSideMenu} />
                <LeftIcon/>
                <TitleNavbar>DashBoard</TitleNavbar>
            </ContainerPage>
            <div>
                <MailIcon />
                <BellIcon />
                <MessageIcon />
            </div>
        </NavbarStyled>

        </SectionMenu>
        </>
    )
}