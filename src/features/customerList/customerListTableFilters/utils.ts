import parse from 'date-fns/parse';

type Interval = {
  end?: string;
  start?: string;
};

export function createIntervalString({ start, end }: Interval) {
  if (!start && !end) {
    return;
  }

  if (start && !end) {
    return `${start}-`;
  }

  if (!start && end) {
    return `-${end}`;
  }

  return `${start}-${end}`;
}

const createFormattingError = () =>
  Error('Incorrectly formatted intervalString. Allowed formats 1.12.1995-3.1.1996, 1.12.1995-, -3.1.1996');

export function createInterval(intervalString: string): Interval {
  const dashPosition = intervalString.indexOf('-');

  if (dashPosition < 0) {
    throw createFormattingError();
  }

  // When dash position is first, string is expected to be of format -3.1.1996
  if (dashPosition === 0) {
    const [, endDateString] = intervalString.split('-');

    return {
      end: endDateString,
    };
  }

  // When dash position is last, string is expected to be of format 1.12.1995-
  if (dashPosition === intervalString.length - 1) {
    const [startDateString] = intervalString.split('-');

    return {
      start: startDateString,
    };
  }

  // Otherwise assume string is of format 1.12.1995-3.1.1996
  const [startDateString, endDateString] = intervalString.split('-');

  return {
    start: startDateString,
    end: endDateString,
  };
}

export function createIntervalWithSilentError(intervalString?: string): Interval {
  if (!intervalString) {
    return {};
  }

  try {
    return createInterval(intervalString);
  } catch {
    return {};
  }
}

export function createDate(date: string) {
  return parse(date, 'd.M.yyyy', new Date());
}
