class PriceUtil {
  formatter: Intl.NumberFormat;

  DEFAULT_CURRENCY = 'IDR';

  constructor(currency?: string) {
    currency = currency ?? this.DEFAULT_CURRENCY;

    this.formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    });
  }

  format(price: number) {
    return this.formatter.format(price);
  }
}

export default PriceUtil;
