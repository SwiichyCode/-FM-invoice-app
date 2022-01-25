import React from "react";
import styled from "styled-components";

export default function InputText(props) {
  return (
    <InputWrapper>
      <label className="body1" htmlFor={props.labelFor}>
        {props.labelText}
      </label>
      <InputTextWrapper
        className="secondaryH3"
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        id={props.id}
        type="text"
      ></InputTextWrapper>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--g);
    padding-bottom: 1rem;
  }

  input {
    height: 48px;
    background: #ffffff;
    border: 1px solid #dfe3fa;
    box-sizing: border-box;
    border-radius: 4px;
    box-sizing: border-box;
    padding-left: 2rem;

    :focus {
      outline: none;
    }
  }
`;

const InputTextWrapper = styled.input``;
