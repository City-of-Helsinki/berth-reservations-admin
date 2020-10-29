import {
  NOTIFICATION_TEMPLATES,
  NOTIFICATION_TEMPLATES_notificationTemplates_edges_node_translations as TRANSLATIONS,
} from './__generated__/NOTIFICATION_TEMPLATES';
import { NotificationTemplate } from './types';

const mapTranslations = (translations: (TRANSLATIONS | null)[]): NotificationTemplate['translations'] => {
  return translations.reduce<NotificationTemplate['translations']>((acc, translation) => {
    if (translation === null) return acc;

    const { bodyHtml, bodyText, preview, subject } = translation;
    return {
      ...acc,
      [translation.languageCode]: {
        bodyHtml,
        bodyText,
        preview,
        subject,
      },
    };
  }, {});
};

export const getNotificationTemplates = (data: NOTIFICATION_TEMPLATES | undefined): NotificationTemplate[] => {
  return (
    data?.notificationTemplates?.edges.reduce<NotificationTemplate[]>((acc, edge) => {
      if (!edge?.node) return acc;

      const { id, preview, translations, type } = edge.node;

      const template: NotificationTemplate = {
        id,
        preview,
        translations: mapTranslations(translations),
        type,
      };

      return [...acc, template];
    }, []) ?? []
  );
};
