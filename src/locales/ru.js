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
      [projectTypes.ORGANIC]: 'Распространенный',
      [projectTypes.EMBEDDED]: 'Встроенный',
      [projectTypes.SEMI_DETACHED]: 'Полунезависимый',
    },
    levels: {
      title: 'Уровень',
      [levels.BASIC]: 'Базовый',
      [levels.INTERMEDIATE]: 'Промежуточный',
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
    'project-type': 'Тип проекта',
    size: 'Объем продукта (тыс. строк кода)',
  },
};

export default ru;
