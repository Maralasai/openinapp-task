import React, { useEffect } from 'react';
import './DashboardCssfiles/dashboard.css';
import DashboardHeader from './DashboardHeader';
import DashboardContent from './DashboardContent';
import { AiOutlineSetting, AiOutlineDown } from 'react-icons/ai';
import { BiUserCircle, BiChevronDown } from 'react-icons/bi';
import { TbCalendarTime, TbClockHour3 } from 'react-icons/tb';
import TodaysSchedule from './TodaysSchedule';
import {
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from 'recharts';
const values = [
  { guest: 480, user: 400, week: 'Week 1' },
  { guest: 280, user: 420, week: 'Week 2' },
  { guest: 600, user: 350, week: 'Week 3' },
  { guest: 390, user: 300, week: 'Week 4' },
  // { name: 'Fri', guest: 260, user: 250, week: 'Week 1' },
  // { name: 'Sat', guest: 250, user: 200, week: 'Week 1' },
  // { name: 'Sun', guest: 230, user: 180, week: 'Week 1' },
  // { name: 'Mon', guest: 210, user: 150, week: 'Week 2' },
  // { name: 'Tue', guest: 200, user: 200, week: 'Week 2' },
  // { name: 'Wed', guest: 220, user: 230, week: 'Week 2' },
  // { name: 'Thu', guest: 235, user: 280, week: 'Week 2' },
  // { name: 'Fri', guest: 250, user: 310, week: 'Week 2' },
  // { name: 'Sat', guest: 265, user: 350, week: 'Week 2' },
  // { name: 'Sun', guest: 280, user: 380, week: 'Week 2' },
  // { name: 'Mon', guest: 300, user: 420, week: 'Week 3' },
  // { name: 'Tue', guest: 290, user: 430, week: 'Week 3' },
  // { name: 'Wed', guest: 280, user: 420, week: 'Week 3' },
  // { name: 'Thu', guest: 265, user: 350, week: 'Week 3' },
  // { name: 'Fri', guest: 250, user: 300, week: 'Week 3' },
  // { name: 'Sat', guest: 240, user: 250, week: 'Week 3' },
  // { name: 'Sun', guest: 230, user: 220, week: 'Week 3' },
  // { name: 'Mon', guest: 220, user: 190, week: 'Week 4' },
  // { name: 'Tue', guest: 230, user: 180, week: 'Week 4' },
  // { name: 'Wed', guest: 250, user: 190, week: 'Week 4' },
  // { name: 'Thu', guest: 300, user: 200, week: 'Week 4' },
  // { name: 'Fri', guest: 350, user: 215, week: 'Week 4' },
  // { name: 'Sat', guest: 400, user: 230, week: 'Week 4' },
 // { name: 'Sun', guest: 440, user: 250, week: 'Week 4' },
];
const Dashboard = () => {
  const val1 = 14,
    val2 = 31,
    val3 = 55;
  return (
    <div className='main-dashboard-div'>
      
      <div className='sidebar'>
        <div className='sidebar-title'>Board.</div>
        <div className='sidebar-menu1'>
          <div style={{marginTop:50,display:'flex',alignItems:'center',marginBottom:30}}>
            <TbClockHour3 size={15} style={{marginRight:5}}/>
            <h1>Dashboard</h1> 
          </div>
          
          <div style={{display:'flex',alignItems:'center',marginBottom:30}}>
            <TbCalendarTime size={15} style={{marginRight:5}}/>
            <h3>Transactions</h3> 
          </div>
          <div style={{display:'flex',alignItems:'center',marginBottom:30}}>
            <BiUserCircle size={15} style={{marginRight:5}}/>
            <h3>Schedules</h3> 
          </div>
          <div style={{display:'flex',alignItems:'center',marginBottom:30}}>
            <AiOutlineSetting size={15} style={{marginRight:5}}/>
            <h3>Users</h3> 
          </div>
          <div style={{display:'flex',alignItems:'center',marginBottom:30}}>
            <TbClockHour3 size={15} style={{marginRight:5}}/>
            <h3>Setting</h3> 
          </div>
        </div>
        <div className='sidebar-menu2'>
          <h3>Help</h3><br/>
          <h3>Contact Us</h3>
        </div>
      </div>

      <div className='dashboard-page'>
        <DashboardHeader />
        <DashboardContent />
        <div className='graph'>
          <div className='graph-headings'>
            <div className='graph-headings-left'>
              <h1>Activities</h1>
              <h2>
                May - June 2021 <BiChevronDown />
              </h2>
            </div>
            <div className='chart-vars-divs'>
              <div className='chart-vars'>
                <div
                  className='circle-mention'
                  style={{ backgroundColor: '#ee8484' }}
                ></div>
                <h1>Guest</h1>
              </div>
              <div className='chart-vars'>
                <div
                  className='circle-mention'
                  style={{ backgroundColor: '#9bdd7c' }}
                ></div>
                <h1>User</h1>
              </div>
            </div>
          </div>
          <div className='chart'>
            <ResponsiveContainer minHeight={'100%'} minWidth={'100%'}>
              <BarChart data={values}>
                <Bar
                  type='monotone'
                  dataKey={'guest'}
                  fill='#ee8484'
                  dot={false}
                  barSize={40}
                />
                <Bar
                  type='monotone'
                  dataKey={'user'}
                  fill='#9BDD7C'
                  dot={false}
                  barSize={40}
                />
                <CartesianGrid stroke='#EAEAEA' vertical={false} />
                <XAxis
                  hide={true}
                  tick={false}
                  xAxisId={'0'}
                  dataKey={'week'}
                />
                <XAxis
                  // tick={false}
                  axisLine={false}
                  xAxisId={'1'}
                  dataKey={'week'}
                  allowDuplicatedCategory={false}
                  color='#858585'
                />
                <YAxis color='#858585' />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className='third-section'>
          <div className='top-products-section'>
            <div className='top-products-section-headings'>
              <h1>Top Products</h1>
              <h4>
                May - June 2021
                {/* <AiOutlineDown size={20} color='#858585' /> */}
              </h4>
            </div>
            <div className='piechart-main'>
              <div className='piechart'>
                <div
                  className='x-box'
                  style={{
                    background: `
    repeating-conic-gradient(
    from 15deg,
    #ee8484 0deg calc(3.6deg * ${val1}),
    #f7dc7d calc(3.6deg * ${val1}) calc(3.6deg * ${val1 + val2}),
    #98d89e calc(3.6deg * ${val1 + val2}) calc(3.6deg * ${val1 + val2 + val3})
     `,
                  }}
                ></div>
              </div>
              <div className='piechart-details'>
                {[
                  { val: val3, name: 'Basic Tees', clr: '#98d89e' },
                  { val: val2, name: 'Custom Short Pants', clr: '#f7dc7d' },
                  { val: val1, name: 'Super Hoodies', clr: '#ee8484' },
                ].map((item, i) => {
                  return (
                    <div className='piechart-details-divs' key={i}>
                      <div className='piechart-details-divs-head'>
                        <div
                          className='circle'
                          style={{
                            backgroundColor: `${item.clr}`,
                            height: '7px',
                            width: '7px',
                            borderRadius: '50%',
                          }}
                        ></div>
                        <h1 style={{fontWeight:600}}>{item.name}</h1>
                      </div>
                      <div className='piechart-details-divs-base'>{`${item.val}%`}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='todays-schedule-section'>
            <TodaysSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
