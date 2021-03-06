import React from 'react';
import './Report.scss';
import ReportForm from '../../layout/ReportForm/ReportForm';
import RecentReports from '../../layout/RecentReports/RecentReports';
import rescue from '../../../images/rescue.png';

// import Navbar from '../layout/Navbar/Navbar';
// import Sidebar from '../layout/Sidebar/Sidebar';

const Report = () => {
  return (
    <div className='report-main'>
      <div className='report-form'>
        <ReportForm></ReportForm>
      </div>
      <div className='sidecontent'>
        <img className='rescue-img' src={rescue} alt='' />
        <div className='recent-reports'>
          <RecentReports></RecentReports>
        </div>
      </div>
    </div>
  );
};

export default Report;
