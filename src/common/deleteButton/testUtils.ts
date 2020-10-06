import { ReactWrapper } from 'enzyme';

import DeleteButton from './DeleteButton';
import Button from '../button/Button';
import ConfirmationModal from '../confirmationModal/ConfirmationModal';

export const handleDelete = (wrapperContainingDeleteButton: ReactWrapper) => {
  wrapperContainingDeleteButton.find(DeleteButton).find(Button).simulate('click');
  wrapperContainingDeleteButton.find(ConfirmationModal).find(Button).last().simulate('click');
};
