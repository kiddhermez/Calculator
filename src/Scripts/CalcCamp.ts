const CalcResult = (
  Charge: string,
  ExpCharge: string,
  Radius: string,
  ExpRadius: string
) => {
  if (Radius == "0" || Radius == "-0") {
    return "\\infty";
  }

  const vCharge = parseInt(Charge) * Math.pow(10, parseInt(ExpCharge));
  const vRadius = parseInt(Radius) * Math.pow(10, parseInt(ExpRadius));
  const Coulomb = 9 * Math.pow(10, 9);
  var vResult = vCharge / (Coulomb * Math.pow(vRadius, 2));

  var exp = vResult.toString().split("e");

  return `${
    exp[0].substring(0, 5) == "0.000" 
      ? exp[0].substring(0, 6)
      : exp[0].substring(0, 5)
  }\\times 10^{${exp.length == 2 ? exp[1] : "1"}}\\frac{N}{C}`;
};
export default CalcResult;
