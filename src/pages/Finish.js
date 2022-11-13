import { Container, ContainerBox } from "../components/Container.styled";
import { DivArrow, CenterDiv } from "../components/Div.styled";
import { Navigation } from "../components/Navigation.styled"
import { MarginSpan } from "../components/Margin-span.styled"
import { CircleOrange } from "../components/Circle-color.styled"
import { Summary, FirstSum, SecondSum, ThirdSum } from "../components/Summary.styled"
import { Line } from "../components/Horizontal-line.styled"
import { FinishDiv } from "../components/Finish.styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useLocation, useNavigate } from "react-router-dom";

export default function Finish(){

    const navigation = useNavigate();
    const location = useLocation();

    function orderId(length) {
      var result = '';
      var char = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
      var charLength = char.length;
      for (var i = 0; i < length; i++){
        result += char.charAt(Math.floor(Math.random() * charLength));
      }
      return result;
    }

    function clickBack(){
      navigation("/");
    }

    return (
        <Container>
          <Navigation>
            <CircleOrange>1</CircleOrange><span>&nbsp;&nbsp;</span><span>Delivery</span>
            <MarginSpan>{'>'}</MarginSpan>
            <CircleOrange>2</CircleOrange><span>&nbsp;&nbsp;</span><span>Payment</span>
            <MarginSpan>{'>'}</MarginSpan>
            <CircleOrange>3</CircleOrange><span>&nbsp;&nbsp;</span><span>Finish</span>
          </Navigation>
  
  
          <ContainerBox>
            
            <DivArrow>
              {/* <FontAwesomeIcon icon={ faArrowLeft } /> */}
              <p>&nbsp;&nbsp;&nbsp;</p>
            </DivArrow>
            
            <CenterDiv>
                <FinishDiv>
                    <h1>Thank you</h1>
                    <p><b>Order ID : {orderId(5)}</b></p>
                    <p>Your order will be {location.state.shipmentMethod}</p>

                    <DivArrow className="arrow" onClick={clickBack}>
                        <FontAwesomeIcon icon={ faArrowLeft } />
                        <p>&nbsp;&nbsp;&nbsp;Go to homepage</p>
                    </DivArrow>
                </FinishDiv>
            </CenterDiv>
    
  
            <Summary>
              <FirstSum>
                <h1>Summary</h1>
                <p>10 items purchased</p>
              </FirstSum>

              <Line></Line>
              <br/>

              <div>
                <p className="margin-change">Delivery estimation</p>
                <p className="green-color">{location.state.shipmentMethod}</p>
              </div>

              <Line></Line>
              <br/>

              <div>
                <p className="margin-change">Payment method</p>
                <p className="green-color">{location.state.paymentMethod}</p>
              </div>
              
              <SecondSum className="finishSum">
                <table>
                  <tr>
                    <td>
                      Cost of goods
                    </td>
  
                    <td className="rightTable">
                      <b>500,000</b>
                    </td>
                  </tr>
  
                  <tr>
                    <td>
                      Dropshipping Fee
                    </td>
  
                    <td className="rightTable">
                      <b>{location.state.dropPrice}</b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>{location.state.shipmentMethod} shipment</p>
                    </td>
  
                    <td className="rightTable">
                      <b>{location.state.shipmentPrice}</b>
                    </td>
                  </tr>
  
                  <tr>
                    <td>
                      <h1>Total</h1>
                    </td>
                    
                    <td className="rightTable">
                      <h1><b>{location.state.totalPrice}</b></h1>
                    </td>
                  </tr>
                </table>
              </SecondSum>
            </Summary>
          </ContainerBox>
  
        </Container>
    );
}
