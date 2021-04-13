import { BERTH_OFFER } from '../__generated__/BERTH_OFFER';
import { ApplicationStatus, BerthMooringType, LeaseStatus } from '../../../@types/__generated__/globalTypes';

export const berthOfferQueryData: BERTH_OFFER = {
  berthApplication: {
    __typename: 'BerthApplicationNode',
    id: '1',
    createdAt: null,
    status: ApplicationStatus.PENDING,
    berthSwitch: null,
    customer: {
      __typename: 'ProfileNode',
      id: '1',
    },
    boatType: 'rowboat',
    boatRegistrationNumber: '1234',
    boatName: 'test',
    boatModel: 'test',
    boatWidth: 1,
    boatLength: 1,
    boatDraught: 1,
    boatWeight: 1,
  },
  boatTypes: [
    {
      __typename: 'BoatTypeType',
      id: 'rowboat',
      name: 'rowboat',
    },
  ],
  harborByServicemapId: {
    __typename: 'HarborNode',
    id: 'SGFyYm9yTm9kZTpmN2M2YTQwZjAtOWViMi0zZjgyMTI0YjY0OGI=',
    properties: {
      __typename: 'HarborProperties',
      name: 'Pajalahden venesatama (Meripuistotie) / Venesatama',
      streetAddress: 'Meripuistotie 1a',
      zipCode: '00210',
      municipality: 'Helsinki',
      imageFile: 'https://venepaikka-api.test.hel.ninja/media/harbors/9a8d8313-eaa2-47d2-8f2d-2bb9893f9bc7/41359.jpg',
      maps: [
        {
          __typename: 'HarborMapType',
          id: 'testmap',
          url: 'testmap',
        },
      ],
      maxWidth: 4,
      servicemapId: '41359',
      numberOfPlaces: 4,
      numberOfFreePlaces: 2,
      piers: {
        __typename: 'PierNodeConnection',
        edges: [
          {
            __typename: 'PierNodeEdge',
            node: {
              __typename: 'PierNode',
              id: '123456',
              properties: {
                __typename: 'PierProperties',
                identifier: 'pier',
                electricity: true,
                gate: true,
                lighting: true,
                wasteCollection: true,
                water: true,
                berths: {
                  __typename: 'BerthNodeConnection',
                  edges: [
                    {
                      __typename: 'BerthNodeEdge',
                      node: {
                        __typename: 'BerthNode',
                        comment: 'No comments',
                        depth: 5,
                        id: '1',
                        isAccessible: true,
                        isActive: true,
                        leases: {
                          __typename: 'BerthLeaseNodeConnection',
                          edges: [
                            {
                              __typename: 'BerthLeaseNodeEdge',
                              node: {
                                __typename: 'BerthLeaseNode',
                                status: LeaseStatus.PAID,
                                startDate: null,
                                endDate: null,
                                isActive: true,
                                customer: {
                                  __typename: 'ProfileNode',
                                  id: '1',
                                },
                              },
                            },
                          ],
                        },
                        length: 10,
                        mooringType: BerthMooringType.DINGHY_PLACE,
                        number: '1',
                        width: 5,
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  },
};
