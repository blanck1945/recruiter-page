import Button from '@components/Atomos/Button';
import { ErrorMessage, Field } from 'formik';
import { TextTypeEnums } from 'types/forms/enums';
import { GiMagnifyingGlass } from 'react-icons/gi';
import * as Yup from 'yup';

export interface SearchBarInterface {
  job: string;
}

const searchBarValidationSchema = Yup.object().shape({
  job: Yup.string().trim().lowercase(),
});

export const SearchBarForm = {
  auth: false,
  formClass: 'footer-searchBar',
  buttonProp: false,
  initialValues: {
    job: '',
  },
  builder: [
    {
      as: 'custom',
      placeholder: 'Puesto, empresa o palabra clave',
      name: 'job',
      className: 'searchBar',
      custom: (props: any) => {
        return (
          <div className="searchBar">
            <div>
              <GiMagnifyingGlass />
              <input {...props} />
              <Button buttonClass="search">Buscar</Button>
            </div>
            <ErrorMessage name={props.name}>
              {(msg) => (
                <span className={props.errorClass ? props.errorClass : 'errorMsg'}>{msg}</span>
              )}
            </ErrorMessage>
          </div>
        );
      },
    },
  ],
  validationSchema: searchBarValidationSchema,
  onSubmit: (props: SearchBarInterface): any => {
    try {
    } catch (err) {}
  },
};
