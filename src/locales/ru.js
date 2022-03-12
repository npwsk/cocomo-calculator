import { models, projectTypes } from '../constants';
import costDrivers from '../constants/costDrivers';
import ratings from '../constants/ratings';
import levels from '../constants/levels';

const ru = {
  translation: {
    models: {
      [models.COCOMO]: 'COCOMO',
      [models.COCOMO_2]: 'COCOMO II',
    },
    'project-types': {
      title: 'Тип проекта',
      [projectTypes.ORGANIC]: {
        title: 'Распространенный',
        description: 'Распространенный тип (organic projects) характеризуется тем, что проект выполня-ется небольшой группой специалистов, имеющих опыт в создании подобных изделий и опыт применения технологических средств. Условия работы стабильны, и изделие имеет относительно невысокую сложность.'
      },
      [projectTypes.EMBEDDED]: {
        title: 'Встроенный',
        description: 'Встроенный тип (embedded projects) характеризуется очень жесткими требованиями на программный продукт, интерфейсы, параметры ЭВМ. Как правило, у таких изделий высокая степень новизны и планирование работ осуществляется при недостаточной ин-формации, как о самом изделии, так и об условиях работы. Встроенный проект требует больших затрат на изменения и исправления.',
      },
      [projectTypes.SEMI_DETACHED]: {
        title: 'Полунезависимый',
        description: 'Полунезависимый тип (semidetached projects) занимает промежуточное положение между распространенным и встроенным – это проекты средней сложности. Исполнители знакомы лишь с некоторыми характеристиками (или компонентами) создаваемой систе-мы, имеют средний опыт работы с подобными изделиями, изделие имеет элемент новиз-ны. Только часть требований к изделию жестко фиксируется, в остальном разработки имеют степени выбора.'
      }
    },
    levels: {
      title: 'Уровень',
      [levels.BASIC]: {
        title: 'Базовый',
      },
      [levels.INTERMEDIATE]: {
        title: 'Промежуточный',
      },
    },
    'cost-drivers': {
      'title': 'Арибуты стоимости',
      [costDrivers.SOFTWARE_RELIABILITY]: 'Требуемая надежность ПО',
      [costDrivers.DATABASE_SIZE]: 'Размер БД приложения',
      [costDrivers.PRODUCT_COMPLEXITY]: 'Сложность продукта',
      [costDrivers.RT_PERFORMANCE]: 'Ограничения быстродействия при выполнении программы',
      [costDrivers.MEMORY]: 'Ограничения памяти',
      [costDrivers.VMENV_VOLATILITY]: 'Неустойчивость окружения виртуальной машины',
      [costDrivers.TURNABOUT_TIME]: 'Требуемое время восстановления',
      [costDrivers.ANALYST_CAPABILITY]: 'Аналитические способности персонала',
      [costDrivers.APPLICATIONS_EXPERIENCE]: 'Способности персонала к разработке ПО',
      [costDrivers.SE_CAPABILITY]: 'Опыт разработки',
      [costDrivers.VM_EXPERIENCE]: 'Опыт использования виртуальных машин',
      [costDrivers.PLANG_EXPERIENCE]: 'Опыт разработки на языках программирования',
      [costDrivers.SE_METHODS_APPLICATION]: 'Использование инструментария разработки ПО',
      [costDrivers.SW_TOOLS_USE]: 'Применение методов разработки ПО',
      [costDrivers.DEV_SCHEDULE]: 'Требования соблюдения графика разработки',
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
    about:
      'COCOMO (Constructive Cost Model) – это конструктивная модель стоимости, разработанная в начале 80-х годов Барри Боэмом для оценки трудоемкости разработки программных продуктов.',
    size: {
      title: 'Объем продукта',
      units: '(тыс. строк кода)',
    }
  },
};

export default ru;
