import RevenueChart from '../RevenueChart/RevenueChart';
import SellChart from '../SellChart/SellChart';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6">
            <h3 className='month-chart-title'>Month Wise Sell</h3>
            <div className="month-chart">
              <SellChart></SellChart>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className='revenue-chart-title'>Investment VS Revenue</h3>
            <div className="revenue-chart">
              <RevenueChart></RevenueChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;