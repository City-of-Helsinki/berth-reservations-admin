import { INDIVIDUAL_HARBOR } from '../__generated__/INDIVIDUAL_HARBOR';
import { BerthMooringType, LeaseStatus, PriceTier } from '../../../@types/__generated__/globalTypes';

export const IndividualHarborQueryData: INDIVIDUAL_HARBOR = {
  harbor: {
    id: 'SGFyYm9yTm9kZTo5YThkODMxMy1lYWEyLTQ3ZDItOGYyZC0yYmI5ODkzZjliYzc=',
    properties: {
      name: 'Pajalahden venesatama (Meripuistotie) / Venesatama',
      numberOfPlaces: 189,
      numberOfFreePlaces: 11,
      streetAddress: 'Meripuistotie 1a',
      zipCode: '00210',
      municipality: 'Helsinki',
      wwwUrl:
        'https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/kaupungin-venepaikat/kaupungin-venesatamat/pajalahden-venesatama',
      imageFile: 'https://venepaikka.test.kuva.hel.ninja/img/helsinki_harbors/41359.jpg',
      servicemapId: '41359',
      maxWidth: 4,
      __typename: 'HarborProperties',
    },
    __typename: 'HarborNode',
  },
  piers: {
    edges: [
      {
        node: {
          id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
          properties: {
            identifier: '10',
            priceTier: PriceTier.TIER_1,
            electricity: true,
            wasteCollection: true,
            water: true,
            lighting: true,
            gate: true,
            suitableBoatTypes: [
              {
                name: 'Soutuvene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Perämoottorivene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Sisäperämoottorivene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Keskimoottorivene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Purjevene / moottoripursi',
                __typename: 'BoatTypeType',
              },
            ],
            __typename: 'PierProperties',
          },
          __typename: 'PierNode',
        },
        __typename: 'PierNodeEdge',
      },
      {
        node: {
          id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
          properties: {
            identifier: '11 a',
            priceTier: PriceTier.TIER_1,
            electricity: true,
            wasteCollection: true,
            water: true,
            lighting: true,
            gate: true,
            suitableBoatTypes: [
              {
                name: 'Soutuvene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Perämoottorivene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Sisäperämoottorivene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Keskimoottorivene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Purjevene / moottoripursi',
                __typename: 'BoatTypeType',
              },
            ],
            __typename: 'PierProperties',
          },
          __typename: 'PierNode',
        },
        __typename: 'PierNodeEdge',
      },
      {
        node: {
          id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
          properties: {
            identifier: '11 b',
            priceTier: PriceTier.TIER_1,
            electricity: true,
            wasteCollection: true,
            water: true,
            lighting: true,
            gate: true,
            suitableBoatTypes: [
              {
                name: 'Soutuvene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Perämoottorivene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Sisäperämoottorivene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Keskimoottorivene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Purjevene / moottoripursi',
                __typename: 'BoatTypeType',
              },
            ],
            __typename: 'PierProperties',
          },
          __typename: 'PierNode',
        },
        __typename: 'PierNodeEdge',
      },
      {
        node: {
          id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
          properties: {
            identifier: '19 a',
            priceTier: PriceTier.TIER_1,
            electricity: true,
            wasteCollection: true,
            water: true,
            lighting: true,
            gate: true,
            suitableBoatTypes: [
              {
                name: 'Soutuvene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Perämoottorivene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Sisäperämoottorivene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Keskimoottorivene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Purjevene / moottoripursi',
                __typename: 'BoatTypeType',
              },
            ],
            __typename: 'PierProperties',
          },
          __typename: 'PierNode',
        },
        __typename: 'PierNodeEdge',
      },
      {
        node: {
          id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
          properties: {
            identifier: '19 b',
            priceTier: PriceTier.TIER_2,
            electricity: true,
            wasteCollection: true,
            water: true,
            lighting: true,
            gate: true,
            suitableBoatTypes: [
              {
                name: 'Soutuvene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Perämoottorivene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Sisäperämoottorivene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Keskimoottorivene',
                __typename: 'BoatTypeType',
              },
              {
                name: 'Purjevene / moottoripursi',
                __typename: 'BoatTypeType',
              },
            ],
            __typename: 'PierProperties',
          },
          __typename: 'PierNode',
        },
        __typename: 'PierNodeEdge',
      },
    ],
    __typename: 'PierNodeConnection',
  },
  berths: {
    count: 189,
    edges: [
      {
        node: {
          id: 'QmVydGhOb2RlOmU0MGFkNzI0LWIyOTEtNDg4MS04MmY2LWQzMTM3YzM2ZTQ1MA==',
          isActive: true,
          number: '1',
          width: 2.5,
          length: 6,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MzVjOTQ1YWItZjNjMi00ZjgzLWJkYjItYmQ5N2U4M2ZhZTEy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MzVjOTQ1YWItZjNjMi00ZjgzLWJkYjItYmQ5N2U4M2ZhZTEy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YmY1NDI2OTctZWJmNC00YjEzLTkyNTMtNjE0MTNlOWIxNTU4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.REFUSED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjY4OTdkOTgyLTA2OTMtNDlhNy1hMzFiLWJhMjEyZDM5ZmJiOA==',
          isActive: true,
          number: '1',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Y2Q1NDI2MjctMTc0YS00MDdmLWJkZDEtNmEyZTZiYjFmODU4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Y2Q1NDI2MjctMTc0YS00MDdmLWJkZDEtNmEyZTZiYjFmODU4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjU4OTY2MmQ5LTA3MGMtNDllNS1hNTIzLTFjZjhhYTkxY2IwYw==',
          isActive: true,
          number: '1',
          width: 2.5,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NmMxMGZmNjEtYjhmNi00MzRlLThlNTMtMDZiYjkzZjY0NmRm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NmMxMGZmNjEtYjhmNi00MzRlLThlNTMtMDZiYjkzZjY0NmRm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmUzMWQ4MjZkLWFhMzAtNDQ3Yy04ZDUwLTAyZjg4YTM5OGY5MQ==',
          isActive: true,
          number: '1',
          width: 2.5,
          length: 6,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDNjZDNkZTQtY2JiOC00YWFlLWE1ZjUtMzFlNDExNjU3NGI4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDNjZDNkZTQtY2JiOC00YWFlLWE1ZjUtMzFlNDExNjU3NGI4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmM1ZDFmM2E2LTc3MGItNDc1MS1iMWM2LTM3NjU2ZGY2MTRjNg==',
          isActive: true,
          number: '1',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MTcwMWQ0MGEtN2RmMC00NGRkLThlZjktYmQzZTc1MzA0ZTdm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MTcwMWQ0MGEtN2RmMC00NGRkLThlZjktYmQzZTc1MzA0ZTdm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmZiMDFmNDhlLTgwY2ItNGU4OS1iNTUzLTE2M2E4YWQyMjE5OQ==',
          isActive: true,
          number: '2',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzkyZDA5MTUtY2Q0Mi00ZGNjLTk4YzMtZjVkMDFmODMzYmVm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzkyZDA5MTUtY2Q0Mi00ZGNjLTk4YzMtZjVkMDFmODMzYmVm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjNiZGE4Zjg2LTAwYzItNDFhMy1hODhmLTdlYTBkMjkyM2VjZQ==',
          isActive: true,
          number: '2',
          width: 2.5,
          length: 6,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Mjg0MWNhMTYtMmIxYi00N2EwLTk4MmMtZjUzODE4MzY4NmYz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Mjg0MWNhMTYtMmIxYi00N2EwLTk4MmMtZjUzODE4MzY4NmYz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjVlZGQ3MTY0LWE3MDItNDVjZS05OWRkLTkzMDA2YzI5OTAyNw==',
          isActive: true,
          number: '2',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YWQyYzY0N2MtNTc4YS00ZTQ1LTliYTktNGVlMzRkMmFmMTMy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YWQyYzY0N2MtNTc4YS00ZTQ1LTliYTktNGVlMzRkMmFmMTMy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjkxZDM4NTE5LWMzMTgtNDgyYy05OGIxLWE4YmU1NmIyNTMxYw==',
          isActive: true,
          number: '2',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjE0NjUwNTQtNGVlYi00NDkyLThlNDctNDEyZTQ1YTZlYmEw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjE0NjUwNTQtNGVlYi00NDkyLThlNDctNDEyZTQ1YTZlYmEw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjk4ZWNlNjZiLTIyY2MtNDY4My05OWQ1LTk2NTkwODEyOWVjNQ==',
          isActive: true,
          number: '2',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MTQyZTAyMmQtODc0NS00NzVjLTk5MzEtODg4YTdiMDMzMDQ1',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MTQyZTAyMmQtODc0NS00NzVjLTk5MzEtODg4YTdiMDMzMDQ1',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjM5N2Y4ZjZmLTQyMDktNGNjZi04MWZkLTBmYjYxYjE0NjMxZA==',
          isActive: true,
          number: '3',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NTVkNWVhOGQtZjJmOC00YjI0LWE0ODMtOTc0YjQwNWM0Yzcx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NTVkNWVhOGQtZjJmOC00YjI0LWE0ODMtOTc0YjQwNWM0Yzcx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjUzMzQ5ODI5LTA1NDYtNDA3NC05YjIxLTdkODAzYzQ4MDRhMw==',
          isActive: true,
          number: '3',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YmYzYzMyMGEtZTMwNC00YjZlLTg1MGQtOThiM2Q4Mjk5MGFl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YmYzYzMyMGEtZTMwNC00YjZlLTg1MGQtOThiM2Q4Mjk5MGFl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjcxZmQwYzNhLThkZWYtNDg5Ni05Y2IyLWQwZTRlZWRmZjM5NQ==',
          isActive: true,
          number: '3',
          width: 2.5,
          length: 6,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Yzg0ZGZkODMtMjViNy00ZDUzLWE3ZDgtNmE0MmI3ZTA0OGY4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Yzg0ZGZkODMtMjViNy00ZDUzLWE3ZDgtNmE0MmI3ZTA0OGY4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjdjMTVkNzA0LTZiODgtNGFmOC04MjgzLWVmNWYzYTM2ZDViNw==',
          isActive: true,
          number: '3',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjhmM2NhMmRmLTA3YTMtNGNjOS04ODNjLTE1OWRkNzE1Y2Y4YQ==',
          isActive: true,
          number: '3',
          width: 2.5,
          length: 6,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDlmZTVjZGYtOTUyMy00MzdmLWIyN2YtNTQ4NWYzZjJlMjI5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDlmZTVjZGYtOTUyMy00MzdmLWIyN2YtNTQ4NWYzZjJlMjI5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmFiYjljMWFhLWZkZjktNGU5OS04NjgwLTViYzdmNzNkOTUxYQ==',
          isActive: true,
          number: '4',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDhmNzQ2NzYtZDhmOC00NzUzLThhOTMtY2M5OWY4Nzg0NWQy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDhmNzQ2NzYtZDhmOC00NzUzLThhOTMtY2M5OWY4Nzg0NWQy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjUxN2YyNTI2LTIzODAtNDVlZS1iZmJlLWE2Y2VmMDcwODZjZg==',
          isActive: true,
          number: '4',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MTU0OTU5ZTktNmUwNy00N2IzLTlmYjAtNWFiMDE3YjRhNjI4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MTU0OTU5ZTktNmUwNy00N2IzLTlmYjAtNWFiMDE3YjRhNjI4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjc0NDExNDcyLTBiMTEtNGJiMi05ODc4LTk4OTdkOTU3YWQ5Nw==',
          isActive: true,
          number: '4',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjIwYzhiZDctNzI4OC00OTQzLWFlNjYtOWNlZjJlODI1M2E4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjIwYzhiZDctNzI4OC00OTQzLWFlNjYtOWNlZjJlODI1M2E4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjM3ODI2MjEyLTlmZGYtNDEyMy04NDFhLTA3ZmRhMTUyOTZhMQ==',
          isActive: true,
          number: '4',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YTkxMTA0OTAtOGNkOC00YmU2LWI2NzItM2VhNTMxMDk5NzU1',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YTkxMTA0OTAtOGNkOC00YmU2LWI2NzItM2VhNTMxMDk5NzU1',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjFkMmEyNzIwLTRiZTgtNDQ2NS1iODE2LTU3NGYwMWJkZmFhNA==',
          isActive: true,
          number: '4',
          width: 2.5,
          length: 6,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MzdmZmI3OWMtMzBkOS00NTRkLWIxMDItM2IxMDM2YTU4ZDI2',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MzdmZmI3OWMtMzBkOS00NTRkLWIxMDItM2IxMDM2YTU4ZDI2',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjA2MTBkMjZmLTliMjAtNDQ5ZC1hNzJiLTcyNzdkMmUwYmQ2Yw==',
          isActive: true,
          number: '5',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZmM0NzJmZmItNzFhZC00MjE5LTlkZmUtNDUxYTY3MWU2Nzc2',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZmM0NzJmZmItNzFhZC00MjE5LTlkZmUtNDUxYTY3MWU2Nzc2',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmJjMTM4ZDU3LTcxNGUtNDg4Mi04NDYwLWQ0ZDJjNDE4ZGQ5Yw==',
          isActive: true,
          number: '5',
          width: 3,
          length: 6,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmM5Nzk0YzY4LTg2ZDgtNGRlNy1iZDc5LWE1YWJhYWFmMzJjMA==',
          isActive: true,
          number: '5',
          width: 2.5,
          length: 6,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTA2MWUwY2UtNzQ2YS00YjY2LWIzZDQtYTYwYzBjYjBkMjA5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTA2MWUwY2UtNzQ2YS00YjY2LWIzZDQtYTYwYzBjYjBkMjA5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjUzMGFhYzI0LWE4NjQtNDRhMi04NzU5LTczOTIzNTg3ZTZiMg==',
          isActive: true,
          number: '5',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YjQzMmYwNDktN2JjNy00YjhhLWE3MDctODA1NTcyNWM0ZDZi',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YjQzMmYwNDktN2JjNy00YjhhLWE3MDctODA1NTcyNWM0ZDZi',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmUxZjcwYmJmLWNhNjQtNDU0My04ODA2LWRjM2E2MmIzNDY0MA==',
          isActive: true,
          number: '5',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjJlMTBmNmMtODIxOC00MzViLWFlZGQtYTY5NDY2NTI5MzFj',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjJlMTBmNmMtODIxOC00MzViLWFlZGQtYTY5NDY2NTI5MzFj',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmYxYWI3MjgxLWJhNjgtNDkxZi1iNDNlLTE5ZDdhNTZlZTU0OA==',
          isActive: true,
          number: '6',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZWNiZWU2MzMtNWE2Yi00NmM3LWFhNTgtN2NlM2QyMjg1NzVh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZWNiZWU2MzMtNWE2Yi00NmM3LWFhNTgtN2NlM2QyMjg1NzVh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmE5ZTk0MDQ2LWEzNWQtNGMxZS04YjcwLTc2Mjk0OWFlNDY0MQ==',
          isActive: true,
          number: '6',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGYxMGIyZTItYTIyMy00NTlkLWFlMzctOWM4MzA1YmE5MGFi',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGYxMGIyZTItYTIyMy00NTlkLWFlMzctOWM4MzA1YmE5MGFi',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjY0MGQ5MDg1LWU1NGItNGIzYi1hMzFlLTg1ZjFkNzdiZjJhYQ==',
          isActive: true,
          number: '6',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YTYyNGUxZWMtYWEyNC00ODc1LWFkOWYtNzU5YTg5YjE0YTc4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YTYyNGUxZWMtYWEyNC00ODc1LWFkOWYtNzU5YTg5YjE0YTc4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmI1ODNjMjJkLTAwOTEtNGIzOS1iZjYyLWM5MDg2OTE1NzYzNQ==',
          isActive: true,
          number: '6',
          width: 3,
          length: 6,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YmE5MGI0MWItYjcyMS00ZGI3LTkwMmItNzFjYzc0ZjE4NThk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YmE5MGI0MWItYjcyMS00ZGI3LTkwMmItNzFjYzc0ZjE4NThk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjg5YWQ0MmYxLTc0NTItNDIzZC1hNTY2LWUyYmYyMDEyZmE3OA==',
          isActive: true,
          number: '6',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDNmMmM1NjMtNDQ2Yy00NTliLTk3YWItMTc4YTBhNGYyNWZk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDNmMmM1NjMtNDQ2Yy00NTliLTk3YWItMTc4YTBhNGYyNWZk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjQyMDA1MGNjLWI0ZWYtNGRlZS04NDk4LWEwNzBjNmQ2YTRmYw==',
          isActive: true,
          number: '7',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6M2E3MmU2YTctZGVkMi00ODg4LTlmMWQtM2UyZTM3ZDgxNDIy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6M2E3MmU2YTctZGVkMi00ODg4LTlmMWQtM2UyZTM3ZDgxNDIy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmQ5YjA2ZWI4LWFlYjAtNDMxNC1hNWQ4LTYxMTdkMzRkZGU1Zg==',
          isActive: true,
          number: '7',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDEyY2M1YmUtYzM2ZC00OTU0LTkzOGQtYTAxNzRjZWExYzYz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDEyY2M1YmUtYzM2ZC00OTU0LTkzOGQtYTAxNzRjZWExYzYz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmM2OGI2NDAyLTQzY2ItNDRmZi05NmFlLTliMzRlYzk0MDc5MQ==',
          isActive: true,
          number: '7',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDA1NmYyNDUtYmYxOC00YzZjLWExYzItOGI5MDljOTNlMWNm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDA1NmYyNDUtYmYxOC00YzZjLWExYzItOGI5MDljOTNlMWNm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmIxYjhjYzY1LTY2ODYtNDRkZS05NWVjLWUyNzNhYWViNzQ2MA==',
          isActive: true,
          number: '7',
          width: 3,
          length: 6,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTAwODQ1YzEtNDY5Ni00NjU2LWEyOTItZGQxMjY1M2Q0OWUz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTAwODQ1YzEtNDY5Ni00NjU2LWEyOTItZGQxMjY1M2Q0OWUz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmUzZmRiZTFlLTA4NWEtNDk3Ni1iZDNmLWZhM2UyZTA0OWIzYw==',
          isActive: true,
          number: '7',
          width: 2.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDgyOTk3NzQtYmE0OC00ZmNjLTgwZjAtNjBhNjZkNWQ2MWFk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDgyOTk3NzQtYmE0OC00ZmNjLTgwZjAtNjBhNjZkNWQ2MWFk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjIxNmMzMWE1LWMwYjEtNGFiZi05N2NmLWI0ZWY3MjNmMjE5YQ==',
          isActive: true,
          number: '8',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTU1MjI2OTUtMjQxNS00ZjM0LThjNWEtYTEyNGFmNjM3Y2Nm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTU1MjI2OTUtMjQxNS00ZjM0LThjNWEtYTEyNGFmNjM3Y2Nm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjdkMTFjNjhiLTVkYTYtNGEwYS05NWQ0LTVhNDQ3ZjQ1OTg3MA==',
          isActive: true,
          number: '8',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YjZkZGY4MTUtOTVkMy00MGQzLTg5OTMtODQxM2Y2ODIwYmNm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YjZkZGY4MTUtOTVkMy00MGQzLTg5OTMtODQxM2Y2ODIwYmNm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjg0Y2E1YThiLTJjZDktNDg1My05OWYzLTI0MWVjZjY4NjAxNQ==',
          isActive: true,
          number: '8',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ODZlZDc2NGItNDcxZi00YzhkLTlkZDAtMWVmY2M5NmU3NWQy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ODZlZDc2NGItNDcxZi00YzhkLTlkZDAtMWVmY2M5NmU3NWQy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjUxOTQ3OTAzLThkNGMtNGE0ZS04ZDk2LTU2OGMxMjYwN2I4NQ==',
          isActive: true,
          number: '8',
          width: 3,
          length: 6,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzQxNGRjY2UtNjE4YS00ZjMxLWI2OTgtZmFkNGYyYWU4NDgz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzQxNGRjY2UtNjE4YS00ZjMxLWI2OTgtZmFkNGYyYWU4NDgz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmI2MDUyYzA1LTYwMjUtNGUxNC05MGQ3LWI1MzcwMjRmMzk2ZQ==',
          isActive: true,
          number: '8',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YjM0MWMwM2ItZmRkZi00MTdiLWJkYmMtYjliZDBlMWUwYzA5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YjM0MWMwM2ItZmRkZi00MTdiLWJkYmMtYjliZDBlMWUwYzA5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjkzMjczODdkLWYyNmEtNGYyNC1iYTI2LTc1ZWU0YzQ1MTE2ZA==',
          isActive: true,
          number: '9',
          width: 2.75,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NmY3MTMxYWItYTE0YS00NDA2LWFhZTQtOTJmMmNlMzJmM2Zi',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NmY3MTMxYWItYTE0YS00NDA2LWFhZTQtOTJmMmNlMzJmM2Zi',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjY4NTE1NWE3LWRiNjEtNDIzNi04OGQzLTY3NDI3ODA2Y2NlMg==',
          isActive: true,
          number: '9',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6N2EyZDU4NTktYTE0ZC00ZTUxLWJlMWYtY2EzN2RiODhmYjEx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6N2EyZDU4NTktYTE0ZC00ZTUxLWJlMWYtY2EzN2RiODhmYjEx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmE4NGMzOGExLTNlMjYtNDQ1ZC1hMTZhLTY0ZjY1NTRlZGFkZQ==',
          isActive: true,
          number: '9',
          width: 3,
          length: 6,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZmMzNGU5NzEtZTc3Zi00NGRiLWE2ZjktMGRkYjIyMWQwY2U5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZmMzNGU5NzEtZTc3Zi00NGRiLWE2ZjktMGRkYjIyMWQwY2U5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjA1MTY3OWEzLTFjYzktNDdhYy05OTcxLThhZGI3ZWUwNzhiNg==',
          isActive: true,
          number: '9',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGI5ZGQzNTktZWZlMS00OWVhLWJlM2YtOWJkN2MyN2FiNGI0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGI5ZGQzNTktZWZlMS00OWVhLWJlM2YtOWJkN2MyN2FiNGI0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmEwNjljZjVhLTQwM2EtNDNjMi04ZjIzLWM1Y2JiNWMwMWQzMA==',
          isActive: true,
          number: '9',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MTZlYjc4Y2YtY2M1MC00NGM5LTkwNzMtM2JlNDU2NmZjMmM2',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MTZlYjc4Y2YtY2M1MC00NGM5LTkwNzMtM2JlNDU2NmZjMmM2',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmRjNDc2NTEzLTIxZTgtNDVkMi05ZmEzLTkwMGM4OWFhYzUxYw==',
          isActive: true,
          number: '10',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzY1Yjk1NmItMjk0Zi00NmMzLTg0ZmEtMThiYzYzNTdiODRk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzY1Yjk1NmItMjk0Zi00NmMzLTg0ZmEtMThiYzYzNTdiODRk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjU5YTRmNmE4LWUxMjYtNDY2ZS1hODJhLWIwMmY3MmI2ZjNhMQ==',
          isActive: true,
          number: '10',
          width: 3,
          length: 6,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NTEzMmI2ZmYtODBmMS00MWQ5LTgwNTEtYTJkN2MzMjdlMjQw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NTEzMmI2ZmYtODBmMS00MWQ5LTgwNTEtYTJkN2MzMjdlMjQw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmI1MzVhN2U3LTNiM2ItNDliYS05NDE1LTg5YzhjY2I3ZDNmMg==',
          isActive: true,
          number: '10',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTFiZTM4MTUtYTI3Yi00MDkzLWIwZDYtNDU5ZTcxMDI1MDQ1',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTFiZTM4MTUtYTI3Yi00MDkzLWIwZDYtNDU5ZTcxMDI1MDQ1',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjkxZDEzODE0LTViMjAtNGIyMi05NDI0LTA4YjZlMzA3ZWQ2Ng==',
          isActive: true,
          number: '10',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGM4NDM2ZDgtYWQ3Yi00Y2E3LWJlMTEtMTMyYmIxYTYwNjRh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGM4NDM2ZDgtYWQ3Yi00Y2E3LWJlMTEtMTMyYmIxYTYwNjRh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmIzNzZjZTYxLWZkOWMtNGQ2Yi1iNDZmLTgwYzlkYjlkYThhZA==',
          isActive: true,
          number: '10',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjg2YzMzNzAzLWM1ZWYtNGFjZC04NDkxLWMwZjlhZDEzZjNiOA==',
          isActive: true,
          number: '11',
          width: 3,
          length: 6,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjA4MzM2NTktNTEzYS00YjI1LTg2YjYtNDBkYjE3YTZhMWE5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjA4MzM2NTktNTEzYS00YjI1LTg2YjYtNDBkYjE3YTZhMWE5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjMzZjgyNzQzLTRhNzYtNDVjYS04MThkLWVmZWZiYWMwMmVlMg==',
          isActive: true,
          number: '11',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NzEzZjkwNTAtMzEzNy00MDM4LTgxMGItYjIxZTVhNjQ0Njk3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NzEzZjkwNTAtMzEzNy00MDM4LTgxMGItYjIxZTVhNjQ0Njk3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmRjNGU4ZDAyLThlN2YtNDBmMi1hMDVlLTgyNzRmNmRjYTk4OA==',
          isActive: true,
          number: '11',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OGNkZjc3NzItMTE5My00MGVmLWFlNTMtZmU0OGZiOTMyNTgz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OGNkZjc3NzItMTE5My00MGVmLWFlNTMtZmU0OGZiOTMyNTgz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjFlZTAyZGQ5LTVhM2MtNDI3ZC1iZWZmLTVmNmU3N2EyNWUyOQ==',
          isActive: true,
          number: '11',
          width: 2.75,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OWI3MWJiNGEtYTlkMS00M2Q0LTk4OWEtZmExMDdmY2FkODBk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OWI3MWJiNGEtYTlkMS00M2Q0LTk4OWEtZmExMDdmY2FkODBk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmVlNjNkNGRjLTExNTctNDk5OS1hMzY1LTJiZjFjYTcxNGQ2Yw==',
          isActive: true,
          number: '11',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MzllZTVhNWItOTFhNi00ODBiLTg4NzgtYzllYzI3YzQyZmU1',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MzllZTVhNWItOTFhNi00ODBiLTg4NzgtYzllYzI3YzQyZmU1',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjgyMzMwY2Q1LTY2YjYtNGE3Yy04ZDA5LWE3YWI2ZTEzMjdkNA==',
          isActive: true,
          number: '12',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzhhNjZkOWItOTBlYy00OGU2LTkxMzktNGMwNjVmYWVjYTdk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzhhNjZkOWItOTBlYy00OGU2LTkxMzktNGMwNjVmYWVjYTdk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjRlYzk2ZTM4LTA2NDQtNDhlZC1hMTZmLTQyOWE4NWFmY2Q5Mw==',
          isActive: true,
          number: '12',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzA1OGM4ODYtMzE0ZS00ODEyLWE2ODUtYmRiYjMyYjczMzZk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzA1OGM4ODYtMzE0ZS00ODEyLWE2ODUtYmRiYjMyYjczMzZk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmQ1ZDE4ZTc4LTJlMGMtNGZiNy05YWE5LTA4YjE0MmY5NmM4ZA==',
          isActive: true,
          number: '12',
          width: 3,
          length: 6,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6N2QxMGRhZTktYmVhZC00MzMwLThiNjItMjI0NDYwMzM1NmEz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6N2QxMGRhZTktYmVhZC00MzMwLThiNjItMjI0NDYwMzM1NmEz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmM0N2EzMmE1LTU3MjQtNDg0YS05ZjA5LTJmODM1MjJjN2Y3Nw==',
          isActive: true,
          number: '12',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Mzc2OGFkNTUtMjZlNC00ODU5LThjNmUtNjkwNmE3OTQzYzk0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Mzc2OGFkNTUtMjZlNC00ODU5LThjNmUtNjkwNmE3OTQzYzk0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmEyODA2OGM0LTU4YmYtNDdjMS04YmI5LTNhMTM2NWQzYzE1Mg==',
          isActive: true,
          number: '12',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDBjNDMyNDQtOTNhZi00YmFhLThjOGMtMWE1ZDU4MmEyMjI1',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDBjNDMyNDQtOTNhZi00YmFhLThjOGMtMWE1ZDU4MmEyMjI1',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjRlZTk2ZDEwLWRkNmItNDI1NS05MmEzLTUyNTNjZDIyZDdhMA==',
          isActive: true,
          number: '13',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzdlZDVhNDUtNDI2MC00OWRhLWIyMzktODg0MDE1Zjc4ZmYx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: true,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzdlZDVhNDUtNDI2MC00OWRhLWIyMzktODg0MDE1Zjc4ZmYx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmUxZDJiMWY5LTZhY2MtNDI2Mi1iZTg3LThlNGJlNDgxYWViNA==',
          isActive: true,
          number: '13',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjk5ZTNjM2E1LWQ5MmEtNDc0OC05NWY1LTMxNmNkNDNlNThhMA==',
          isActive: true,
          number: '13',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDY5ZjJlN2YtZDQ5Yy00ODQ3LTk1ZjQtNzY4M2Q2ZTA3MjNl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmUzMmJmZjYyLTE2N2YtNDRmYS05M2M5LTA1NDNmNDBjNWViOA==',
          isActive: true,
          number: '13',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MTdjMTE0NWYtNzEwYi00YjE2LTgzN2ItODAwMGMwZDY2ZmVl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MTdjMTE0NWYtNzEwYi00YjE2LTgzN2ItODAwMGMwZDY2ZmVl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjc2MDJkMDkzLTUyNWQtNGUxZi05ZWY0LTUyOGY5MmU2MWE5OA==',
          isActive: true,
          number: '13',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6M2E2Y2VmNzMtNjNkYi00YmE3LTg2ZTYtODQxOTMyYmUyYjQ0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6M2E2Y2VmNzMtNjNkYi00YmE3LTg2ZTYtODQxOTMyYmUyYjQ0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjM4NDFhZmJlLTQ0YjMtNGVkMy05NjgwLTAzNDE4YTQyMDQ2Yg==',
          isActive: true,
          number: '14',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGM4NDM2ZDgtYWQ3Yi00Y2E3LWJlMTEtMTMyYmIxYTYwNjRh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGM4NDM2ZDgtYWQ3Yi00Y2E3LWJlMTEtMTMyYmIxYTYwNjRh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjg2MTUwY2I1LWIxOGQtNDYyZC1hZDM5LWM2MDQxZTgxNjkxOA==',
          isActive: true,
          number: '14',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjlmZDdiOTgtZGY3Yy00NmJiLWI4ZjUtMWM0ZWQyY2U2MTU5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjlmZDdiOTgtZGY3Yy00NmJiLWI4ZjUtMWM0ZWQyY2U2MTU5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjYzODU5M2I2LTNiOGEtNDYxZS04MjI4LWVhYTZhZDcwYTdhNA==',
          isActive: true,
          number: '14',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ODBhYmEwZTUtZjE0Zi00ZDhlLTlhYzItZDAzNmU2YzJkMmJm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ODBhYmEwZTUtZjE0Zi00ZDhlLTlhYzItZDAzNmU2YzJkMmJm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmI3OWJiYTk5LTk0OTUtNGEwMC04YmQ2LTY5ZDU2YzVjNTFhYQ==',
          isActive: true,
          number: '14',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MmRmMWU0MGEtNmEwNy00YTM4LWJiYzQtMTI2YmU1M2MxNGFh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MmRmMWU0MGEtNmEwNy00YTM4LWJiYzQtMTI2YmU1M2MxNGFh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjllMmRhMzRiLWFiZWMtNDlhNy1iZDFhLTUwMWUwZmQ1YTdlNQ==',
          isActive: true,
          number: '14',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDlmZTVjZGYtOTUyMy00MzdmLWIyN2YtNTQ4NWYzZjJlMjI5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDlmZTVjZGYtOTUyMy00MzdmLWIyN2YtNTQ4NWYzZjJlMjI5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjQzYjJkNDRlLTAzNGMtNDVhNi1iYjE2LWViYWY1MTc1N2RhOA==',
          isActive: true,
          number: '15',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTE2YjQzMjQtNWQyNS00YjE0LWE0MTAtY2Q3MDU1NTkyYzBk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTE2YjQzMjQtNWQyNS00YjE0LWE0MTAtY2Q3MDU1NTkyYzBk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjJiNjYyZjNiLWQwNTYtNDRkZi05NDQ2LWYwZjYwMzhiNDExMQ==',
          isActive: true,
          number: '15',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjA1ZDk1MzQtMjI1ZC00MjY1LWEyNjMtOTU3OTkxZDMzNWEw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjA1ZDk1MzQtMjI1ZC00MjY1LWEyNjMtOTU3OTkxZDMzNWEw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmJhZTUxM2Y4LTQ0OWMtNDRjYi1iODY4LTVlNjc5ZjNkZjU4OA==',
          isActive: true,
          number: '15',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDQxYzY3NWMtMTc1NC00YWQwLWE0MDItZGY2NjU0NTQwMDQy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDQxYzY3NWMtMTc1NC00YWQwLWE0MDItZGY2NjU0NTQwMDQy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmYxYzAxY2NlLTY0ZDQtNDhiZi04MjJmLWVlMWZmMDVkY2Q3ZQ==',
          isActive: true,
          number: '15',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjE4MTIwZmYtNTQwMy00ZjViLWJkM2YtYzU0NmNkNjI5MGNh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.ERROR,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjE4MTIwZmYtNTQwMy00ZjViLWJkM2YtYzU0NmNkNjI5MGNh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjA1ZWJhZjNiLWY4NWMtNDlmNy04MjE2LWE3ZDUwNGU0MDA1MA==',
          isActive: true,
          number: '15',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NjYyODNlY2YtNDdmNy00OTcxLWJkYjAtMTljY2UwNDMzYmE3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NjYyODNlY2YtNDdmNy00OTcxLWJkYjAtMTljY2UwNDMzYmE3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmMwNDc0ZDg4LWY1MWMtNGJiZS04YTBhLTcyZjczNGI0YTVkYw==',
          isActive: true,
          number: '16',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmRjNWQzNzQ1LWYzZjItNGE5Zi04MGRkLWQ0ZmU2ZTAwM2Y1Ng==',
          isActive: true,
          number: '16',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OWJhNWM3OTQtNzAwYS00ODJhLWIyOGEtODI1NGFkZDU5NGVh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OWJhNWM3OTQtNzAwYS00ODJhLWIyOGEtODI1NGFkZDU5NGVh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjk4NmMzMDE1LThkMWItNDQ0YS05NTZjLTAwNmM2MzNlNzQ4Yw==',
          isActive: true,
          number: '16',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTBjMDdlZGYtMmNlZC00OWMyLTlkNDYtNzVhYTRlZTM2ZTNi',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTBjMDdlZGYtMmNlZC00OWMyLTlkNDYtNzVhYTRlZTM2ZTNi',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjc0MDM2YTc4LTMzZjAtNDM4MS04NjNhLTExZGYwNDI1MjkyNw==',
          isActive: true,
          number: '16',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YjAwOWUwOGMtZWJmNC00NjM4LThkOWMtNDNjZTA1MTA5YzYy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YjAwOWUwOGMtZWJmNC00NjM4LThkOWMtNDNjZTA1MTA5YzYy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6NzU4MmU1NzctZmFlZi00OWRhLWI0YmMtZWZmNGRiZDAwNDNh',
            properties: {
              identifier: '19 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjMzZjlkMDgzLWQ5MmUtNDI2MC1hMDQxLTc1YzdiZGNhMWVlYg==',
          isActive: true,
          number: '16',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTZjODFmOWQtNDU1NC00NGQ5LTg1MTctNzQ5YmI4Mjc1YWJm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTZjODFmOWQtNDU1NC00NGQ5LTg1MTctNzQ5YmI4Mjc1YWJm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmQxN2RhZjQxLTVmMGUtNGVkMC1iZGQxLTVkMjk5NGIzNWRhNA==',
          isActive: true,
          number: '17',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDNhN2VjZGEtZjkzYS00NDQxLWE4ZTMtZGE3MWRkNTQwMTYy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDNhN2VjZGEtZjkzYS00NDQxLWE4ZTMtZGE3MWRkNTQwMTYy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmM2YzBkODE4LTZkMTgtNGI1Yi05ZDRiLWYwYjJhNDIzNzQ1OQ==',
          isActive: true,
          number: '17',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6M2JiMTM3YjQtNTFhMi00OWFhLTljMjMtYjBlOGUwYmE2YTQ2',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6M2JiMTM3YjQtNTFhMi00OWFhLTljMjMtYjBlOGUwYmE2YTQ2',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjZkMTYzYTQ3LTcxZTEtNDY1Yi04YjIzLWZiNzlhNjgwMDYxYw==',
          isActive: true,
          number: '17',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzIyZDYwMGYtYTY5ZC00ZjMzLTg3M2MtNjAyMjI4MWJhZWQ2',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzIyZDYwMGYtYTY5ZC00ZjMzLTg3M2MtNjAyMjI4MWJhZWQ2',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmQxZTU3ZDY5LWNhNWYtNDE0My04NDg2LTk1ZTBhNWIzMzE1Nw==',
          isActive: true,
          number: '17',
          width: 2.75,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Y2YzOWQ2NzItMzZiOS00YjM4LWIwMGMtZWI4NTkyNTk2Zjc0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Y2YzOWQ2NzItMzZiOS00YjM4LWIwMGMtZWI4NTkyNTk2Zjc0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjliMTMyN2FlLTg1ZDAtNGY2OS1iMGJhLWZiOTkxYzVmMDkwOQ==',
          isActive: true,
          number: '18',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTAwODQ1YzEtNDY5Ni00NjU2LWEyOTItZGQxMjY1M2Q0OWUz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTAwODQ1YzEtNDY5Ni00NjU2LWEyOTItZGQxMjY1M2Q0OWUz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjI3OWU2ZDFkLTAwZjMtNDdmZi1iZTczLTg3YmE0ZDU0NWYzZA==',
          isActive: true,
          number: '18',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDI5MGQwNGEtYjRmNi00YTIxLTkwNmYtZTVjMzkwYWRiNDY0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDI5MGQwNGEtYjRmNi00YTIxLTkwNmYtZTVjMzkwYWRiNDY0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmZhMmRiNGYwLTg1NzUtNDQzOC05ZTgwLWU5Y2FhMGE5MzQxMw==',
          isActive: true,
          number: '18',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzJkMGRkMGUtODA4Yi00ODRhLWJmZDktOTNlMjhlMjFmZWYz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzJkMGRkMGUtODA4Yi00ODRhLWJmZDktOTNlMjhlMjFmZWYz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjJiYzI3Y2VmLTFjNGYtNDM1ZC05MGVhLWM0NWU5YmNiNzE1Ng==',
          isActive: true,
          number: '18',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDI1YzhmOGYtYWE2OC00ZWY2LWExNTEtOTI1OTFhODRkNTJh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDI1YzhmOGYtYWE2OC00ZWY2LWExNTEtOTI1OTFhODRkNTJh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjBjNTljOTBiLTVlYzAtNGE2ZC1hZGMzLTVkYjc1ZGRmOTA4OQ==',
          isActive: true,
          number: '19',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OWIyZTlmN2QtZDljOS00M2I3LTg2ZTgtN2Q2Nzk3MGNlMTQz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OWIyZTlmN2QtZDljOS00M2I3LTg2ZTgtN2Q2Nzk3MGNlMTQz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmVjNzBlODcxLWM1NDQtNDI1My1hMjRlLTRlZjFlZjI1M2YwNg==',
          isActive: true,
          number: '19',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NmY4ZjA3YjgtMmI1Ny00NTQxLWI2MjktYjQyNDc4M2FmYmQy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NmY4ZjA3YjgtMmI1Ny00NTQxLWI2MjktYjQyNDc4M2FmYmQy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjE1ZmEyOWIzLTYyZmQtNDJiMC05ODYzLWI5OGUxOWFjZjJkZQ==',
          isActive: true,
          number: '19',
          width: 2.75,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZmI1MTkzNTMtYzZhNS00YmFiLWE2OGUtMDM1NDUyMmZjYmVl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZmI1MTkzNTMtYzZhNS00YmFiLWE2OGUtMDM1NDUyMmZjYmVl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmIzZDFkMGNjLWJmNTktNDJiNC05MGIxLTUxOWY3ZTgyZDQxNQ==',
          isActive: true,
          number: '19',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjY0MGUwNTctZTExOC00ZDQ5LWFjNTItYzg1MWE4Yjk0YTU5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjY0MGUwNTctZTExOC00ZDQ5LWFjNTItYzg1MWE4Yjk0YTU5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmI4NDA5NTk1LWY0N2UtNDM5Mi05NTQxLTdmNGNiYjFjNzg5Nw==',
          isActive: true,
          number: '20',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Y2EzNmY3NzktZjYyZC00M2EzLTgwYTEtOTI0ZTMxMTMwYTkx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.ERROR,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Y2EzNmY3NzktZjYyZC00M2EzLTgwYTEtOTI0ZTMxMTMwYTkx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmQwMjZiOTlmLTJmOWItNDlmMS1iY2Y5LTQyNDcxYmU2NDQ5Mg==',
          isActive: true,
          number: '20',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTEwN2JjMWYtOGVmNS00ODllLTlmZWYtZjMwYWZhODY5NDkx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTEwN2JjMWYtOGVmNS00ODllLTlmZWYtZjMwYWZhODY5NDkx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmNkYWU3ODEwLWQ2NDktNDYyNi05ZWU1LTBhNTA1ZGQ2ZDk2Yg==',
          isActive: true,
          number: '20',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjBiNWNiNTctZDE1NC00YjNlLThiNWUtNjYyNzhmNDI3ZjRj',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjBiNWNiNTctZDE1NC00YjNlLThiNWUtNjYyNzhmNDI3ZjRj',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjMyZDgxNDVjLWE3M2QtNDY1Yi1iOTJlLThkYWM5ODIyMWQ2YQ==',
          isActive: true,
          number: '20',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzZlMzg4MTAtYzBiMS00ZDVkLWJmYmEtYjNmMTJmYzdkMDgz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YzZlMzg4MTAtYzBiMS00ZDVkLWJmYmEtYjNmMTJmYzdkMDgz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjg1NWYzMDkzLWM2ODUtNGQwNS04OWNiLTVhM2U3NzVhZjU4Ng==',
          isActive: true,
          number: '21',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NWY5YjhhMmEtMWFkZC00ZjhiLWIzMDYtZTIzMjdlODg5OGYx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NWY5YjhhMmEtMWFkZC00ZjhiLWIzMDYtZTIzMjdlODg5OGYx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjZhZDE4ZmI4LTU4YzgtNGJlNC1hOGJhLTZjNDk4NjExZGU2Yg==',
          isActive: true,
          number: '21',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ODFjN2NmYjEtZTZlNC00OTM0LTlhZmItZGRmNWFiNmFkOGJh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ODFjN2NmYjEtZTZlNC00OTM0LTlhZmItZGRmNWFiNmFkOGJh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjdmZTgyYmM4LTQ1OTEtNDFiZS1hODMwLWVmYmJlOGNjMjI2Mw==',
          isActive: true,
          number: '21',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NGRiZmIyNDItM2YyYy00MjFlLWI2N2QtOTdmYjQ4NDA4Y2Y0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NGRiZmIyNDItM2YyYy00MjFlLWI2N2QtOTdmYjQ4NDA4Y2Y0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmQ3ZGQyODJjLWExYjMtNGNjMS1iMDRhLWE4MzdhNTg1NjUzMA==',
          isActive: true,
          number: '21',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NWJhYzRiMWMtZDZkZi00MTU0LWIyNjItZjBjYTE5MWNlMTQ4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NWJhYzRiMWMtZDZkZi00MTU0LWIyNjItZjBjYTE5MWNlMTQ4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjAwNDIxNWM3LTAwMmUtNGJmZC04YjM0LTAwZjE2NjAzMWM0ZQ==',
          isActive: true,
          number: '22',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NzAyNjhlMTMtZmM4MC00ZDgzLWE2MWYtYWVlNGE0NjAxMGM4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NzAyNjhlMTMtZmM4MC00ZDgzLWE2MWYtYWVlNGE0NjAxMGM4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjA2MDU3YzJlLWY2ZmItNGEwOS04NGE1LTgzMGFkNDk4OWQzZA==',
          isActive: true,
          number: '22',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OWI3ZjdhNmUtN2M3Ni00MjU1LTllMzktNTZmZjQ4Njc2YWE0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OWI3ZjdhNmUtN2M3Ni00MjU1LTllMzktNTZmZjQ4Njc2YWE0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjE5OTg0NjQ2LWVjYzAtNDllNy04OTlkLWI3MzkwYmYwOGRhYw==',
          isActive: true,
          number: '22',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MWU0ZTIzZjMtOTEyZS00MDhmLWFhOWItYWU3MWVlMGMyOTQ0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MWU0ZTIzZjMtOTEyZS00MDhmLWFhOWItYWU3MWVlMGMyOTQ0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmFiY2NjYzQzLTJjZWUtNGQwNS1hY2IwLWJjNDRkZWU3NjRhZA==',
          isActive: true,
          number: '22',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MzJiZTViYmYtYWE5MC00Mzk3LTkxMDMtNWE5ZThmNjcxMGIx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MzJiZTViYmYtYWE5MC00Mzk3LTkxMDMtNWE5ZThmNjcxMGIx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmE2YzYwNTJhLTg3NDMtNDliNi04YjJjLTNlYjczZGM5ZTZlNg==',
          isActive: true,
          number: '23',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjBhZWZjNzMtNDQwOC00YjY2LTg0MzYtMTNiYjc2MDQxM2Ex',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjBhZWZjNzMtNDQwOC00YjY2LTg0MzYtMTNiYjc2MDQxM2Ex',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjE4M2I2MjIyLTA2YTUtNDhlMC1hZDE5LTg3MzcxMmM2YWE0NA==',
          isActive: true,
          number: '23',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MzhlY2ZjYmYtMjYzMy00OGJlLThlOGYtNzVmZjAxMGMzZTkw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MzhlY2ZjYmYtMjYzMy00OGJlLThlOGYtNzVmZjAxMGMzZTkw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmE2YzAzNTI3LWM0YjUtNGIzYS1iNWExLWViZjE0Mzg1NWFhMw==',
          isActive: true,
          number: '23',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDE1NWYzMDMtYTgzZi00ZGJhLWJkYjctOTIyZWFlODQyYmZl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDE1NWYzMDMtYTgzZi00ZGJhLWJkYjctOTIyZWFlODQyYmZl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmE4NWI1NjhhLTNlNmMtNDI2NC05NWUxLTc5ZTQ2OGQ2NjkyZg==',
          isActive: true,
          number: '23',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTI3Y2M2YzItMDg4ZS00N2NlLWFmMzMtMzI5OGM1YmNhOWE4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTI3Y2M2YzItMDg4ZS00N2NlLWFmMzMtMzI5OGM1YmNhOWE4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjQwOTViNGU4LTE4ZmQtNDBjYS04YWEyLWM0ZjdlYzU0OWM1ZQ==',
          isActive: true,
          number: '24',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDgzNDRmODgtMjU0YS00YjMzLWE1MWItYWQ3NmNmYjJiOTlh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDgzNDRmODgtMjU0YS00YjMzLWE1MWItYWQ3NmNmYjJiOTlh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmE1NmQyNDBjLTcwYjktNGNkNS05OWNiLTM1ZGI0YWQ2MmRiYw==',
          isActive: true,
          number: '24',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTM2M2UwMTktYzE4Yi00MGJjLWJjNTItNDEzZmVkY2VmN2M5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.ERROR,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTM2M2UwMTktYzE4Yi00MGJjLWJjNTItNDEzZmVkY2VmN2M5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmU1ODk0M2NhLTMzOGEtNDVjZC1iNTNmLWE1NzdkODNiZWVlOQ==',
          isActive: true,
          number: '24',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OWY1MmRkMTYtMmFhYy00YWY4LWFlNGEtNGY0MDk1NjRiMzUx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OWY1MmRkMTYtMmFhYy00YWY4LWFlNGEtNGY0MDk1NjRiMzUx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjdiNThiYjIxLWM3MzEtNDRlOC05YTVhLTg0M2NlYjY2M2YwYQ==',
          isActive: true,
          number: '24',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OWI0ZjY0ZTItY2UxNy00OWNhLTg0ZjMtMzJjYmNhNTY1NGE3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OWI0ZjY0ZTItY2UxNy00OWNhLTg0ZjMtMzJjYmNhNTY1NGE3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjFkMTBjOWU3LTU1NTUtNGZiMS1hZmJhLThkNzYyYmMyNzc2Zg==',
          isActive: true,
          number: '25',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTc2Zjg0YWMtNzc2Yi00MThlLTk1YzgtNmU4MDk1YmY4YzAw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTc2Zjg0YWMtNzc2Yi00MThlLTk1YzgtNmU4MDk1YmY4YzAw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjQ0YzVhMWRiLTIyNGEtNDEzOS1iYzRkLTZhZDQ1MzI4NmM0ZA==',
          isActive: true,
          number: '25',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjM0MjZjMTUtNzU2ZS00YTVkLWI3Y2YtNzIxOTE1YzU1ZmFk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjM0MjZjMTUtNzU2ZS00YTVkLWI3Y2YtNzIxOTE1YzU1ZmFk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmZmMTA0ZDE1LTI3YjItNDhkMS04ZDg4LWM2ODkzMGZkYjVlMA==',
          isActive: true,
          number: '25',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MWVkYmJjOTEtYTEyMS00MDE5LTk2MWYtOGYzZGQ0MzE3M2I1',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MWVkYmJjOTEtYTEyMS00MDE5LTk2MWYtOGYzZGQ0MzE3M2I1',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjBjYzIxYjEwLWE1NzYtNDBjNS1iMmIxLWI5NzM3YzMzN2E3NQ==',
          isActive: true,
          number: '25',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjRlZTIwMTRkLWVjYTMtNDdiNy05YjM1LTY1NjM1ZTQ4YjQxMA==',
          isActive: true,
          number: '26',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTg0M2NkOTgtNjRiMy00ZGQwLTk1NzMtZTc5ZGUxMGJiNzJk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTg0M2NkOTgtNjRiMy00ZGQwLTk1NzMtZTc5ZGUxMGJiNzJk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjA4OTFjMTk0LTc4OTMtNGNlNi1hODdkLTUwZWQzNGY2NDM3YQ==',
          isActive: true,
          number: '26',
          width: 4,
          length: 17,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDE4ZDllOTctNjBmOS00NThmLThlZWItOGZjNmI3NjRlNzc3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDE4ZDllOTctNjBmOS00NThmLThlZWItOGZjNmI3NjRlNzc3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjk2NjllNjJiLTdjMWMtNGVkYy1hYjcwLTE1MjA5OGM3YTYyNg==',
          isActive: true,
          number: '26',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NzU2YjkwMjgtZTNlNC00NzU5LTliY2ItZDIxMmViOGJmZDY3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NzU2YjkwMjgtZTNlNC00NzU5LTliY2ItZDIxMmViOGJmZDY3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmE1OTQwMDZlLWExMDctNDI5NS1iMzAzLThkMWM0OTY5ZDJkNg==',
          isActive: true,
          number: '26',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDM5ZmQzZTgtN2Q1OC00NDFlLTg0YmYtYTI5YWMyMWMwYWIy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDM5ZmQzZTgtN2Q1OC00NDFlLTg0YmYtYTI5YWMyMWMwYWIy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjlhYmE1ZTNiLWE3MTUtNDI5NC1hNmQ3LTE3MGQ3Yjc0ODllZA==',
          isActive: true,
          number: '27',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NTg4M2U3NmMtOTA0YS00MzBlLWJhN2YtNTI2MDM3ZGJiYzcx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NTg4M2U3NmMtOTA0YS00MzBlLWJhN2YtNTI2MDM3ZGJiYzcx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjRhNDk4N2EyLWMwNTEtNGJjZC05MWFhLTVmNjIzN2ExMzE5MQ==',
          isActive: true,
          number: '27',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjMyMzcyNzEtYWM1OC00ZjQ3LTg1NjgtMTJjOWI5ZWRiNzgw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjMyMzcyNzEtYWM1OC00ZjQ3LTg1NjgtMTJjOWI5ZWRiNzgw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjQ4MTI0YTQzLWQ3NjUtNDg5MS1iNDBjLTAyM2NjMmNlNzJmOA==',
          isActive: true,
          number: '27',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6M2FkMWY4YzgtNjgxNi00NWFmLTgwODctNWMxNjc5N2Y1YzE4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6M2FkMWY4YzgtNjgxNi00NWFmLTgwODctNWMxNjc5N2Y1YzE4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjRmYmFkM2MwLWRlYjItNDA3Ny1hY2Q0LWExMDVkZmEwNDM0OA==',
          isActive: true,
          number: '27',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDM0ZjJlNzEtYWFiMC00MGZlLTk0MDctY2I1YmFlNDJkZjNh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDM0ZjJlNzEtYWFiMC00MGZlLTk0MDctY2I1YmFlNDJkZjNh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmNhNjRkMjc5LTA5ZmItNDdjNC05OGY2LTA5OGUyZjYyOWE3OQ==',
          isActive: true,
          number: '28',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NTMyYTc0OGUtNWJmMy00Y2Q3LWFhODctNDBjNTY3ZjhmYmJl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NTMyYTc0OGUtNWJmMy00Y2Q3LWFhODctNDBjNTY3ZjhmYmJl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjQ0OGRhZTU0LTFiZjctNDhlMy1iNzhmLTNiOTIxODdiYTU5MA==',
          isActive: true,
          number: '28',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Mzk3MzQxMTgtMzE3NS00Mzk5LWI3YjYtM2VjNmQzMzM4NTlm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Mzk3MzQxMTgtMzE3NS00Mzk5LWI3YjYtM2VjNmQzMzM4NTlm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmVkMTNhYWRiLWRhNWEtNDYzYS1hNjI3LTk5ZDhlOGZjMDA0Nw==',
          isActive: true,
          number: '28',
          width: 4,
          length: 17,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ODc3YzM1OTctMzBiOS00M2MwLThkZDctNDQwN2RiODI2MmIz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ODc3YzM1OTctMzBiOS00M2MwLThkZDctNDQwN2RiODI2MmIz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6MjYwM2QwYjgtNTUzZi00MDk0LTgyNGEtN2VhOWEzYzM5MTI3',
            properties: {
              identifier: '10',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjdmZjk5NzFiLTQ1ZjItNDA5NS1iNDI4LTE3ZTgzMGZhNmJiNw==',
          isActive: true,
          number: '28',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTJhZjczNGMtMjNlNi00YjQ0LThmYmUtZDM1YmMwYjIwMDBl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTJhZjczNGMtMjNlNi00YjQ0LThmYmUtZDM1YmMwYjIwMDBl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjhmNjU1ZTViLTI3MzAtNDViYi1iNDRiLWI5MmRkZjZmZDcyYw==',
          isActive: true,
          number: '29',
          width: 3.5,
          length: 12,
          depth: null,
          mooringType: BerthMooringType.STERN_BUOY_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTMzNjFmYzktYzZkMS00YmJkLTgyMjktNjllN2VjNDU3MmJk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.ERROR,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTMzNjFmYzktYzZkMS00YmJkLTgyMjktNjllN2VjNDU3MmJk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6YzQ3MzZhYTgtZGY2OC00Y2RmLWJmN2ItOTMyZmM0MjlkZjRi',
            properties: {
              identifier: '19 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjZiMTcxOGQwLTQ2YTUtNGQ5ZC1hYmI3LTU0YWZmMDBhMTc2MA==',
          isActive: true,
          number: '29',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NWIxYjhiZmQtMjg3Ny00ZTlmLTk1YjAtOWUwZjUwNjE1OTQ4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NWIxYjhiZmQtMjg3Ny00ZTlmLTk1YjAtOWUwZjUwNjE1OTQ4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjFmOTkwMjg0LTUzMTEtNDMwZi1iYTE1LWY0NzIwYjM0NWU4MA==',
          isActive: true,
          number: '29',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGIyYjcwNjUtZmI5OC00ODM5LWJlMDYtMzhmODE4OWU5ZTA4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGIyYjcwNjUtZmI5OC00ODM5LWJlMDYtMzhmODE4OWU5ZTA4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjQzNzg0MTYyLWQzZTItNGJiYy05ODBlLWFjZDY5MjQ3MzMxOA==',
          isActive: true,
          number: '30',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZWJiYjA1MTgtNTNhZC00MDNhLTlmMmEtOTQwM2UyNjU1YWJl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZWJiYjA1MTgtNTNhZC00MDNhLTlmMmEtOTQwM2UyNjU1YWJl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmIzNzNhMmQ3LTc5M2YtNDY5NC04YmJiLTljMTg3NzU4YWI0OQ==',
          isActive: true,
          number: '30',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDk4MzE3YTQtNGRkMy00NTJhLThhMTgtNjFjMTIzYWUyY2Vh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NDk4MzE3YTQtNGRkMy00NTJhLThhMTgtNjFjMTIzYWUyY2Vh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjc2Mzk4OTJlLWI0OWItNGNlNy05ZGI5LWMwMTdlYTc1ODVmNA==',
          isActive: true,
          number: '31',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGY5N2Y5MWQtMWYyOS00ZWZmLWFiZmYtZjcxZjNlZDhlODA3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGY5N2Y5MWQtMWYyOS00ZWZmLWFiZmYtZjcxZjNlZDhlODA3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjM0OTkxOTVmLTlmYTMtNGFmOS04NDA2LTdmNGNhNjY5NjFiZQ==',
          isActive: true,
          number: '31',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZmIzNjUxOTYtNDFmMS00NTMzLTkxMzAtNzYwNTc5NTRmZWE5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZmIzNjUxOTYtNDFmMS00NTMzLTkxMzAtNzYwNTc5NTRmZWE5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjE1NDFlZGIwLWE3YTgtNDZmZS1hYTMyLWQ3NjZjYTQyM2E1Yw==',
          isActive: true,
          number: '32',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MmY1Yzg4ZDQtNGQ2MC00MTBjLWI3OWMtMjM2YTU2NDU1ZDc4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MmY1Yzg4ZDQtNGQ2MC00MTBjLWI3OWMtMjM2YTU2NDU1ZDc4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjdkNjAzNWU5LTgyZTYtNDFlOC04OTllLTdkMjMzN2VhMDZiNA==',
          isActive: true,
          number: '32',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTk4ZmI3ZTctZmJlYy00MDdmLTllM2ItZGRmMWVjZDk3ZjQy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTk4ZmI3ZTctZmJlYy00MDdmLTllM2ItZGRmMWVjZDk3ZjQy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjFkODk3YTkwLTI4OTItNDRkOC05ZDExLWNmNjU3Nzc3OWRmMA==',
          isActive: true,
          number: '33',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTVlNWNhMTEtZmIyNS00ZGNlLTliOTYtNGE5NDNjMmM3MDU0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTVlNWNhMTEtZmIyNS00ZGNlLTliOTYtNGE5NDNjMmM3MDU0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmM1M2I4M2E0LWFjNmQtNGQ2MC1hOTljLTcxNjYwNzUzNzkyNw==',
          isActive: true,
          number: '33',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NThjNTY0YzEtNzY0Ni00OTEzLTgzMTUtYzkxYzRmNmVhOGZh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NThjNTY0YzEtNzY0Ni00OTEzLTgzMTUtYzkxYzRmNmVhOGZh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjUyNDk4ZmFiLTA2MDMtNDE0OC04YjlhLTc5ZDI0MDg0NWMyMg==',
          isActive: true,
          number: '34',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Y2NhMDE2ZDgtOGYxZC00MzI5LTkzZjktYWVjZjM0MzY3ODBl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.ERROR,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Y2NhMDE2ZDgtOGYxZC00MzI5LTkzZjktYWVjZjM0MzY3ODBl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmM3YWU4MjY4LTI5NmYtNDIwMC1hYWVjLTM5MGJhZTYxNWNiYQ==',
          isActive: true,
          number: '34',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YTMyYmY4OTYtZWYxYi00YzQ4LWJhNjctZTMwMTY1OGZjYzQ5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YTMyYmY4OTYtZWYxYi00YzQ4LWJhNjctZTMwMTY1OGZjYzQ5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjMzZGVmOGQxLTMyZTMtNGNmZi1iMzlmLWRiY2QwYWE1MDgzZQ==',
          isActive: true,
          number: '35',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MzVjOWI5YjEtYjVlMi00OGRhLTg1MDYtYmU5N2MxYjcwNjli',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MzVjOWI5YjEtYjVlMi00OGRhLTg1MDYtYmU5N2MxYjcwNjli',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjM1ODkyZTQzLWIwN2UtNGUyNS1hZGVlLTk5NzA4MmJjODg0Mw==',
          isActive: true,
          number: '35',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjQ3NzZiODctNTYwZi00MjA3LWFlMjMtODExMmVjNDdmN2Rl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjQ3NzZiODctNTYwZi00MjA3LWFlMjMtODExMmVjNDdmN2Rl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjJkMjYxNWU1LWQwNGItNDQxZi1iYmVjLTEzNzMyNmY1MzA0Mw==',
          isActive: true,
          number: '36',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YWVlN2NkMDYtMzk3Mi00Yjk0LWI2NTctZDljMTUzNmU2MDky',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.ERROR,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YWVlN2NkMDYtMzk3Mi00Yjk0LWI2NTctZDljMTUzNmU2MDky',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjMzMDU0NjA1LWMyMDAtNGRlYy04N2ExLTI1YTQ3NWQ4OTI4Mw==',
          isActive: true,
          number: '36',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NTMxZGFhMDktNThkYi00ZjM4LTljN2ItN2I1YTVmZjU4NDY4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NTMxZGFhMDktNThkYi00ZjM4LTljN2ItN2I1YTVmZjU4NDY4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2IxNmYyYmMtYjBjNi00N2RmLWFkNjItYTdlYTc1NWVmOTI1',
            properties: {
              identifier: '11 b',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjYzOGE2NWNiLTIyMWEtNGMzMi1hNjIyLTJhYmNlMWYzZmFiNg==',
          isActive: true,
          number: '37',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NzRjZmE2ODgtN2Q4ZC00ZmJkLTk3OGYtMTk0ZTkxYzI0MjRh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NzRjZmE2ODgtN2Q4ZC00ZmJkLTk3OGYtMTk0ZTkxYzI0MjRh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjMxYTVlYzRhLTVjMjgtNDlhOS1hYjBiLTIxYzZmMWM2NGE2Zg==',
          isActive: true,
          number: '38',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmNkZjU3ZGQ1LTZmZDMtNGJkOS1iMTRlLTM0YTM4NDAyNzgyNw==',
          isActive: true,
          number: '39',
          width: 2.5,
          length: 5,
          depth: null,
          mooringType: BerthMooringType.SINGLE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjAwNTQzYjk3LTQwODUtNDAyYy1iYjc0LTc1MmE0OWJkMzMxNg==',
          isActive: true,
          number: '40',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTgxZDM5YzktMWQyMC00ZDAxLTkzNWUtMTIzZGQ4NDhkNjdh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTgxZDM5YzktMWQyMC00ZDAxLTkzNWUtMTIzZGQ4NDhkNjdh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjQ1ZWVkZTAzLTYzZDUtNGI4ZC1hNDM4LTZiZmFiOWFiZTk3Nw==',
          isActive: true,
          number: '41',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmI1OTNjMmUxLWE1MGEtNGQ2Yy1hNzQ0LWY5M2I4ODY5ZmFmNg==',
          isActive: true,
          number: '42',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OWVkZTA0YjEtYjg4NC00NDAyLTk3MDktODJjZGVhZGExY2Rl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OWVkZTA0YjEtYjg4NC00NDAyLTk3MDktODJjZGVhZGExY2Rl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjI2YjUyZWRkLTI5N2UtNDBhMy1hYTY5LTkzODUyM2Y3ODM2Mg==',
          isActive: true,
          number: '43',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGI5ZGQzNTktZWZlMS00OWVhLWJlM2YtOWJkN2MyN2FiNGI0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGI5ZGQzNTktZWZlMS00OWVhLWJlM2YtOWJkN2MyN2FiNGI0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmMzODgwYjQwLTNkMzgtNGJmYi1hYjYwLWM5Zjg0ZjI4Mjk5ZA==',
          isActive: true,
          number: '44',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjdkNTk5NGMtYzczYS00ZjUwLWIxNDktOTI4ZTZhMmY3NjIz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjdkNTk5NGMtYzczYS00ZjUwLWIxNDktOTI4ZTZhMmY3NjIz',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjdlMTRjNDdiLTA4OWMtNGEyNC1hNjQ2LTUxNThmZDRkNDNjYw==',
          isActive: true,
          number: '45',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NWU2YzgwODItMGE1Zi00N2RhLWJjMTEtMGVjOWFmODBkOGYx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NWU2YzgwODItMGE1Zi00N2RhLWJjMTEtMGVjOWFmODBkOGYx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjMzMDJlOTc5LTUzNWYtNGVlYi04YmZhLTZkODkzZDI3YzdiMQ==',
          isActive: true,
          number: '46',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjVkNDI0MmEtYjI5OS00MTQ4LWI0ODctNmM3MTk0MmEwMmI0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjVkNDI0MmEtYjI5OS00MTQ4LWI0ODctNmM3MTk0MmEwMmI0',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjE1ZjQ5YzRhLWQ4MGItNDY0My1hODY4LWZhMDhiYjdiYzViZQ==',
          isActive: true,
          number: '47',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTQ2MzEyMzEtZjQxMi00MDBiLWI3MTktZWQ0OTRmMTAxYmIy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTQ2MzEyMzEtZjQxMi00MDBiLWI3MTktZWQ0OTRmMTAxYmIy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmNkNmE5ZWUyLWQ0NGEtNDE3Zi04YmEzLTRlNmE0MTJkODE3Yw==',
          isActive: true,
          number: '48',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MTQ0NTI3Y2YtMzY3NC00Yzc4LThmNjItMmIwY2ZmMzVhMTUy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MTQ0NTI3Y2YtMzY3NC00Yzc4LThmNjItMmIwY2ZmMzVhMTUy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjM0NTUxNDNkLTJjYzctNGNjZC1hNGE1LTY3Yzg5MDRhMTQ3ZA==',
          isActive: true,
          number: '49',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDBiODcwZDQtNzY0MS00ZDY5LTgyYmEtYTYyNDg5MDNjNzVh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDBiODcwZDQtNzY0MS00ZDY5LTgyYmEtYTYyNDg5MDNjNzVh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmY1MmRmMTIwLWY3NzEtNDEwOC05MzFlLTY5MzRhOTYxNjg3Mw==',
          isActive: true,
          number: '50',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTMzNDU0NjEtY2E3NS00MGE4LTk5OGMtZTljMjRjN2I4YmZj',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTMzNDU0NjEtY2E3NS00MGE4LTk5OGMtZTljMjRjN2I4YmZj',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjU5NjE0OWY3LTcwOGYtNGRjMC1hZTRlLTQ5MTdiZmUwNTUxMg==',
          isActive: true,
          number: '51',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YWUyNDYxYTItOTNkYi00NmJhLWE5Y2MtYTNmMjI5MjYzYmU1',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6YWUyNDYxYTItOTNkYi00NmJhLWE5Y2MtYTNmMjI5MjYzYmU1',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjcyNmFmNGEyLThkMjctNGNlNS1hNjJkLTRkYjk5YzZmMTcxYw==',
          isActive: true,
          number: '52',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NjZlYmYzZmQtNzc4Mi00ZTc2LWE5YmMtYmJjN2E3YzAyYTAy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NjZlYmYzZmQtNzc4Mi00ZTc2LWE5YmMtYmJjN2E3YzAyYTAy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjQzODVkNTA5LTA4ODMtNDQ4OS1iNGQwLTM2YzU1NmJhZjVkYw==',
          isActive: true,
          number: '53',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MWYwYmJkZDQtMmY3My00MzI4LTk0MjgtNTk4YWMyMTFlMWIy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MWYwYmJkZDQtMmY3My00MzI4LTk0MjgtNTk4YWMyMTFlMWIy',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjNlNzgzZWQyLWIwMmUtNDVlYy05OGQzLWY0NDdjMTExMzdkZQ==',
          isActive: true,
          number: '54',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NGE2MzRkYjQtMTQ1OS00NzRhLTkxMGYtOTQwZDE0ZDFlOTU4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NGE2MzRkYjQtMTQ1OS00NzRhLTkxMGYtOTQwZDE0ZDFlOTU4',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmQzM2M0OWIyLWUzODktNGM1OC05M2Y2LWNkMjIzOTgxZjRlNA==',
          isActive: true,
          number: '55',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NjBhNzY4YjYtYTE4Yy00MjU0LTk0YjQtZGMyNjA3MWQ3MWJl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NjBhNzY4YjYtYTE4Yy00MjU0LTk0YjQtZGMyNjA3MWQ3MWJl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjRhNDU2ZDQxLWM2NmQtNDJhNS05MTE0LWYwMjViODEwYWUyZA==',
          isActive: true,
          number: '56',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjY4MzMzZDctNTMxMS00ZTA4LTllMjQtZjVhNGQyMzUyZDgw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MjY4MzMzZDctNTMxMS00ZTA4LTllMjQtZjVhNGQyMzUyZDgw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmJmMTI0Nzc1LTdhYWEtNGFkNS1hOGZhLTUxNDQ4Yjk4MzE4OQ==',
          isActive: true,
          number: '57',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjVhZjBiNzYtZGRlNC00YjExLThhNDQtMTk0NGRhYmZjM2Jm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjVhZjBiNzYtZGRlNC00YjExLThhNDQtMTk0NGRhYmZjM2Jm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjdhOTVlOWY2LTI2MjAtNDA1ZC1iYTg1LTVjMDQ1MDUxMjBmYQ==',
          isActive: true,
          number: '58',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NWUwMGY5YTAtMjcyMC00NzI3LTgxNjItZjIyMDg2Y2Q0MzY3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NWUwMGY5YTAtMjcyMC00NzI3LTgxNjItZjIyMDg2Y2Q0MzY3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjE1MDUzMDgwLTkzMDctNDgyNS1iOWU4LTcxNmRjMGUxYThiYw==',
          isActive: true,
          number: '59',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NzM3NmJiZDktMWIyNi00YmE3LWIwOTMtN2NmZDUyYTMzNDJm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NzM3NmJiZDktMWIyNi00YmE3LWIwOTMtN2NmZDUyYTMzNDJm',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjk0ZTEwMTdmLTJjMzgtNGFmZi04MmQzLWJmYzczMGM1NGQ1OQ==',
          isActive: true,
          number: '60',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZmIxMWFkOWQtMjExYS00MjYzLTk5NTUtNTRkMjdlZTY4ZmRk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZmIxMWFkOWQtMjExYS00MjYzLTk5NTUtNTRkMjdlZTY4ZmRk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmY5ZTA2ZTEzLTk1OTktNDg3YS1hZTQzLTg1NGE4NDJmYmRkZg==',
          isActive: true,
          number: '61',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Mzc1MDg5NTQtMGY5Yi00OWE1LWFjMjAtOWU3NDEyZWJjODk2',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6Mzc1MDg5NTQtMGY5Yi00OWE1LWFjMjAtOWU3NDEyZWJjODk2',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjEzZjBjNTU1LWQyYjQtNDcxZC1hYjg5LWY0MjI2OTMwMTYyNA==',
          isActive: true,
          number: '62',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjgwNjQ3MDMtZjg4Ny00ZDEzLThiNjctMTRiMTBiY2IwYmI3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZjgwNjQ3MDMtZjg4Ny00ZDEzLThiNjctMTRiMTBiY2IwYmI3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjg0ZDFjNzY4LWZlNjQtNDg5ZC1hYjM2LTZlNGM4NjhhOTcxOQ==',
          isActive: true,
          number: '63',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZWRjNzJlMzMtNzVhNi00Zjc3LWE0NTQtNTYyYTEwYWQ4MTM3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZWRjNzJlMzMtNzVhNi00Zjc3LWE0NTQtNTYyYTEwYWQ4MTM3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjNiOTJiZjY2LWQyODQtNDBlZS04NmExLWY5MTQ5YzI3MmZlNg==',
          isActive: true,
          number: '64',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGM0Yzc2NWYtNGMzNi00N2IyLWFiNzUtNDQ0NGRhMmY3Mjdh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGM0Yzc2NWYtNGMzNi00N2IyLWFiNzUtNDQ0NGRhMmY3Mjdh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjQ0NDhlZGQ5LWI1OWQtNGIyMC04NWYwLTk3OWFiOGNmNjY5Yg==',
          isActive: true,
          number: '65',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZmQzMWViYmItZTE3Yi00MDY1LTkwNzYtZGI2OTM4Nzg3ZWVh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZmQzMWViYmItZTE3Yi00MDY1LTkwNzYtZGI2OTM4Nzg3ZWVh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjMyODlmN2I3LTVlOWQtNDdhNS04Y2MzLWE2OTQ2NDExZjJmOA==',
          isActive: true,
          number: '66',
          width: 4,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NjBhNzY4YjYtYTE4Yy00MjU0LTk0YjQtZGMyNjA3MWQ3MWJl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NjBhNzY4YjYtYTE4Yy00MjU0LTk0YjQtZGMyNjA3MWQ3MWJl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjIxOGJlZGUzLThiNWQtNDcxZS05NDVlLTUyOGZjMThhNzkyYw==',
          isActive: true,
          number: '67',
          width: 3.5,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZGY0NDUyYzQtMTY2YS00ZWE1LTk3NWQtMDA5ZTM1MmFlZWNi',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: true,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmI1NmRmYjdlLWU2MTAtNDY1YS04ZGFkLTVlYTFhOGQxNDcyNw==',
          isActive: true,
          number: '68',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTRlMDQ5MmYtYzAwMC00MDRiLWEwY2YtOTJhYmE1NGU1ZTU3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZTRlMDQ5MmYtYzAwMC00MDRiLWEwY2YtOTJhYmE1NGU1ZTU3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjUzN2MzNzliLWE1ZmQtNGFkZS1hOWQ3LTlhNTU4YmU2MjAyOA==',
          isActive: true,
          number: '69',
          width: 3.5,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZmEyN2I1ZTgtODI1NS00YmNiLThhOWQtNzFjZmFmMmJlNDQw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZmEyN2I1ZTgtODI1NS00YmNiLThhOWQtNzFjZmFmMmJlNDQw',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmYxNmEwYmY2LTBiYjYtNDQxYi1iYTg4LThlZTdhNzRlNTExMA==',
          isActive: true,
          number: '70',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmE3YTA3YmUwLTJjZjMtNDc1YS04OGNiLWRkZWFhNjg0OTA3OA==',
          isActive: true,
          number: '71',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NGE0ZDRiOGUtZGIzMy00MjMzLTg4NWUtMTcxMmFjNmJhZDhl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NGE0ZDRiOGUtZGIzMy00MjMzLTg4NWUtMTcxMmFjNmJhZDhl',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjYwNjllNTgzLWFhMmMtNDZkYy1iN2U2LWVkYmI5YjAwNDdhNQ==',
          isActive: true,
          number: '72',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MzUwMTA4MDMtOTM0Mi00NDgyLWEzOTYtNzUxM2UwZWYwY2Q3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6MzUwMTA4MDMtOTM0Mi00NDgyLWEzOTYtNzUxM2UwZWYwY2Q3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjk3ZmNhZDM4LWU1ZGQtNDQ4MS1iOGE5LTk4OWQ1MzU3NzAxNQ==',
          isActive: true,
          number: '73',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTg0M2NkOTgtNjRiMy00ZGQwLTk1NzMtZTc5ZGUxMGJiNzJk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OTg0M2NkOTgtNjRiMy00ZGQwLTk1NzMtZTc5ZGUxMGJiNzJk',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjUwNTY2YzM5LTY4ZDAtNDAyNy05ZTdiLTZjMDc2OWIyNmNmOA==',
          isActive: true,
          number: '74',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjU2M2ZmYTU5LTY0ZmEtNDJlYy05MjEyLTdkOGI0ZDRhZmY0MQ==',
          isActive: true,
          number: '75',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NzgxZDNmNTktOTI5Ni00MWYyLTk5ZjQtOTYzNDIxMjExZWU5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NzgxZDNmNTktOTI5Ni00MWYyLTk5ZjQtOTYzNDIxMjExZWU5',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjA1N2RiNmE1LTEzYzktNGE5NC1hZWRiLTBhOGEzZjNjYjk4Mg==',
          isActive: true,
          number: '76',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NzVjOGExN2YtNDExNC00NGZiLWIxN2UtNzM0MzM2Mzk0YTA3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6NzVjOGExN2YtNDExNC00NGZiLWIxN2UtNzM0MzM2Mzk0YTA3',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjhkYTdjMzY5LTIxM2UtNGNjOC05MzI5LTAwOTMwNTg5ZWFmNQ==',
          isActive: true,
          number: '77',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ODdjZDhmZWYtOGQxNC00ZGYzLTgwZjItNGEyMzE5NGU0MTll',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ODdjZDhmZWYtOGQxNC00ZGYzLTgwZjItNGEyMzE5NGU0MTll',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjU2Mzk5ZWQyLTk3ODEtNDFhMS1hNzYwLTliMmU2YWUxZjBkOQ==',
          isActive: true,
          number: '78',
          width: 3,
          length: 8,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OGYzYjEyOGEtMWJlZi00MTRjLTg1YzktYjFiN2MwMmFhMTAx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OGYzYjEyOGEtMWJlZi00MTRjLTg1YzktYjFiN2MwMmFhMTAx',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOmQyODVjYmI1LTYzODctNGQ2Ni04Zjg2LTFhYjExZTkxODc5NQ==',
          isActive: true,
          number: '79',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OGE2YzI2ZGEtMjM0My00MzU2LTg4YzgtMmMzZmMxOGZmYjJh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6OGE2YzI2ZGEtMjM0My00MzU2LTg4YzgtMmMzZmMxOGZmYjJh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
      {
        node: {
          id: 'QmVydGhOb2RlOjFiNmMzZTViLTBhNmMtNGQ2ZS04NDc5LWM2NDljNmYyNThhOA==',
          isActive: true,
          number: '81',
          width: 3,
          length: 9,
          depth: null,
          mooringType: BerthMooringType.SIDE_SLIP_PLACE,
          comment: '',
          leases: {
            edges: [
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDQyMTc5MjgtNzEwMS00MTgxLWFmZDYtOTE1ZDIxZDY2MTlh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.OFFERED,
                  startDate: '2021-06-10',
                  endDate: '2021-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
              {
                node: {
                  customer: {
                    id: 'UHJvZmlsZU5vZGU6ZDQyMTc5MjgtNzEwMS00MTgxLWFmZDYtOTE1ZDIxZDY2MTlh',
                    __typename: 'ProfileNode',
                  },
                  status: LeaseStatus.PAID,
                  startDate: '2020-06-10',
                  endDate: '2020-09-14',
                  isActive: false,
                  __typename: 'BerthLeaseNode',
                },
                __typename: 'BerthLeaseNodeEdge',
              },
            ],
            __typename: 'BerthLeaseNodeConnection',
          },
          pier: {
            id: 'UGllck5vZGU6N2U0ZDM0ZGYtZmRhZC00ZTg4LTgyMjEtYTU2ODhkNWJhNDUy',
            properties: {
              identifier: '11 a',
              __typename: 'PierProperties',
            },
            __typename: 'PierNode',
          },
          __typename: 'BerthNode',
        },
        __typename: 'BerthNodeEdge',
      },
    ],
    __typename: 'BerthNodeConnection',
  },
};
