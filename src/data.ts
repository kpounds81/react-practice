export type CarData = {
  make: string;
  models: string[];
};

export type EngineData = {
  make: string;
  engines: string[];
};

export type YMMEModelData = {
  yearData: string[];
  makeData: string[];
  modelData: CarData[];
  engineData: EngineData[];
};

const ymmeData: YMMEModelData = {
  yearData: [
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
  ],
  makeData: ['Acura', 'Alfa Romeo', 'Audi', 'Autocar', 'Blue Bird', 'BMW'],
  modelData: [
    {
      make: 'Acura',
      models: [
        'ILX',
        'MDX',
        'MDX-SH-AWD',
        'MDX-Sport-Hybrid',
        'NSX',
        'RDX-2WD',
        'RDX-AWD',
      ],
    },
    {
      make: 'AlfaRomeo',
      models: [
        '4C Spider',
        'Giulia',
        'Giulia Quadrifoglio',
        'Giulia Sport',
        'Giulia TI',
        'Stelvio',
        'Stelvio Quadrifoglio',
      ],
    },
    {
      make: 'Audi',
      models: [
        'A3 Premium',
        'A3 Premium Plus',
        'A3 Premium Plus Quattro',
        'A3 Premium Quattro',
        'A3 Prestige',
        'A3 Premium Quattro',
      ],
    },
    {
      make: 'Autocar',
      models: ['Xpeditor', 'Xpert', 'Xspotter Off Road', 'Xspotter On Road'],
    },
    {
      make: 'Blue Bird',
      models: [
        'All American FE AAC2810-3006',
        'All American FE AAC3401-3502',
        'All American FE AAC3707-3808',
        'All American FE AAC3904-4100',
      ],
    },
    {
      make: 'BMW',
      models: [
        '230i',
        '230i xDrive',
        '330i',
        '330i GT xDrive',
        '330i xDrive',
        '340i GT xDrive',
        '430i',
      ],
    },
  ],
  engineData: [
    {
      make: 'Acura',
      engines: ['2.4L DI DOHC I-VTEC 4CYL'],
    },
    {
      make: 'AlfaRomeo',
      engines: ['1.7L DI TURBO DOHC 4CYL'],
    },
    {
      make: 'Audi',
      engines: ['2.0L FI TURBO DOHC 4CYL'],
    },
    {
      make: 'Autocar',
      engines: [
        '11.9 NATURAL GAS 6CYL',
        '11.9 TURBO DIESEL 6CYL',
        '8.9L MFI TURBO DSL 6CYL',
      ],
    },
    {
      make: 'Blue Bird',
      engines: ['6.7L FI TURBO DIESEL 6CYL'],
    },
    {
      make: 'BMW',
      engines: ['2.0L TWIN TURBO DOHC 4CYL'],
    },
  ],
};

export default ymmeData;
