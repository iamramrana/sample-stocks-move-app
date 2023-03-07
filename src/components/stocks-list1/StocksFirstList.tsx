import { Button, Table } from "react-bootstrap";
import  { Link, useNavigate }  from "react-router-dom";
import { move, selectFirstList, stockType } from "../../app/features/stocksListSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import NoDataFound from "../utils/NoDataFound";

const StocksFirstList = () => {
  const stocksList = useAppSelector(selectFirstList);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const moveItemHandler = (item: stockType) => {
    dispatch(move(item));
    navigate('/moved-stocks');
  };
  return (
    <>
    <div><Link to="/moved-stocks">Check moved stocks</Link></div>
    <h3 style={{textAlign:'center'}}>My Stocks</h3>

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
        {stocksList?.map((listItem) => {
          return (
            <tr key={listItem.ticker}>
              <td>{listItem.company}</td>
              <td>{listItem.ticker}</td>
              <td>{listItem.stockPrice}</td>
              <td>{listItem.timeElapsed}</td>
              <td>
                <Button onClick={() => moveItemHandler(listItem)}>Move</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    {stocksList.length == 0 && <NoDataFound />}  


    </>
   
  );
};

export default StocksFirstList;
