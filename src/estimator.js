const covid19ImpactEstimator = (data) => {
  const data = data;
  let factor;
  let period;

  if (data.periodType === 'days') {
    factor = Math.floor(data.timeToElapse / 3);
    period = data.timeToElapse;
  } else if (periodType === 'weeks') {
    factor = Math.floor((data.timeToElapse * 7) / 3);
    period = data.timeToElapse * 7;
  } else {
    factor = Math.floor((data.timeToElapse * 30) / 3);
    period = data.timeToElapse * 30;
  }

  // Impact
  const impactCurrentlyInfected = data.reportedCases * 10;

  const impactInfectionsByRequestedTime = impactCurrentlyInfected * 2 ** factor;

  const casesByRequestedTime = impactInfectionsByRequestedTime * 0.15;

  const impactHospitalBedsByRequestedTime =
    data.totalHospitalBeds * 0.35 - casesByRequestedTime;

  const impactCasesForICUByRequestedTime =
    impactInfectionsByRequestedTime * 0.05;

  const impactCasesForVentilatorsByRequestedTime =
    impactInfectionsByRequestedTime * 0.02;

  const impactDollarsInFlight =
    impactInfectionsByRequestedTime *
    data[region].avgDailyIncomePopulation *
    data[region].avgDailyIncomeInUSD *
    period;

  //severe impact
  const severeImpactCurrentlyInfected = data.reportedCases * 50;
  const severeImpactInfectionsByRequestedTime =
    severeImpactCurrentlyInfected * 2 ** factor;

  const severeCasesByRequestedTime =
    severeImpactInfectionsByRequestedTime * 0.15;

  const severeHospitalBedsByRequestedTime =
    data.totalHospitalBeds * 0.35 - severeCasesByRequestedTime;

  const severeCasesForICUByRequestedTime =
    severeImpactInfectionsByRequestedTime * 0.05;

  const severeCasesForVentilatorsByRequestedTime =
    severeImpactInfectionsByRequestedTime * 0.02;

  const severeDollarsInFlight =
    severeImpactInfectionsByRequestedTime *
    data.region.avgDailyIncomePopulation *
    data.region.avgDailyIncomeInUSD *
    period;

  const impact = {
    currentlyInfected: impactCurrentlyInfected,
    infectionsByRequestedTime: impactInfectionsByRequestedTime,
    severeCasesByRequestedTime: casesByRequestedTime,
    hospitalBedsByRequestedTime: impactHospitalBedsByRequestedTime,
    casesForICUByRequestedTime: impactCasesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime: impactCasesForVentilatorsByRequestedTime,
    dollarsInFlight: impactDollarsInFlight
  };

  const severeImpact = {
    currentlyInfected: severeImpactCurrentlyInfected,
    infectionsByRequestedTime: severeImpactInfectionsByRequestedTime,
    severeCasesByRequestedTime: severeCasesByRequestedTime,
    hospitalBedsByRequestedTime: severeHospitalBedsByRequestedTime,
    casesForICUByRequestedTime: severeCasesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime: severeCasesForVentilatorsByRequestedTime,
    dollarsInFlight: severeDollarsInFlight
  };

  return {
    data,clea
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
