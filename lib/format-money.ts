interface Options {
  prefix?: '+';
  suffix?: '%';
  decimalAmount?: number;
}

function format(num: number | undefined, options: Options = {}) {
  if (!num) return num;

  const defaultOptions = {
    decimalAmount: 2,
  };

  const opts = { ...defaultOptions, ...options };

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: opts.decimalAmount,
    maximumFractionDigits: opts.decimalAmount,
  });

  let number = formatter.format(num);

  if (options.prefix && num > 0) {
    number = options.prefix + number;
  }

  if (options.suffix) {
    number += options.suffix;
  }

  return number;
}

export default format;
