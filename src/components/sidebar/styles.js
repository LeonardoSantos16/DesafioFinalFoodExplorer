import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%; 
  width: 100%; 
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  color: white;
  transition: width 0.3s ease;
  z-index: 1000;
`;
export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; 
  transition: width 0.3s ease;
  position: rela;
`;
export const HeaderSidebar = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 11.4rem;
    left: 0px;
    top: 0px;
    padding: 2.4rem 2.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    
  
`
export const ButtonBackSidebar = styled.button`
    border: none;
    background: none;
    color: #ffffff;
    width: 18px;
    height: 18px;
`
export const HeaderContent = styled.div`
    display: flex;
    gap: 1.6rem;
    align-items: center;
      >h2{
        width: 54px;
        height: 25px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 21.1629px;
        line-height: 25px;
        color: #FFFFFF;
    }
`


export const Nav = styled.nav`
  list-style-type: none;
  padding: 0 2.8rem;
  margin-top: 3.6rem;
`;

export const FoodTitle = styled.h1`
  ${({ theme }) => theme.fonts.poppinsRegular300}
  color: #E1E1E6;
  border-bottom: 1px solid #192227;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
`

export const FoodSearch = styled.h2`
  box-sizing: border-box;
  padding: 5px 10px;
  >p{
    ${({ theme }) => theme.fonts.poppinsMedium100}
    color: #E1E1E6;
  }
`

export const NavHeader = styled.a`
  text-decoration: none;
  ${({ theme }) => theme.fonts.poppinsRegular300}
  color: #E1E1E6;
  border-bottom: 1px solid #192227;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
`