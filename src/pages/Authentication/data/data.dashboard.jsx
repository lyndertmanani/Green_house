 import Weather from '../../../components/private/home/weather'
 import Logdata from '../../../components/private/home/logdata'
import Calendar from '../../../components/private/home/calendar'
const Dash = () => {
    return (
    <>
    <div className=' container py-16 lg:py-5'>
    <div className='hidden lg:grid'>
    <Logdata />
    </div>
    <Calendar/>
    <Weather/>
    </div>
    </>
    );
  };
  
  export default Dash;