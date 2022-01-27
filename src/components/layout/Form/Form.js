import React from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";
import { SignInSchema } from "./validationSchema";
import initialValue from "./initialValues";
import MyTextInput from "./MyInputText";
import MySelect from "./MySelect";
import { DatePicker, SubmitBtn } from "react-formik-ui";

export default function FormSchema({ isActive, handleToggle, addUser }) {
  return (
    <FormWrapper className="formWrapper">
      <Formik
        initialValues={{
          initialValue,
        }}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            addUser(values);
            setSubmitting(false);
          });
        }}
      >
        <>
          <Form className={isActive ? null : "active"}>
            <h1>New invoice</h1>
            <div className="billFrom">
              <h3 className="secondaryH3">Bill From</h3>
              <div className="inputColumn">
                {/* prettier-ignore */}
                <MyTextInput label="Street Address" name="senderAddress.street" type="text" />
                <div className="inputFlex">
                  {/* prettier-ignore */}
                  <MyTextInput label="City" name="senderAddress.city" type="text" />
                  {/* prettier-ignore */}
                  <MyTextInput label="Post Code" name="senderAddress.postCode" type="text" />
                  {/* prettier-ignore */}
                  <MyTextInput label="Country" name="senderAddress.country" type="text" />
                </div>
              </div>
            </div>
            <div className="billTo">
              <h3 className="secondaryH3">Bill To</h3>
              <div className="inputColumn">
                <div className="inputColumn">
                  {/* prettier-ignore */}
                  <MyTextInput label="Client's Name" name="clientName" type="text" />
                  {/* prettier-ignore */}
                  <MyTextInput label="Client's Email" name="clientEmail" type="text" />
                  {/* prettier-ignore */}
                  <MyTextInput label="Street Address" name="clientAddress.street" type="text" />
                </div>
                <div className="inputFlex">
                  {/* prettier-ignore */}
                  <MyTextInput label="City" name="clientAddress.city" type="text" />
                  {/* prettier-ignore */}
                  <MyTextInput label="Post Code" name="clientAddress.postCode" type="text" />
                  {/* prettier-ignore */}
                  <MyTextInput label="Country" name="clientAddress.country" type="text" />
                  {/* prettier-ignore */}
                </div>
                <div className="inputFlex">
                  <MySelect label="Payment Terms" name="paymentTerms">
                    <option value="">Net 30 Days</option>
                    <option value="1">Net 1 Day</option>
                    <option value="7">Net 7 Day</option>
                    <option value="14">Net 14 Day</option>
                    <option value="30">Net 30 Day</option>
                  </MySelect>
                  <DatePicker
                    name="paymentDue"
                    label="Invoice Date"
                    disabledKeyboardNavigation={false}
                  />
                </div>
                {/* Project-description*/}
                {/* prettier-ignore */}
                <MyTextInput label="Project Description" name="description" type="text" />
              </div>
            </div>
            <button type="submit">Add new user</button>
          </Form>
          <div
            className={isActive ? "formWrapper" : "formWrapper active"}
            onClick={handleToggle}
          ></div>
        </>
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
