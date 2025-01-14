import { FaHotel } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineVpnKey } from "react-icons/md";
import { TbCalendarCheck } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { CardContainer, ContainerLogo, ContainerTitle, CustomIcon, EmailUser, FooterText, ImgUser, ListSide, SideStyled, SubtitleLogo, TitleLogo, TravlStyled, Ulist } from "./Dashboard";
import { ButtonDefault } from "../commons/Button";
export const DashboardSide = () => {


    return(
        <SideStyled>
            <ContainerLogo>
                <CustomIcon/>
                <ContainerTitle>
                    <TitleLogo>travl</TitleLogo>
                    <SubtitleLogo>Hotel Admin Dasboard</SubtitleLogo>
                </ContainerTitle>
            </ContainerLogo>    
            <article>
                <Ulist>
                    <ListSide><LuLayoutDashboard/>Dashboard</ListSide>
                    <ListSide><MdOutlineVpnKey/>Bookings</ListSide>
                    <ListSide><TbCalendarCheck/>Rooms</ListSide>
                    <ListSide><IoPersonOutline/>Contact</ListSide>
                    <ListSide><HiOutlinePuzzlePiece/>Users</ListSide>
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
            <FooterText>Made whit<FaHeart />by Pablo</FooterText>
        </SideStyled>
    )
}