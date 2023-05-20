const CalcResult = (
  Charge: string,
  ExpCharge: string,
  Radius: string,
  ExpRadius: string
) => {
  if (Radius == "0" || Radius == "-0") {
    return "\\infty";
  }

  if (Charge == "0") {
    return "0";
  }

  const vCharge = parseInt(Charge) * Math.pow(10, parseInt(ExpCharge));
  const vRadius = parseInt(Radius) * Math.pow(10, parseInt(ExpRadius));
  const Coulomb = 9 * Math.pow(10, 9);
  var vResult = vCharge / (Coulomb * Math.pow(vRadius, 2));

  var data = vResult.toString().split("e");
  var temp = parseFloat(data[0]);
  var exp = data.length == 2 ? parseInt(data[1]) : 0;

  while (Math.floor(temp) == 0) {
    temp *= 10;
    exp--;
  }

  return `${temp.toString().substring(0, 5)}\\times 10^{${exp}}\\frac{N}{C}`;
};
export default CalcResult;
