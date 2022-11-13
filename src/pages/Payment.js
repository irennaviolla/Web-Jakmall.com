import { Container, ContainerBox } from "../components/Container.styled";
import { DivArrow, InlineDiv } from "../components/Div.styled";
import { Navigation } from "../components/Navigation.styled"
import { MarginSpan } from "../components/Margin-span.styled"
import { CircleOrange, CirclePeach } from "../components/Circle-color.styled"
import { DeliveryDetail } from "../components/Delivery-detail.styled"
import { Summary, FirstSum, SecondSum, ThirdSum } from "../components/Summary.styled"
import { Line } from "../components/Horizontal-line.styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useRef, useState } from "react";
import { ParentInline } from "../components/Parent-inline.styled";
import { useLocation, useNavigate } from "react-router-dom";

export default function Payment({dropPrice}) {

    const navigation = useNavigate();
    const location = useLocation();

    const [totalPrice, setTotalPrice] = useState(location.state.totalPrice);

    const goSend = useRef(null);
    const jne = useRef(null);
    const personal = useRef(null);

    const [shipment, setShipment] = useState("");
    const [shipmentTitle, setShipmentTitle] = useState("");
    const [shipmentPrice, setShipmentPrice] = useState("");

    function disableDiv(e){
        e.current.style.border = "solid 1px #c4c4cc";
        e.current.style.backgroundColor = "white";
        e.current.style.color = "#a9a9aa";
    }

    function enableDiv(e){
        e.current.style.border = "solid 1px #4ae399";
        e.current.style.backgroundColor = "#e9faf1";
        e.current.style.color = "black";
    }

    const [isChoosedShipment, setIsChoosedShipment] = useState(false);


    function clickGosend () {
        enableDiv(goSend);
        disableDiv(jne);
        disableDiv(personal);
        setShipment("today by GO-SEND");
        setShipmentTitle("GO-SEND shipment");
        setShipmentPrice("15,000");
        setIsChoosedShipment(true);
        if(totalPrice == "500,000"){
          setTotalPrice("515,000");
        }else{
          setTotalPrice("520,900");
        }
    }

    function clickJne () {
        enableDiv(jne);
        disableDiv(goSend);
        disableDiv(personal);
        setShipment("2 days by JNE");
        setShipmentTitle("JNE shipment");
        setShipmentPrice("9,000");
        setIsChoosedShipment(true);
        if(totalPrice == "500,000"){
          setTotalPrice("509,000");
        }else{
          setTotalPrice("514,900");
        }
    }

    function clickPersonal () {
        enableDiv(personal);
        disableDiv(jne);
        disableDiv(goSend);
        setShipment("1 day by Personal Courier");
        setShipmentTitle("Personal Courier shipment");
        setShipmentPrice("29,000");
        setIsChoosedShipment(true);
        if(totalPrice == "500,000"){
          setTotalPrice("529,000");
        }else{
          setTotalPrice("534,900");
        }
        console.log(totalPrice);
    }

    const wallet = useRef(null);
    const transfer = useRef(null);
    const virtual = useRef(null);

    const [payment, setPayment] = useState("Choose Payment");

    var [isChoosedPayment, setIsChoosedPayment] = useState(false);

    var [paymentMethod, setPaymentMethod] = useState("");


    function clickWallet(){
        enableDiv(wallet);
        disableDiv(transfer);
        disableDiv(virtual);
        setPayment("Pay with e-Wallet");
        setIsChoosedPayment(true);
        console.log("Test" + isChoosedPayment);
        setPaymentMethod("e-Wallet");
        
    }

    function clickTransfer(){
        enableDiv(transfer);
        disableDiv(wallet);
        disableDiv(virtual);
        setPayment("Pay with Bank Transfer");
        setIsChoosedPayment(true);
        setPaymentMethod("Bank Transfer");
    }

    function clickVirtual(){
        enableDiv(virtual);
        disableDiv(transfer);
        disableDiv(wallet);
        setPayment("Pay with Virtual Account");
        setIsChoosedPayment(true);
        setPaymentMethod("Virtual Account");
    }

    function clickButton(){
        
        console.log(isChoosedPayment + ", " + isChoosedShipment);

        if(isChoosedShipment == false && isChoosedPayment == false){
            alert("Pengiriman dan pembayaran harus dipilih")
        }
        else{
            navigation("/finish", {state:{dropPrice: (location.state.dropPrice), paymentMethod: paymentMethod, shipmentTitle: shipmentTitle,shipmentMethod: shipment, shipmentPrice: shipmentPrice, totalPrice: totalPrice}});
        }
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
            <CirclePeach>3</CirclePeach><span>&nbsp;&nbsp;</span><span>Finish</span>
          </Navigation>
  
  
          <ContainerBox>
            <DivArrow onClick={clickBack}>
              <FontAwesomeIcon icon={ faArrowLeft } />
              <p>&nbsp;&nbsp;&nbsp;Back to delivery</p>
            </DivArrow>
            
            <DeliveryDetail>
                <div>
                    <h1>Shipment</h1>
                </div>

                <ParentInline>
                    <InlineDiv className="choosed" onClick={clickGosend} ref={goSend}>
                        <p>GO-SEND</p>
                        <p><b>15,000</b></p>
                    </InlineDiv>

                    <InlineDiv onClick={clickJne} ref={jne}>
                        <p>JNE</p>
                        <p><b>9,000</b></p>
                    </InlineDiv>

                    <InlineDiv onClick={clickPersonal} ref={personal}>
                        <p>Personal Courier</p>
                        <p><b>29,000</b></p>
                    </InlineDiv>
                </ParentInline>

                <div>
                    <h1>Payment</h1>
                </div>

                <ParentInline>
                    <InlineDiv className="choosed" onClick={clickWallet} ref={wallet}>
                        <p>e-Wallet</p>
                        <p><b>1,500,000 left</b></p>
                    </InlineDiv>

                    <InlineDiv className="inline-center" onClick={clickTransfer} ref={transfer}>
                        <p>Bank Transfer</p>
                    </InlineDiv>
                                
                    <InlineDiv className="inline-center" onClick={clickVirtual} ref={virtual}>
                        <p>Virtual Account</p>
                    </InlineDiv>     
                </ParentInline>
              
            </DeliveryDetail>
  
            <Summary>
              <FirstSum>
                <h1>Summary</h1>
                <p>10 items purchased</p>
              </FirstSum>

              <Line></Line>
              <br/>

              <div>
                <p className="margin-change">Delivery estimation</p>
                <p className="green-color">{shipment}</p>
              </div>
              
              <SecondSum>
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
                      {shipmentTitle}
                    </td>
  
                    <td className="rightTable">
                      {shipmentPrice}
                    </td>
                  </tr>
  
                  <tr>
                    <td>
                      <h1>Total</h1>
                    </td>
                    
                    <td className="rightTable">
                      <h1><b>{totalPrice}</b></h1>
                    </td>
                  </tr>
                </table>
              </SecondSum>
  
              <ThirdSum>
                <button type="submit" value="submit" onClick={clickButton}>{payment}</button>
              </ThirdSum>
            </Summary>
          </ContainerBox>
  
        </Container>
    );
}