// import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';






import React, { useState } from 'react';



const Footer = ({ toggleToDoList }) => {
  const [value, setValue] = useState('home');
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 
  return (
    <div className='h-full md:rounded-lg md:shadow-lg md:ml-4 bg-white md:mt-24 md:pt-24 pt-0 pb-2 mt-4 md:pb-28'>
      <div>
      <BottomNavigation
      className="flex sm:flex-col w-full"
      value={value}
      onChange={handleChange}
      >
            <BottomNavigationAction
            label="add task"
            value="add task"
            icon={<AddTwoToneIcon style={{ width: '20px', height: '20px' }} className="bg-gray-300 rounded-sm shadow-lg" />}
            onClick={toggleToDoList}
          />
          <BottomNavigationAction
            label="home"
            value="home"
            icon={<HomeTwoToneIcon style={{ width: '20px', height: '20px' }} className="shadow-lg bg-slate-200" />}
          />
          <BottomNavigationAction
            label="alert"
            value="alert"
            icon={<NotificationsNoneTwoToneIcon style={{ width: '20px', height: '20px' }} className="shadow-lg bg-slate-200" />}
          />
          <BottomNavigationAction
            label="logout"
            value="logout"
            icon={<LogoutRoundedIcon style={{ width: '20px', height: '20px' }} className="shadow-lg bg-slate-200" />}
          />
      </BottomNavigation>
      </div>
     
    </div>
  );
};

export default Footer;
