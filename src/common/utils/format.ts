export const formatStickerNumber = (stickerNumber: number | null | undefined) => {
  if (!stickerNumber) return '-';
  return `${stickerNumber}`.padStart(4, '0');
};

export const formatDimension = (value: number | null | undefined, locale: string) => {
  if (!value) return '-';

  const localizedValues = new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: 1,
  }).format(value);

  return `${localizedValues} m`;
};

export const formatWeight = (value: number | null | undefined, locale: string) => {
  if (!value) return '-';

  const localizedValues = new Intl.NumberFormat(locale, {
    style: 'decimal',
  }).format(value);

  return `${localizedValues} kg`;
};

export const formatDate = (date: string, locale: string, withTime = false) => {
  const dateOpts = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  const timeOpts = {
    hour: '2-digit',
    minute: '2-digit',
  };
  const options = withTime ? { ...dateOpts, ...timeOpts } : dateOpts;

  return new Date(date).toLocaleString(locale, options);
};

export const formatPrice = (value: number, locale: string, percentage?: number) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    minimumIntegerDigits: 2,
  });

  if (percentage) {
    return `${percentage}%\u00A0\u00A0${formatter.format(value)}`;
  }
  return formatter.format(value);
};

export const formatPercentage = (value: number, locale: string) => {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
  }).format(value / 100);
};

export const formatBytes = (value: number, locale: string) => {
  const formatter = (value: number) =>
    new Intl.NumberFormat(locale, {
      style: 'decimal',
      maximumFractionDigits: 1,
    }).format(value);

  if (value < 1000) {
    return `${formatter(value)} B`;
  } else if (value < 999950) {
    return `${formatter(value / 1000)} kB`;
  } else {
    return `${formatter(value / 1000 / 1000)} MB`;
  }
};

export const formatAddress = (streetAddress?: string | null, zipCode?: string | null, municipality?: string | null) => {
  if (!streetAddress && !zipCode && !municipality) return '-';

  return [streetAddress ? `${streetAddress},` : '', zipCode, municipality].filter(Boolean).join(' ');
};
