import { BERTH_ASSIGNMENT_PLANS } from './__generated__/BERTH_ASSIGNMENT_PLANS';
import { AssignmentPlan } from './types';

export const getAssignmentPlans = (data?: BERTH_ASSIGNMENT_PLANS | null): AssignmentPlan[] => {
  if (!data || !data.berthAssignmentPlans) {
    return [];
  }

  return data.berthAssignmentPlans.map((plan) => {
    return {
      id: plan?.id as string,
      firstName: plan?.application.firstName ?? '',
      lastName: plan?.application.lastName ?? '',
      email: plan?.application.email ?? '',
      harborName: plan?.berth.pier.properties?.harbor.properties?.name ?? '',
      pierIdentifier: plan?.berth.pier.properties?.identifier ?? '',
      berthNumber: plan?.berth.number as string,
      priority:
        plan?.application?.harborChoices?.find(
          (choice) => choice?.harbor === plan?.berth.pier.properties?.harbor.properties?.servicemapId
        )?.priority ?? 0,
    };
  });
};
