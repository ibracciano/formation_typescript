enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

function nombreDeJoursDansMois(month: Month): number {
  switch (month) {
    case Month.January ||
      Month.March ||
      Month.May ||
      Month.July ||
      Month.August ||
      Month.October ||
      Month.December:
      return 31;
    case Month.April || Month.June || Month.September || Month.November:
      return 30;

    case Month.February:
      return 28;

    default:
      throw new Error("Invalid month");
  }
}

console.log(nombreDeJoursDansMois(Month.February)); // 28
