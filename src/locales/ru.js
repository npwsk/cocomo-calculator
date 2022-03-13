import {
  models,
  projectTypes,
  ratings,
  costDrivers,
  levels,
  stages,
  scaleFactors,
  effortMultipliersED,
  effortMultipliersPA,
} from '../constants';

const ru = {
  translation: {
    models: {
      [models.COCOMO]: {
        title: 'COCOMO',
        description:
          'COCOMO (Constructive Cost Model) – это конструктивная модель стоимости, разработанная в начале 80-х годов Барри Боэмом для оценки трудоемкости разработки программных продуктов. COCOMO состоит из иерархии трех последовательно детализируемых и уточняемых форм. Первый уровень, Базовый, подходит для быстрых ранних оценок стоимости разработки ПО и обладает неточностью вследствие некоторых факторов, которые невозможно учесть на ранних стадиях разработки. Средний уровень COCOMO учитывает эти факторы, тогда как Детальный уровень дополнительно учитывает влияние отдельных фаз проекта на его общую стоимость.',
      },
      [models.COCOMO_2]: {
        title: 'COCOMO II',
        description:
          'COCOMO II является наследником первоначальной модели и более подходящей для оценивания современных проектов разработки ПО. Она предоставляет более полную поддержку современных процессов разработки ПО и построена на обновленной базе проектов.',
      },
    },
    'project-types': {
      title: 'Тип проекта',
      [projectTypes.ORGANIC]: {
        title: 'Распространенный',
        description:
          'Распространенный тип (organic projects) характеризуется тем, что проект выполняется небольшой группой специалистов, имеющих опыт в создании подобных изделий и опыт применения технологических средств. Условия работы стабильны, и изделие имеет относительно невысокую сложность.',
      },
      [projectTypes.EMBEDDED]: {
        title: 'Встроенный',
        description:
          'Встроенный тип (embedded projects) характеризуется очень жесткими требованиями на программный продукт, интерфейсы, параметры ЭВМ. Как правило, у таких изделий высокая степень новизны и планирование работ осуществляется при недостаточной информации, как о самом изделии, так и об условиях работы. Встроенный проект требует больших затрат на изменения и исправления.',
      },
      [projectTypes.SEMI_DETACHED]: {
        title: 'Полунезависимый',
        description:
          'Полунезависимый тип (semidetached projects) занимает промежуточное положение между распространенным и встроенным – это проекты средней сложности. Исполнители знакомы лишь с некоторыми характеристиками (или компонентами) создаваемой системы, имеют средний опыт работы с подобными изделиями, изделие имеет элемент новизны. Только часть требований к изделию жестко фиксируется, в остальном разработки имеют степени выбора.',
      },
    },
    levels: {
      title: 'Уровень',
      [levels.BASIC]: {
        title: 'Базовый',
        description:
          'Модель базового уровня – двухпараметрическая. В качестве параметров выступают объем программы (число строк кода) и тип проекта. Модель этого уровня подходит для ранней быстрой приблизительной оценки затрат, но точность её весьма низка, т.к. не учитываются такие факторы, как квалификация персонала, характеристики оборудования, опыт применения современных методов разработки программного обеспечения и современных инструментальных сред разработки и др.',
      },
      [levels.INTERMEDIATE]: {
        title: 'Промежуточный',
        description:
          'На промежуточном уровне базовая модель уточнена за счет ввода дополнительных 15 «атрибутов стоимости» (или факторов затрат) Cost Drivers. Значения каждого атрибута выбираются в соответствии с его степенью значимости (рейтингом) в конкретном проекте.',
      },
    },
    stages: {
      title: 'Стадия',
      [stages.EARLY_DESIGN]: {
        title: 'Предварительная оценка',
        description: 'Предварительная оценка на начальной фазе (Early Design)',
      },
      [stages.POST_ARCHITECTURE]: {
        title: 'Детальная оценка',
        description: 'Детальная оценка после проработки архитектуры (Post Architecture)',
      },
    },
    'scale-factors': {
      title: 'Факторы масштаба',
      description: '',
      [scaleFactors.PREC]: {
        title: 'Прецедентность',
        description: 'Прецедентность, наличие опыта аналогичных разработок (PREC, Precedentedness)',
      },
      [scaleFactors.FLEX]: {
        title: 'Гибкость процесса разработки',
        description: 'Гибкость процесса разработки (FLEX, Development Flexibility)',
      },
      [scaleFactors.RESL]: {
        title: 'Архитектура и разрешение рисков',
        description: 'Архитектура и разрешение рисков (RESL, Architecture / Risk Resolution)',
      },
      [scaleFactors.TEAM]: {
        title: 'Сработанность команды',
        description: 'Сработанность команды (TEAM, Team Cohesion)',
      },
      [scaleFactors.PMAT]: {
        title: 'Зрелость процессов',
        description: 'Зрелость процессов (PMAT, Process Maturity)',
      },
    },
    'effort-multipliers': {
      title: 'Множители трудоемкости',
      description: '',
      [stages.EARLY_DESIGN]: {
        [effortMultipliersED.PERS]: {
          title: 'Квалификация персонала',
          description:
            'PERS (Personnel Capability) – квалификация персонала (уровень Extra Low – аналитики и программисты имеют низшую квалификацию, текучесть больше 45%; уровень Extra High – аналитики и программисты имеют высшую квалификацию, текучесть меньше 4%).',
        },
        [effortMultipliersED.PREX]: {
          title: 'Опыт персонала',
          description:
            'PREX (Personnel Experience)– опыт персонала (Extra Low – новое приложение, ин-струменты и платформа; Extra High– приложение, инструменты и платформа хорошо из-вестны).',
        },
        [effortMultipliersED.RCPX]: {
          title: 'Сложность и надежность продукта',
          description:
            'RCPX (Product Reliability and Complexity) – сложность и надежность продукта (Extra Low – продукт простой, специальных требований по надежности нет, БД маленькая, документация не требуется; Extra High – продукт очень сложный, требования по надежности жесткие, БД сверхбольшая, документация требуется в полном объеме).',
        },
        [effortMultipliersED.RUSE]: {
          title: 'Разработка для повторного использования',
          description:
            'RUSE (Developed for Reusability) – разработка для повторного использования (Low – не требуется; ExtraHigh – предполагается переиспользование в других продуктах)',
        },
        [effortMultipliersED.PDIF]: {
          title: 'Сложность платформы разработки',
          description:
            'PDIF (Platform Difficulty) – сложность платформы разработки (ExtraLow – специаль-ные ограничения по памяти и быстродействию отсутствуют, платформа стабильна; ExtraHigh – жесткие ограничения по памяти и быстродействию, платформа нестабильна).',
        },
        [effortMultipliersED.FCIL]: {
          title: 'Оборудование',
          description:
            'FCIL (Facilities) – оборудование (Extra Low – инструменты простейшие, коммуникации затруднены; Extra High– интегрированные средства поддержки жизненного цикла, интерактивные мультимедиа коммуникации).',
        },
        [effortMultipliersED.SCED]: {
          title: 'Требуемое выполнение графика работ',
          description:
            'SCED (Required Development Schedule) – требуемое выполнение графика работ (Very Low – 75% от номинальной длительности; Very High – 160% от номинальной длительно-сти).',
        },
    },
      [stages.POST_ARCHITECTURE]: {
        [effortMultipliersPA.ACAP]: {
          title: 'Возможности аналитика',
          description: 'Analyst Capability (ACAP) – возможности аналитика',
        },
        [effortMultipliersPA.AEXP]: {
          title: 'Опыт разработки приложений',
          description: 'Applications Experience (AEXP) – опыт разработки приложений',
        },
        [effortMultipliersPA.PCAP]: {
          title: 'Возможности программиста',
          description: 'Programmer Capability (PCAP) – возможности программиста',
        },
        [effortMultipliersPA.PCON]: {
          title: 'Продолжительность работы персонала',
          description: 'Personnel Continuity (PCON) – продолжительность работы персонала',
        },
        [effortMultipliersPA.PEXP]: {
          title: 'Опыт работы с платформой',
          description: 'Platform Experience (PEXP) – Опыт работы с платформой',
        },
        [effortMultipliersPA.LTEX]: {
          title: 'Опыт использования языка программирования и инструментальных средств',
          description: 'Language and Tool Experience (LTEX) – опыт использования языка программирования и инструментальных средств',
        },
        [effortMultipliersPA.RELY]: {
          title: 'Требуемая надежность программы',
          description: 'Required Software Reliability (RELY) – требуемая надежность программы',
        },
        [effortMultipliersPA.DATA]: {
          title: 'Размер базы данных',
          description: 'Database Size (DATA) – размер базы данных',
        },
        [effortMultipliersPA.CPLX]: {
          title: 'Сложность программы',
          description: 'Software Product Complexity (CPLX) – сложность программы',
        },
        [effortMultipliersPA.RUSE]: {
          title: 'Требуемая возможность многократного использования',
          description: 'Required Reusability (RUSE) – требуемая возможность многократного использования',
        },
        [effortMultipliersPA.DOCU]: {
          title: 'Соответствие документации потребностям жизненного цикла',
          description: 'Documentation Match to Life-Cycle Needs (DOCU) – соответствие документации потребностям жизненного цикла',
        },
        [effortMultipliersPA.TIME]: {
          title: 'Ограничения времени выполнения',
          description: 'Execution Time Constraint (TIME) – ограничения времени выполнения',
        },
        [effortMultipliersPA.STOR]: {
          title: 'Ограничения памяти',
          description: 'Main Storage Constraint (STOR) – ограничения памяти',
        },
        [effortMultipliersPA.PVOL]: {
          title: 'Изменяемость платформы',
          description: 'Platform Volatility (PVOL) – изменяемость платформы',
        },
        [effortMultipliersPA.TOOL]: {
          title: 'Использование инструментальных программных средств',
          description: 'Use of Software Tools (TOOL) – использование инструментальных программных средств',
        },
        [effortMultipliersPA.SITE]: {
          title: 'Многоабонентская разработка',
          description: 'Multisite Development (SITE) – многоабонентская (удаленная) разработка',
        },
        [effortMultipliersPA.SCED]: {
          title: 'Требуемое выполнение графика работ',
          description: 'Required Development Schedule (SCED) – требуемое выполнение графика работ',
        },
      },
    },
    'cost-drivers': {
      title: 'Арибуты стоимости',
      [costDrivers.SOFTWARE_RELIABILITY]: {
        title: 'Требуемая надежность ПО',
      },
      [costDrivers.DATABASE_SIZE]: {
        title: 'Размер БД приложения',
        description: '',
      },
      [costDrivers.PRODUCT_COMPLEXITY]: {
        title: 'Сложность продукта',
        description: '',
      },
      [costDrivers.RT_PERFORMANCE]: {
        title: 'Ограничения быстродействия при выполнении программы',
        description: '',
      },
      [costDrivers.MEMORY]: {
        title: 'Ограничения памяти',
        description: '',
      },
      [costDrivers.VMENV_VOLATILITY]: {
        title: 'Неустойчивость окружения виртуальной машины',
        description: '',
      },
      [costDrivers.TURNABOUT_TIME]: {
        title: 'Требуемое время восстановления',
        description: '',
      },
      [costDrivers.ANALYST_CAPABILITY]: {
        title: 'Аналитические способности персонала',
        description: '',
      },
      [costDrivers.APPLICATIONS_EXPERIENCE]: {
        title: 'Способности персонала к разработке ПО',
        description: '',
      },
      [costDrivers.SE_CAPABILITY]: {
        title: 'Опыт разработки персонала',
        description: '',
      },
      [costDrivers.VM_EXPERIENCE]: {
        title: 'Опыт использования виртуальных машин персонала',
        description: '',
      },
      [costDrivers.PLANG_EXPERIENCE]: {
        title: 'Опыт разработки на языках программирования персонала',
        description: '',
      },
      [costDrivers.SE_METHODS_APPLICATION]: {
        title: 'Использование инструментария разработки ПО',
        description: '',
      },
      [costDrivers.SW_TOOLS_USE]: {
        title: 'Применение методов разработки ПО',
        description: '',
      },
      [costDrivers.DEV_SCHEDULE]: {
        title: 'Требования соблюдения графика разработки',
        description: '',
      },
    },
    ratings: {
      [ratings.EXTRA_LOW]: 'Критически низкий',
      [ratings.VERY_LOW]: 'Очень низкий',
      [ratings.LOW]: 'Низкий',
      [ratings.NOMINAL]: 'Средний',
      [ratings.HIGH]: 'Высокий',
      [ratings.VERY_HIGH]: 'Очень высокий',
      [ratings.EXTRA_HIGH]: 'Критически высокий',
    },
    'app-title': 'Калькулятор COCOMO',
    'section-titles': {
      about: 'Для чего это приложение?',
      'about-models': 'Что такое модели COCOMO?',
    },
    about:
      'Это приложение для рачета стоимости разработки программного обеспечения по моделям COCOMO и COCOMO II.',
    size: {
      title: 'Объем продукта',
      units: '(тыс. строк кода)',
    },
    pm: {
      title: 'Трудоемкость',
      units: 'чел.×мес.',
      description: 'PM (People×Month) – трудоемкость (чел.×мес.).',
    },
    tm: {
      title: 'Время разработки',
      units: 'мес.',
      description: 'TM (Time at Month) – время разработки в календарных месяцах.',
    },
  },
};

export default ru;
