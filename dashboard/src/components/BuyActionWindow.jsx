import {useState} from 'react';
import {Link} from "react-router-dom";

import axios from 'axios';

import "./BuyActionWindow.css";
import GeneralContext from './GeneralContextProvider';

const BuyActionWindow = ({uid})=>{
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const handleBuyClick = ()=>{
        axios.post("http://localhost:8080/newOrder",
        {
            name: uid.stock,
            qty: stockQuantity,
            price: stockPrice,
            mode: "BUY",
        }, []);
        GeneralContext.closeBuyWindow();
    };

    const handleCancelClick = ()=>{
        GeneralContext.closeBuyWindow();
    };
    return (
        <div className='container' id = 'buy-window' draggable='true'>
            <div className="regular-order">
                <div className="">
                    {uid.stock}
                </div>
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input type='number' name='qty' id='qty' onChange={(e)=>setStockQuantity(e.target.value)} value={stockQuantity} />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input type='number' name='price' id='price' step="0.05" onChange={(e)=>setStockPrice(e.target.value)} value={stockPrice} />
                    </fieldset>
                </div>

                <div className='buttons'>
                    <span>Margin required </span>
                    <div>
                        <Link className='btn btn-blue' onClick={handleBuyClick}>Buy</Link>
                        <Link className='btn btn-grey' onClick = {handleCancelClick}>
                            Cancel
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyActionWindow;