import { BERTH_APPLICATIONS } from '../__generated__/BERTH_APPLICATIONS';
import { getBerthApplicationData } from '../utils';
import { ApplicationStatus, LeaseStatus } from '../../../@types/__generated__/globalTypes';

export const mockData: BERTH_APPLICATIONS = {
  berthApplications: {
    __typename: 'BerthApplicationNodeConnection',
    count: 3,
    edges: [
      // Full structure
      {
        __typename: 'BerthApplicationNodeEdge',
        node: {
          __typename: 'BerthApplicationNode',
          accessibilityRequired: false,
          applicationCode: 'test',
          berthSwitch: {
            __typename: 'BerthSwitchType',
            berth: {
              __typename: 'BerthNode',
              id: 'MOCK-BERTH-0',
              number: '1',
              pier: {
                __typename: 'PierNode',
                id: 'MOCK-PIER-0',
                properties: {
                  __typename: 'PierProperties',
                  identifier: 'A',
                  harbor: {
                    __typename: 'HarborNode',
                    id: 'MOCK-HARBOR-0',
                    properties: {
                      __typename: 'HarborProperties',
                      name: 'Testisatama',
                    },
                  },
                },
              },
            },
            id: 'MOCK-BERTH-SWITCH-0',
            reason: { __typename: 'BerthSwitchReasonType', title: 'Reason' },
          },
          boatLength: 6,
          boatModel: 'Marine',
          boatName: 'Cama la Yano',
          boatDraught: 5,
          boatRegistrationNumber: 'A 12345',
          boatType: '1',
          boatWeight: 5,
          boatWidth: 0,
          createdAt: '2020-07-16',
          customer: {
            __typename: 'ProfileNode',
            id: 'MOCK-PROFILE',
          },
          email: 'test@example.com',
          firstName: 'Matti',
          harborChoices: [
            {
              __typename: 'HarborChoiceType',
              harbor: {
                __typename: 'HarborNode',
                id: '1',
                properties: {
                  __typename: 'HarborProperties',
                  name: '1',
                },
              },
              priority: 0,
            },
          ],
          id: 'MOCK-APPLICATION-0',
          lastName: 'Meikäläinen',
          lease: {
            __typename: 'BerthLeaseNode',
            berth: {
              __typename: 'BerthNode',
              number: '7',
              pier: {
                __typename: 'PierNode',
                properties: {
                  __typename: 'PierProperties',
                  harbor: {
                    __typename: 'HarborNode',
                    id: 'MOCK-HARBOR-0',
                    properties: { __typename: 'HarborProperties', name: 'Testisatama' },
                  },
                  identifier: 'G',
                },
              },
            },
            id: 'MOCK-LEASE-0',
            order: {
              __typename: 'OrderNode',
              id: 'MOCK-ORDER-0',
            },
            status: LeaseStatus.OFFERED,
          },
          municipality: 'Helsinki',
          status: ApplicationStatus.PENDING,
          switchOffers: {
            __typename: 'BerthSwitchOfferNodeConnection',
            edges: [],
          },
        },
      },
      // Most structure and nulled fields
      {
        __typename: 'BerthApplicationNodeEdge',
        node: {
          __typename: 'BerthApplicationNode',
          accessibilityRequired: false,
          applicationCode: '',
          berthSwitch: {
            __typename: 'BerthSwitchType',
            berth: {
              __typename: 'BerthNode',
              id: 'MOCK-BERTH-1',
              number: '2',
              pier: {
                __typename: 'PierNode',
                id: 'MOCK-PIER-1',
                properties: {
                  __typename: 'PierProperties',
                  identifier: 'B',
                  harbor: {
                    __typename: 'HarborNode',
                    id: 'MOCK-HARBOR-0',
                    properties: {
                      __typename: 'HarborProperties',
                      name: 'Testisatama',
                    },
                  },
                },
              },
            },
            id: 'MOCK-BERTH-SWITCH-1',
            reason: null,
          },
          boatLength: 6,
          boatModel: 'Marine',
          boatName: 'Cama la Yano II',
          boatDraught: 5,
          boatRegistrationNumber: 'B 12345',
          boatType: '1',
          boatWeight: 5,
          boatWidth: 0,
          createdAt: '2020-07-16',
          customer: {
            __typename: 'ProfileNode',
            id: 'MOCK-PROFILE',
          },
          email: 'test-0@example.com',
          firstName: 'Maija',
          harborChoices: null,
          id: 'MOCK-APPLICATION-1',
          lastName: 'Meikäläinen',
          lease: {
            __typename: 'BerthLeaseNode',
            id: 'MOCK-LEASE-1',
            status: LeaseStatus.OFFERED,
            order: {
              __typename: 'OrderNode',
              id: 'MOCK-ORDER-0',
            },
            berth: {
              __typename: 'BerthNode',
              number: '7',
              pier: {
                __typename: 'PierNode',
                properties: {
                  __typename: 'PierProperties',
                  identifier: 'Pier Brosnan',
                  harbor: {
                    __typename: 'HarborNode',
                    id: 'MOCK-HARBOR-1',
                    properties: {
                      __typename: 'HarborProperties',
                      name: null,
                    },
                  },
                },
              },
            },
          },
          municipality: 'Helsinki',
          status: ApplicationStatus.PENDING,
          switchOffers: {
            __typename: 'BerthSwitchOfferNodeConnection',
            edges: [],
          },
        },
      },
      // Minimum fields
      {
        __typename: 'BerthApplicationNodeEdge',
        node: {
          __typename: 'BerthApplicationNode',
          accessibilityRequired: false,
          applicationCode: 'code',
          berthSwitch: null,
          boatLength: 6,
          boatModel: 'Marine',
          boatName: 'Cama la Yano 3-D',
          boatDraught: 5,
          boatRegistrationNumber: 'C 12345',
          boatType: '1',
          boatWeight: 5,
          boatWidth: 0,
          createdAt: '2020-07-16',
          customer: {
            __typename: 'ProfileNode',
            id: 'MOCK-PROFILE-0',
          },
          email: 'test-2@example.com',
          firstName: 'Matti',
          harborChoices: [
            {
              __typename: 'HarborChoiceType',
              harbor: {
                __typename: 'HarborNode',
                id: 'MOCK-HARBOR-0',

                properties: {
                  __typename: 'HarborProperties',
                  name: 'Testisatama',
                },
              },
              priority: 0,
            },
          ],
          id: 'MOCK-APPLICATION-2',
          lastName: 'Möttönen',
          lease: null,
          municipality: 'Helsinki',
          status: ApplicationStatus.PENDING,
          switchOffers: {
            __typename: 'BerthSwitchOfferNodeConnection',
            edges: [],
          },
        },
      },
    ],
  },
  boatTypes: [{ __typename: 'BoatTypeType', id: '1', name: 'Purjevene' }],
};

export const mockTableData = getBerthApplicationData(mockData);
