import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";
import WatchListAction from "./WatchListAction";

const WatchListItem = ({ stock, index }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseExit = (e) => {
    setShowWatchlistActions(false);
  };

  return (
      <li
        key={index}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
      >
        <div className="item">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          <div className="itemInfo">
            <span className="percent">{stock.percent}</span>
            {stock.isDown ? (
              <KeyboardArrowDown className="down" />
            ) : (
              <KeyboardArrowUp className="up" />
            )}
            <span className="price">{stock.price}</span>
          </div>
        </div>
        {showWatchlistActions && <WatchListAction stock={stock.name} />}
      </li>
  );
};

export default WatchListItem;
