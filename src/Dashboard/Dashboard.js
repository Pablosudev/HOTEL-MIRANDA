import styled from "styled-components";
import { FaHotel } from "react-icons/fa6";

export const SideStyled = styled.section`
    max-width: 20.9rem;
    padding-left: 3.5rem;
    padding-right:3.5rem;
`
export const ContainerLogo = styled.article`
    display: flex;
    aling-items: center;
    margin-left: 2rem;
    margin-top: 2rem
`
export const TitleLogo = styled.h2`
    margin-bottom: 0%;
    font-weigth:20rem;
    
`
export const SubtitleLogo = styled.p`
    margin-top: 0.2rem;
    text-align: left;
    font: normal normal 300 12dp/18dp ;
    letter-spacing: 0dp;
    color: rgba(93, 84, 73, 1);
    opacity: 1;
`
export const ContainerTitle = styled.div`
    margin-left: 2rem;
`
export const Ulist = styled.ul`
    text-align: left;
    font-size: 18px;
    letter-spacing: 0dp;
    color: rgba(121, 146, 131, 1);
    opacity: 1;
    list-style: none;
    margin-top: 3rem;
`
export const ListSide = styled.li`
    margin-bottom: 1rem;
`
export const CardContainer = styled.article`
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.08);
    border-radius: 18px;
    text-align: center;
    width: 14.5rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-bottom: 2rem;
`
export const ImgUser = styled.img`
    background: var(--unnamed-color-c5c5c5) 0% 0% no-repeat padding-box;
    background: rgba(197, 197, 197, 1) 0% 0% no-repeat padding-box;
    border-radius: 8px;
    width:  4.3rem;
    height: 4.3rem;
`
export const EmailUser = styled.p`
    letter-spacing: 0px;
    color: rgba(178, 178, 178, 1);
    opacity: 1;
`
export const TravlStyled = styled.h4`
    letter-spacing: 0px;
    color: rgba(33, 33, 33, 1);
    opacity: 1;
    margin-bottom: 0%;
`
export const FooterText = styled.p`
    letter-spacing: 0px;
    color: rgba(121, 146, 131, 1);
    opacity: 1;
    margin-bottom: 3rem;
`
export const CustomIcon = styled(FaHotel)`
    color: rgba(19, 88, 70, 1);
    margin-top: 1rem;
    font-size: 3rem;
` 
