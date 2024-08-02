import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 38em;
  padding: 1em 3em 2em 3em;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
`;

const Row = styled.div`
  &:before,
  &:after {
    content: "";
    display: table;
  }
  &:after {
    clear: both;
  }
`;

const ColHalf = styled.div`
  padding-right: 10px;
  float: left;
  width: 50%;
  &:last-of-type {
    padding-right: 0;
  }
  
  @media only screen and (max-width: 540px) {
    width: 100%;
    padding-right: 0;
  }
`;

const ColThird = styled.div`
  padding-right: 10px;
  float: left;
  width: 33.3333%;
  &:last-of-type {
    padding-right: 0;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1em;
  zoom: 1;
  &:before,
  &:after {
    content: "";
    display: table;
  }
  &:after {
    clear: both;
  }
`;

const InputGroupIcon = styled.div`
  position: relative;
`;

const InputIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 3.4em;
  height: 3.4em;
  line-height: 3.4em;
  text-align: center;
  pointer-events: none;

  i {
    transition: 0.35s ease-in-out;
  }

  &:after {
    position: absolute;
    top: 0.6em;
    bottom: 0.6em;
    left: 3.4em;
    display: block;
    border-right: 1px solid #e5e5e5;
    content: "";
    transition: 0.35s ease-in-out;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1em;
  line-height: 1.4;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  transition: 0.35s ease-in-out;

  &:focus {
    outline: 0;
    border-color: #bd8200;
  }

  &:focus + ${InputIcon} i {
    color: #f0a500;
  }

  &:focus + ${InputIcon}:after {
    border-right-color: #f0a500;
  }
`;

const RadioButton = styled.input.attrs({ type: 'radio' })`
  display: none;
`;

const RadioButtonLabel = styled.label`
  display: inline-block;
  width: 50%;
  text-align: center;
  float: left;
  border-radius: 0;
  border-top-left-radius: ${props => props.first && '3px'};
  border-bottom-left-radius: ${props => props.first && '3px'};
  border-top-right-radius: ${props => props.last && '3px'};
  border-bottom-right-radius: ${props => props.last && '3px'};
  background-color: ${props => props.checked ? '#f0a500' : 'transparent'};
  color: ${props => props.checked ? '#fff' : '#000'};

  i {
    padding-right: 0.4em;
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const CheckboxLabel = styled.label`
  position: relative;
  display: block;
  padding-left: 1.6em;

  &:before {
    position: absolute;
    top: 0.2em;
    left: 0;
    display: block;
    width: 1em;
    height: 1em;
    content: "";
  }

  &:after {
    position: absolute;
    top: 0.45em;
    left: 0.2em;
    font-size: 0.8em;
    color: #fff;
    opacity: 0;
    font-family: FontAwesome;
    content: "\f00c";
    opacity: ${props => props.checked ? 1 : 0};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1em;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  height: 3.4em;
  line-height: 2;

  &:focus {
    outline: 0;
  }

  option {
    background-color: #f0a500;
    color: #fff;
  }
`;

export default function ReviewForm(){
  return(<Container>
    <form>
      <Row>
        <h4>Account</h4>
        <InputGroup>
          <InputGroupIcon>
            <StyledInput type="text" placeholder="Full Name" />
            <InputIcon><i className="fa fa-user" /></InputIcon>
          </InputGroupIcon>
        </InputGroup>
        <InputGroup>
          <InputGroupIcon>
            <StyledInput type="email" placeholder="Email Address" />
            <InputIcon><i className="fa fa-envelope" /></InputIcon>
          </InputGroupIcon>
        </InputGroup>
        <InputGroup>
          <InputGroupIcon>
            <StyledInput type="password" placeholder="Password" />
            <InputIcon><i className="fa fa-key" /></InputIcon>
          </InputGroupIcon>
        </InputGroup>
      </Row>
      <Row>
        <ColHalf>
          <h4>Date of Birth</h4>
          <InputGroup>
            <ColThird>
              <StyledInput type="text" placeholder="DD" />
            </ColThird>
            <ColThird>
              <StyledInput type="text" placeholder="MM" />
            </ColThird>
            <ColThird>
              <StyledInput type="text" placeholder="YYYY" />
            </ColThird>
          </InputGroup>
        </ColHalf>
        <ColHalf>
          <h4>Gender</h4>
          <InputGroup>
            <RadioButton id="gender-male" name="gender" value="male" />
            <RadioButtonLabel htmlFor="gender-male" first>
              Male
            </RadioButtonLabel>
            <RadioButton id="gender-female" name="gender" value="female" />
            <RadioButtonLabel htmlFor="gender-female" last>
              Female
            </RadioButtonLabel>
          </InputGroup>
        </ColHalf>
      </Row>
      <Row>
        <h4>Payment Details</h4>
        <InputGroup>
          <RadioButton id="payment-method-card" name="payment-method" value="card" defaultChecked />
          <RadioButtonLabel htmlFor="payment-method-card" first checked>
            <span>
              <i className="fa fa-cc-visa" /> Credit Card
            </span>
          </RadioButtonLabel>
          <RadioButton id="payment-method-paypal" name="payment-method" value="paypal" />
          <RadioButtonLabel htmlFor="payment-method-paypal" last>
            <span>
              <i className="fa fa-cc-paypal" /> Paypal
            </span>
          </RadioButtonLabel>
        </InputGroup>
        <InputGroup>
          <InputGroupIcon>
            <StyledInput type="text" placeholder="Card Number" />
            <InputIcon><i className="fa fa-credit-card" /></InputIcon>
          </InputGroupIcon>
        </InputGroup>
        <Row>
          <ColHalf>
            <InputGroup>
              <InputGroupIcon>
                <StyledInput type="text" placeholder="Card CVC" />
                <InputIcon><i className="fa fa-user" /></InputIcon>
              </InputGroupIcon>
            </InputGroup>
          </ColHalf>
          <ColHalf>
            <InputGroup>
              <Select>
                <option>01 Jan</option>
                <option>02 Jan</option>
              </Select>
              <Select>
                <option>2015</option>
                <option>2016</option>
              </Select>
            </InputGroup>
          </ColHalf>
        </Row>
      </Row>
      <Row>
        <h4>Terms and Conditions</h4>
        <InputGroup>
          <Checkbox id="terms" />
          <CheckboxLabel htmlFor="terms" checked>
            I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.
          </CheckboxLabel>
        </InputGroup>
      </Row>
    </form>
  </Container>);
}

