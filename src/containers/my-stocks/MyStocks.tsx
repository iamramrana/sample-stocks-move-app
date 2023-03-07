import { Col, Row } from "react-bootstrap"
import StocksFirstList from "../../components/stocks-list1/StocksFirstList"

const MyStocks = ()=>{
    return (
        <>
         <Row>
            <Col>
              <StocksFirstList />
            </Col>
          </Row>
        </>
    )
}

export default MyStocks;