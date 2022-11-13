import { Container, ContainerBox } from "../components/Container.styled";
import { DivArrow, DivForm, DivDelivery } from "../components/Div.styled";
import { Navigation } from "../components/Navigation.styled"
import { MarginSpan } from "../components/Margin-span.styled"
import { CircleOrange, CirclePeach } from "../components/Circle-color.styled"
import { DeliveryDetail } from "../components/Delivery-detail.styled"
import { Summary, FirstSum, SecondSum, ThirdSum } from "../components/Summary.styled"
import { DetailLeft, DetailRight } from "../components/Detail-left-right.styled"
import { Form, FormAddress } from "../components/Form.styled"
import { DeliveryFirst } from "../components/Delivery-first.styled"
import { DivLabel, DivLabel2, Label } from "../components/Div-label.styled"
import { Checkbox } from "../components/Checkbox.styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Payment from "./Payment"


function Home() {
    const {register, handleSubmit} = useForm("");

    const navigation = useNavigate();

    const email = useRef(null);
    const phoneNumber = useRef(null);
    const address = useRef(null);
    const dName = useRef(null);
    const dPhoneNumber = useRef(null);

    const onSubmit = (e) => {
    console.log(email.current.value);
    console.log(phoneNumber.current.value);
    console.log(address.current.value);
    console.log(dName.current.value);
    console.log(dPhoneNumber.current.value);

    if(address.current.value == ""){
      alert("Alamat tidak boleh kosong");
    }
    else if(email.current.value == ""){
      alert("Email tidak boleh kosong");
    }
    else if(phoneNumber.current.value == ""){
      alert("Nomor telepon tidak boleh kosong");
    }else{
        console.log("Masuk Sini");
        navigation("/payment", {state:{dropPrice: dropPrice, totalPrice: totalPrice}});
    }
  }

  function emailChange(e) {
    let emailTxt = e.target.value;
    console.log(emailTxt);

    if(emailTxt.endsWith('.com')){
      e.currentTarget.style.border = "solid 2px #96edbc";
    }
    else{
      e.currentTarget.style.border = "solid 2px #ffbb85";
    }
  }

  function nameChange(e) {
    let nameTxt = e.target.value;
    let len = nameTxt.length;

    if(len != 0 && len >= 5){
      e.currentTarget.style.border = "solid 2px #96edbc";
    }
    else{
      e.currentTarget.style.border = "solid 2px #ffbb85";
    }
  }

  function phoneChange(e) {
    let phoneTxt = e.target.value;
    console.log(phoneTxt);

    let len = phoneTxt.length;
    var validatePhone = true;

    // for(var i = 0; i < len; i++){
    //   if(!(phoneTxt[i] >= '0' && phoneTxt[i] <= '9') || !(phoneTxt[i]) == ',' || !(phoneTxt[i]) == '+' || !(phoneTxt[i]) == '-'){
    //     validatePhone = false;
    //     break;
    //   }
    // }

    if(len < 6 || len > 20){
      validatePhone = false;
    }

    if(validatePhone && phoneTxt.startsWith('08')){
      e.currentTarget.style.border = "solid 2px #96edbc";
    }
    else{
      e.currentTarget.style.border = "solid 2px #ffbb85";
    }
  }

  const [lenAddress, setLenAddress] = useState(0);
  const maxAddress = 120;

  function setTheAddress(len){
    // console.log(len)
    setLenAddress(len)
  }

  function addressChange(e) {
    // console.log("masuk addressChange")
    let addressTxt = e.target.value;
    let len = addressTxt.length;

    if(len == 0) {
      e.currentTarget.style.border = "solid 2px #ffbb85";
    }
    else  {
      e.currentTarget.style.border = "solid 2px #96edbc";
    }
  }  

  function addressFunction(e){
    // console.log("masuk address function")
    setTheAddress(e.target.value.length)
    addressChange(e);
    //test
  }

  const [isChecked, setIsChecked] = useState(true);
  const [dropPrice, setDropPrice] = useState("0");
  const [totalPrice, setTotalPrice] = useState("500,000");

  function checkFunction(e){
    setIsChecked(!isChecked)

    console.log(isChecked)

    //disable
    if(isChecked){
      //enable
      dName.current.disabled = false;
      dPhoneNumber.current.disabled = false;
      dName.current.style.border = "solid 1px black"
      dPhoneNumber.current.style.border = "solid 1px black"
      setDropPrice("5,900");
      setTotalPrice("505,900");
    }else{
      //disable
      dName.current.disabled = true;
      dPhoneNumber.current.disabled = true;
      dName.current.style.border = "solid 1px #dfdfdf"
      dPhoneNumber.current.style.border = "solid 1px #dfdfdf"
      setDropPrice("0");
      setTotalPrice("500,000");
    }
  }


  
  return (

      <Container>
        <Navigation>
          <CircleOrange>1</CircleOrange><span>&nbsp;&nbsp;</span><span>Delivery</span>
          <MarginSpan>{'>'}</MarginSpan>
          <CirclePeach>2</CirclePeach><span>&nbsp;&nbsp;</span><span>Payment</span>
          <MarginSpan>{'>'}</MarginSpan>
          <CirclePeach>3</CirclePeach><span>&nbsp;&nbsp;</span><span>Finish</span>
        </Navigation>

        <form>

        <ContainerBox>
          <DivArrow>
            <FontAwesomeIcon icon={ faArrowLeft } />
            <p>&nbsp;&nbsp;&nbsp;Back to cart</p>
          </DivArrow>
          
          <DeliveryDetail>
            <DeliveryFirst>
              <DivDelivery>
                <h1>Delivery details</h1>
              </DivDelivery>
            
              <DivLabel>
                <DivLabel2>
                  <Checkbox type="checkbox" name="checkDropship" value={"dropship"} onChange={checkFunction}></Checkbox>
                  <Label for="checkDropship">Send as dropshipper</Label>
                </DivLabel2>
              </DivLabel>
            </DeliveryFirst>

            <DetailLeft>
                <DivForm>
                  <Form type="email" name="email" placeholder="Email" ref={email} onChange={emailChange}></Form>
                </DivForm>
                
                <DivForm>
                  <Form type="number" name="phoneNumber" placeholder="Phone Number" ref={phoneNumber} onChange={phoneChange}></Form>
                </DivForm>
                
                <DivForm>
                  <FormAddress type="text" name="address" placeholder="Delivery Address" ref={address} onChange={addressFunction}></FormAddress>
                </DivForm>
                
                <p>{lenAddress} / {maxAddress}</p>

            </DetailLeft>

            <DetailRight>
                <DivForm>
                  <Form type="text" name="dropshipperName" placeholder="Dropshipper Name" ref={dName} disabled={true} onChange={nameChange}></Form>
                </DivForm>
                
                <DivForm>
                  <Form type="number" name="dropshipperPhone" placeholder="Dropshipper Phone Number" ref={dPhoneNumber} disabled={true} onChange={phoneChange}></Form>
                </DivForm>
                
            </DetailRight>
          </DeliveryDetail>

          <Summary>
            <FirstSum>
              <h1>Summary</h1>
              <p>10 items purchased</p>
            </FirstSum>
            
            <SecondSum className="homeSum">
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
                    <b>{dropPrice}</b>
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
              <button type="submit" value="submit" onClick={handleSubmit(onSubmit)} to="/payment">Continue to Payment</button>
            </ThirdSum>
          </Summary>
        </ContainerBox>
        
        </form>

      </Container>

  );
}

export default Home;