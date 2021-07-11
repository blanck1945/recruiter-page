import * as Yup from 'yup';
import { RiSendPlaneFill } from 'react-icons/ri';
import { TextTypeEnums } from 'types/forms/enums';

export interface NewsletterFormInterface {
  newSub: string;
}

const newsletterValidationSchema = Yup.object().shape({
  newSub: Yup.string().trim().email().lowercase(),
});

export const NewsletterForm = {
  auth: false,
  formClass: 'footer-newsletter',
  buttonProp: false,
  initialValues: {
    newSub: '',
  },
  builder: [
    {
      comp: TextTypeEnums.withBtnInside,
      placeholder: 'Suscribite al newsletter!',
      name: 'newSub',
      className: 'footerNews',
      inputProp: () => <RiSendPlaneFill />,
    },
  ],
  validationSchema: newsletterValidationSchema,
  onSubmit: (props: NewsletterFormInterface): any => {
    try {
    } catch (err) {}
  },
};
