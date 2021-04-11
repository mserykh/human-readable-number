module.exports = function toReadable (number) {


  let result = '';
  const toNine= ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const toNineteen = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


  if (number < 10) return  result + toNine[number];
  if (number < 20 && number > 9) return toNineteen[number - 10];
  if (number < 100 && number >= 20) {
      let tens = Math.floor(number / 10);
      result = `${dozens[tens - 2]} ${number = number - 10 * tens > 0 ? toNine[number - 10 * tens]: ''}`;
      return result.trim();;
  }

  if (number >= 100) {
      let remainder = Math.floor(number / 100);
      result = `${toNine[remainder]} hundred`;
      let remainingNum = number - remainder * 100;

      if (remainingNum < 10) {
          result = `${result} ${remaining = remainingNum > 0 ? toNine[remainingNum]: ''}`;
      }

      if (remainingNum < 20 && remainingNum > 9)
      {
        result = `${result} ${remaining = remainingNum - 10 >= 0 ? toNineteen[remainingNum - 10]: ''}`;
    }
      if (remainingNum < 100 && remainingNum >= 20) {
          let tens = Math.floor(remainingNum / 10);
          result = `${result} ${dozens[tens - 2]} ${remaining = remainingNum - 10 * tens > 0 ? toNine[remainingNum - 10 * tens]: ''}`;

      }
      return result.trim();
  }
}

