import React from "react";
import { Formik, ErrorMessage } from "formik";
import styled from "styled-components";
import InputText from "./InputText";
import { SignInSchema } from "./validationSchema";
import initialValue from "./initialValues";

export default function Form({ isActive, handleToggle, addUser }) {
  return (
    <FormWrapper className="formWrapper">
      <Formik
        initialValues={initialValue}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          addUser(values);
        }}
      >
        {(props) => (
          <>
            <form
              className={isActive ? null : "active"}
              onSubmit={props.handleSubmit}
            >
              <h1>New invoice</h1>

              <div className="billFrom">
                <h3 className="secondaryH3">Bill From</h3>
                <div className="inputColumn">
                  <InputText
                    onChange={props.handleChange}
                    value={props.values.senderAddress.street}
                    name="senderAddress.street"
                    id="street"
                    labelFor="street"
                    labelText="Street Address"
                  />
                  <div className="inputFlex">
                    <InputText
                      onChange={props.handleChange}
                      value={props.values.senderAddress.city}
                      name="senderAddress.city"
                      id="city"
                      labelFor="city"
                      labelText="City"
                    />
                    <InputText
                      onChange={props.handleChange}
                      value={props.values.senderAddress.postCode}
                      name="senderAddress.postCode"
                      id="postCode"
                      labelFor="postCode"
                      labelText="Post Code"
                    />
                    <InputText
                      onChange={props.handleChange}
                      value={props.values.senderAddress.country}
                      name="senderAddress.country"
                      id="country"
                      labelFor="country"
                      labelText="Country"
                    />
                  </div>
                </div>
              </div>
              <div className="billTo">
                <h3 className="secondaryH3">Bill To</h3>
                <div className="inputColumn">
                  <div className="inputColumn">
                    <InputText
                      onChange={props.handleChange}
                      value={props.values.clientName}
                      name="clientName"
                      id="clientName"
                      labelFor="clientName"
                      labelText="Client's Name"
                    />
                    <ErrorMessage name="clientName" />
                    <InputText
                      onChange={props.handleChange}
                      value={props.values.clientEmail}
                      name="clientEmail"
                      id="clientEmail"
                      labelFor="clientEmail"
                      labelText="Client's Email"
                    />
                    <InputText
                      onChange={props.handleChange}
                      value={props.values.clientAddress.street}
                      name="clientAddress.street"
                      id="streetAddress"
                      labelFor="streetAddress"
                      labelText="Street Address"
                    />
                  </div>
                  <div className="inputFlex">
                    <InputText
                      onChange={props.handleChange}
                      value={props.values.clientAddress.city}
                      name="clientAddress.city"
                      id="cityAddress"
                      labelFor="cityAddress"
                      labelText="City"
                    />
                    <InputText
                      onChange={props.handleChange}
                      value={props.values.clientAddress.postCode}
                      name="clientAddress.postCode"
                      id="postCodeAddress"
                      labelFor="postCodeAddress"
                      labelText="Post Code"
                    />
                    <InputText
                      onChange={props.handleChange}
                      value={props.values.clientAddress.country}
                      name="clientAddress.country"
                      id="countryAddress"
                      labelFor="countryAddress"
                      labelText="Country"
                    />
                  </div>
                </div>
              </div>
              <button type="submit">Add new user</button>
            </form>
            <div
              className={isActive ? "formWrapper" : "formWrapper active"}
              onClick={handleToggle}
            ></div>
          </>
        )}
      </Formik>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  display: flex;

  form {
    width: 100%;
    max-width: 719px;
    height: 100vh;
    position: absolute;
    top: 0;
    left: -100%;
    background: var(--o);
    padding-left: 15.9rem;
    border-radius: 0px 20px 20px 0px;
    z-index: 93;
    transition: 850ms;
    overflow: auto;

    &.active {
      left: 0;
      transition: 350ms;
    }

    h1 {
      padding-top: 5.6rem;
      padding-bottom: 4.8rem;
    }

    h3 {
      color: var(--a);
      padding-bottom: 2.4rem;
    }

    .billFrom,
    .billTo {
      width: 100%;
      max-width: 504px;
      padding-bottom: 4.8rem;
    }

    .inputColumn {
      display: flex;
      flex-direction: column;
      gap: 24px 0;
    }

    .inputFlex {
      display: flex;
      gap: 0 24px;
      input {
        width: 100%;
      }
    }
  }

  .formWrapper {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    cursor: pointer;

    &.active {
      display: block;
    }
  }
`;
