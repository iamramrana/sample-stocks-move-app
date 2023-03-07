import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { move, moveItemBack, selectSecondList, stockType } from "../../app/features/stocksListSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import NoDataFound from "../utils/NoDataFound";

const StocksSecondList = () => {
    const stocksList = useAppSelector(selectSecondList);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const moveItemBackHandler = (item: stockType) => {
        dispatch(moveItemBack(item));
        navigate('/');
      };
   
  return (
    <>
    <div><Link to="/">Go Back to Home</Link></div>
    <h3 style={{textAlign:'center'}}>Moved Stocks</h3>
      <Table striped>
        <thead>
          <tr>
          <th>Company</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Time Elapsed</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
                stocksList?.map((listItem)=>{
                    return  <tr key={listItem.ticker}>
                    <td>{listItem.company}</td>
                    <td>{listItem.ticker}</td>
                    <td>{listItem.stockPrice}</td>
                    <td>{listItem.timeElapsed}</td>
                    <td>
                <Button onClick={() => moveItemBackHandler(listItem)}>Move Back</Button>
              </td>
                  </tr>
                })
            }
        </tbody>
      </Table>
      {stocksList.length == 0 && <NoDataFound />}  
    </>
  );
};

export default StocksSecondList;
