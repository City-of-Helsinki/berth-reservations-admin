import jsPDF from 'jspdf';
import { ApplicationStatus, LeaseStatus } from '../../@types/__generated__/globalTypes';
import { UNMARKED_WINTER_STORAGE_NOTICES } from './__generated__/UNMARKED_WINTER_STORAGE_NOTICES';
import { getChoiceFromWinterStorageAreaChoices } from '../unmarkedWsNoticeView/utils';
import { CustomerInfo } from './UnmarkedWsNoticeList';
import { formatStickerNumber } from '../../common/utils/format';
import { UNMARKED_WINTER_STORAGE_NOTICES_STICKERS } from './printAllStickersButton/__generated__/UNMARKED_WINTER_STORAGE_NOTICES_STICKERS';

interface UnmarkedWinterStorageChoice {
  winterStorageAreaName: string;
  winterStorageArea: string;
}

export type UnmarkedWinterStorageNotice = {
  applicationCode: string;
  boatLength: number;
  boatModel: string | null;
  boatName: string | null;
  boatRegistrationNumber: string | null;
  boatType?: string | null;
  boatWidth: number;
  choice: UnmarkedWinterStorageChoice;
  createdAt: string;
  customerId?: string;
  firstName: string;
  email: string;
  id: string;
  lastName: string;
  status: ApplicationStatus;
  leaseStatus?: LeaseStatus;
  leaseId?: string;
  orderId: string | undefined;
  municipality: string;
  address: string;
  zipCode: string;
  stickerNumber?: number | null;
  stickerSeason?: string | null;
};

export const getUnmarkedWinterStorageNotices = (
  data: UNMARKED_WINTER_STORAGE_NOTICES | undefined
): UnmarkedWinterStorageNotice[] => {
  return (
    data?.winterStorageNotices?.edges.reduce<UnmarkedWinterStorageNotice[]>((acc, edge) => {
      if (!edge?.node) return acc;

      const {
        applicationCode,
        boatLength,
        boatModel,
        boatName,
        boatRegistrationNumber,
        boatType,
        boatWidth,
        createdAt,
        firstName,
        email,
        id,
        lastName,
        municipality,
        address,
        zipCode,
        status,
        winterStorageAreaChoices,
        lease,
      } = edge.node;

      const applicationData: UnmarkedWinterStorageNotice = {
        applicationCode,
        boatLength,
        boatModel,
        boatName,
        boatRegistrationNumber,
        boatType: data.boatTypes?.find(({ id }) => id === boatType)?.name,
        boatWidth,
        choice: getChoiceFromWinterStorageAreaChoices(winterStorageAreaChoices),
        createdAt,
        firstName,
        email,
        id,
        lastName,
        status,
        leaseId: lease?.id,
        orderId: lease?.order?.id,
        leaseStatus: lease?.status,
        municipality,
        address,
        zipCode,
        stickerNumber: lease?.stickerNumber,
        stickerSeason: lease?.stickerSeason,
      };

      return [...acc, applicationData];
    }, []) ?? []
  );
};

interface Offer {
  orderId: string;
  email: string;
}

export const getDraftedOffers = (applications: UnmarkedWinterStorageNotice[]) =>
  applications.reduce<Offer[]>((acc, application) => {
    if (application.status !== ApplicationStatus.OFFER_GENERATED || !application.orderId || !application.email)
      return acc;

    return [
      ...acc,
      {
        orderId: application.orderId,
        email: application.email,
      },
    ];
  }, []);

export const getSentOffers = (applications: UnmarkedWinterStorageNotice[]) =>
  applications.reduce<Offer[]>((acc, { status, orderId, email }) => {
    if (status !== ApplicationStatus.OFFER_SENT || !orderId || !email) return acc;
    return [
      ...acc,
      {
        orderId,
        email,
      },
    ];
  }, []);

