import { BarChartOutlined, MoreHoriz } from '@mui/icons-material'
import { Grow, Tooltip } from '@mui/material'
import GeneralContext from './GeneralContextProvider'
import { useContext } from 'react'

const WatchListAction = (uid) => {
  const generalContext = useContext(GeneralContext);
  const handleBuyClick = ()=>{
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className='actions'>
        <span>
            <Tooltip title='Buy' placement='top' arrow TransitionComponent={Grow}>
                <button className='buy' onClick={handleBuyClick}>B</button>
            </Tooltip>
            <Tooltip title='Sell' placement='top' arrow TransitionComponent={Grow}>
                <button className='sell'>S</button>
            </Tooltip>
            <Tooltip title='Analytics' placement='top' arrow TransitionComponent={Grow}>
                <button className='action'>
                    <BarChartOutlined className='icon'/>
                </button>
            </Tooltip>
            <Tooltip title='More' placement='top' arrow TransitionComponent={Grow}>
                <button className='action'>
                    <MoreHoriz className='icon' />
                </button>
            </Tooltip>
        </span>
    </span>
  )
}

export default WatchListAction
