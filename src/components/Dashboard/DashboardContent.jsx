import React from 'react';
import './DashboardCssfiles/dashboardContent.css';
import { MdMoveToInbox } from 'react-icons/md';
import { BsTags } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { TbUsers } from 'react-icons/tb';

const TrackerContainer = ({ name, Icon, amount, bckcolor }) => {
  return (
    <div className='tracker-card' style={{ backgroundColor: `${bckcolor}` }}>
      <div className='icon-div'>
        <Icon size={15} />
      </div>
      <h1 className='tracker-card-name'>{name}</h1>
      <span className='tracker-card-amount'>{amount}</span>
    </div>
  );
};
const DashboardContent = () => {
  return (
    <div className='dashboard-content'>
      <div className='dashboard-tracker'>
        <TrackerContainer
          name={'Total Revenues'}
          Icon={MdMoveToInbox}
          amount={'$2,129,430'}
          bckcolor={'#ddefe0'}
        />
        <TrackerContainer
          name={'Total Transactions'}
          Icon={BsTags}
          amount={'1,520'}
          bckcolor={'#F4ECDD'}
        />
        <TrackerContainer
          name={'Total Likes'}
          Icon={AiOutlineLike}
          amount={'9,721'}
          bckcolor={'#EFDADA'}
        />
        <TrackerContainer
          name={'Total Users'}
          Icon={TbUsers}
          amount={'892'}
          bckcolor={'#DEE0EF'}
        />
      </div>
    </div>
  );
};

export default DashboardContent;