export const getCustomersWithUnsentStickers = (
  data: UNMARKED_WINTER_STORAGE_NOTICES_STICKERS | undefined
): CustomerInfo[] => {
  return (
    data?.winterStorageNotices?.edges.reduce<CustomerInfo[]>((acc, edge) => {
      if (!edge?.node?.lease?.stickerNumber || edge.node.lease.status !== LeaseStatus.PAID) {
        return acc;
      }
      if (edge.node.lease.stickerPosted) {
        return acc;
      }
      const { firstName, lastName, address, municipality, zipCode, lease } = edge.node;
      return [
        ...acc,
        {
          firstName,
          lastName,
          address,
          municipality,
          zipCode,
          leaseId: lease.id,
          stickerNumber: lease.stickerNumber,
          stickerSeason: lease.stickerSeason,
        },
      ];
    }, []) ?? []
  );
};

export const generateAndSaveStickerPDF = (customers: CustomerInfo[]) => {
  const leftMargin = 64;

  const doc = new jsPDF('portrait', 'px', 'a4', true);
  doc.setFont('times', 'normal');
  doc.setFontSize(12);
  customers
    .sort((a, b) => (a.stickerNumber ?? 0) - (b.stickerNumber ?? 0))
    .forEach((customer, index) => {
      doc.text(`${customer.firstName} ${customer.lastName}`, leftMargin, 74);
      doc.text(`${customer.address}`, leftMargin, 84);
      doc.text(`${customer.zipCode} ${customer.municipality}`, leftMargin, 96);

      doc.text(`Tarra nro: ${formatStickerNumber(customer.stickerNumber)}`, leftMargin, 160);
      doc.text(`Kausi: ${customer.stickerSeason}`, leftMargin, 172);

      doc.setFont('times', 'bold');
      doc.setFontSize(16);
      doc.text('VENEIDEN NOSTOJÄRJESTYSALUEIDEN TARRA\n', leftMargin, 260);
      doc.text('Ohessa tarra kuluvalle talvisäilytyskaudelle 15.9. - 10.6. ', leftMargin, 280);

      doc.setFont('times', 'normal');
      doc.setFontSize(12);
      doc.text(
        'Kiinnitäthän tarran näkyvälle paikalle veneeseen, sen peitteeseen tai telakointitarvikkeeseen. \n' +
          'Tarran on oltava kiinnitettynä koko talvisäilytyskauden ajan tarkastuksia varten. \n' +
          'Mikäli tarra katoaa, saat uuden ottamalla yhteyttä venepaikkavarauksiin.',
        leftMargin,
        300
      );

      doc.setFont('times', 'bold');
      doc.text('Talvisäilytyksen muistilista:', leftMargin, 340);

      doc.setFont('times', 'normal');
      doc.text(
        '· Mastot on kaadettava talvehtimisen ajaksi. \n\n' +
          '· Talvisäilytysalueet eivät ole vartioituja. \n\n' +
          '· Veneitä ei saa telakoida pelastuskäytäville eikä viheralueille. Pelastus- ja auraustöiden \n' +
          '  sujuvuuden ja alueiden yleisen turvallisuuden vuoksi tämä on kiellettyä. \n\n' +
          '· Rekisteröimättömät trailerit eli ns. satamatrailerit ovat kiellettyjä talvisäilytysalueilla. \n' +
          '  Ainoastaan rekisteröidyt trailerit ja kokoon taittuvat pukit sallitaan. \n\n' +
          '· Ongelmajätteiden jättäminen talvisäilytysalueille on ehdottomasti kielletty. \n\n' +
          '· Talvisäilytysalueelle luvattomasti nostetut tai ilman tarraa olevat veneet \n' +
          '  poistetaan alueelta omistajan vastuulla ja kustannuksella. \n',
        leftMargin,
        355
      );

      doc.setFont('times', 'bold');
      doc.text('Ystävällisin terveisin', leftMargin, 520);
      doc.setFont('times', 'normal');

      doc.text('Venepaikkavaraukset', leftMargin, 546);
      doc.text('Sähköposti: venepaikkavaraukset@hel.fi', leftMargin, 558);
      doc.text('Puh. 09 310 87900', leftMargin, 570);

      if (index < customers.length - 1) {
        doc.addPage();
      }
    });

  doc.save('tarrat.pdf');
};
