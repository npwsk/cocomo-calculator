import stages from './stages';

const effortMultipliersED = {
  PERS: 'PERS',
  PREX: 'PREX',
  RCPX: 'RCPX',
  RUSE: 'RUSE',
  PDIF: 'PDIF',
  FCIL: 'FCIL',
  SCED: 'SCED',
};

const effortMultipliersPA = {
  ACAP: 'ACAP',
  AEXP: 'AEXP',
  PCAP: 'PCAP',
  PCON: 'PCON',
  PEXP: 'PEXP',
  LTEX: 'LTEX',
  RELY: 'RELY',
  DATA: 'DATA',
  CPLX: 'CPLX',
  RUSE: 'RUSE',
  DOCU: 'DOCU',
  TIME: 'TIME',
  STOR: 'STOR',
  PVOL: 'PVOL',
  TOOL: 'TOOL',
  SITE: 'SITE',
  SCED: 'SCED',
};

const effortMultipliers = {
  [stages.EARLY_DESIGN]: effortMultipliersED,
  [stages.POST_ARCHITECTURE]: effortMultipliersPA,
};


export { effortMultipliersED, effortMultipliersPA };

export default effortMultipliers;
