import { useField } from "formik";
import styled from "styled-components";

export default function MyTextInput({ label, ...props }) {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <MyTextInputWrapper>
      <div className="error">
        <label htmlFor={props.id || props.name} className="body1">
          {label}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>

      <input className="text-input secondaryH3" {...field} {...props} />
    </MyTextInputWrapper>
  );
}

const MyTextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .error {
    display: flex;
    justify-content: space-between;
  }

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
