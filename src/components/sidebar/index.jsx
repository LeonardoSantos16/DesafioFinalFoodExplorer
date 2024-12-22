import React, {useEffect, useState} from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { SidebarContainer, SidebarContent, Nav, FoodTitle, NavHeader, FoodSearch, HeaderSidebar, HeaderContent, ButtonBackSidebar } from './styles';
import { X } from '@phosphor-icons/react';
import { Input } from '../input';
import { useTheme } from 'styled-components';
import { api } from '../../services/api';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/authContext'
const Sidebar = ({ isOpen, toggleSidebar }) => {
    const theme = useTheme();
    const [search, setSearch] = useState('')
    const [data, setData] = useState()
    const navigate = useNavigate();
    const {isAdmin, signOut} = useAuth()
    const handleNavigateDetails = (id) => {
      navigate(`/details/${id}`);
    };

    function handleNewPrate() {
      navigate('/new')
    }

    function handleSignOut() {
      signOut()
    }
      const fetchSearch = async () => {
        const response = await api.get(`/food?query=${search}`);
        setData(response.data);
      };
    
      useEffect(() => {
        if (search) {
          fetchSearch();
        }
      }, [search]);
  return (
    <SidebarContainer >
      <SidebarContent >
        <HeaderSidebar>
            <HeaderContent>
                <ButtonBackSidebar onClick={toggleSidebar} >
                    <X size={18} />
                </ButtonBackSidebar>
                <h2>Menu</h2>
            </HeaderContent>
        </HeaderSidebar>
        <Nav>
            <Input
                icon={MagnifyingGlass}
                placeholder="Busque por pratos ou ingredientes"
                backgroundcolor={theme.COLORS.DARK_900}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                width='25rem'
                color='ffffff'
            />
            {isAdmin &&          
              <NavHeader onClick={handleNewPrate}>
                Novo Prato
              </NavHeader>
            }
            <NavHeader onClick={handleSignOut}>Sair</NavHeader>
            {data && (
             <>
             <FoodTitle>Comidas</FoodTitle>
             {data.map((item) => (
                 <FoodSearch key={item.id} onClick={() => handleNavigateDetails(item.id)}>
                     <p>{item.title}</p>
                 </FoodSearch>
             ))}
            </>
          )}
        </Nav>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
