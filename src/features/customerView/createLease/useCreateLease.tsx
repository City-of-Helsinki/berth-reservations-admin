import React, { useState } from 'react';

import CreateLeaseModal from './CreateLeaseModal';

// FIXME: This comment is intended for whoever picks this up next week
// This approach is an attempt to clear up the amount of state, query and render control in CustomerView,
// by separating modal features into a hook and a component. Feel free to use this or change it as you see fit!
// With an approach like this, this whole flow can be attached to any view. Perhaps this could be under 'features'?

const useCreateLease = (customerId: string) => {
  const [creatingLease, setCreatingLease] = useState<boolean>(false);

  const createLease = () => setCreatingLease(true);
  const renderCreateLeaseModal = () => {
    return (
      <CreateLeaseModal customerId={customerId} isOpen={creatingLease} closeModal={() => setCreatingLease(false)} />
    );
  };

  return { createLease, renderCreateLeaseModal };
};

export default useCreateLease;
