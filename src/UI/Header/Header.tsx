import React from 'react';
import './Header.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CreateNote from '../../Component/CreateNote';
import { Link, Route, useLocation, useNavigate } from 'react-router-dom';
import ViewNotes from '../../Component/ViewNotes'


const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleChange = (e: any, value:string) => {
      navigate(value);
    }

    return (<header className="App-header">
        <Tabs onChange={handleChange} 
          value={location.pathname}>
            <Tab sx={{color: 'white'}} label="Create Note" value='/' />
            <Tab sx={{color: 'white'}} label="All Notes" value='/notes' />
        </Tabs>
    </header>);
}
export default Header;