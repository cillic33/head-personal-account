import {IInitialData} from "@typing/TDnd";
import {TWidgetApplications} from "@typing/TWidgetApplications";
import {TWidgetMyDeputies} from "@typing/TWidgetMyDeputies";
import {TWidgetWorkloadOfEmployees} from "@typing/TWidgetWorkloadOfEmployees";
import {IButtonGroupData} from "@typing/TButtonGroupData";
import {TWidgetEmployees} from "@typing/TWidgetEmployees";
import {TWidgetReportingWeekTSList} from "@typing/TWidgetReportingWeekTS";
import {TWidgetAbsenceList} from "@typing/TWidgetAbsence";
import {IWidgetMetrics} from "@typing/TMetrics";
import {TWidgetMoodMonitoring} from "@typing/TWidgetMoodMonitoring";
import {TWidgetMyLinks} from "@typing/TWidgetMyLinks";
import {AppRoutes} from "@utils/const";
import {TTable} from "@typing/TTable";

// Виджеты на главной
export const MInitialData: IInitialData = {
  cells: {
    'widget-1': { id: 'widget-1', title: 'Заявки на утверждение', isOpen: true, isDragIcon: true},
    'widget-2': { id: 'widget-2', title: 'Мои заместители', isOpen: true, isDragIcon: true, externalLink: "https://life.ibs.ru/stream/"},
    'widget-3': { id: 'widget-3', title: 'Занятость сотрудников', isOpen: true, isDragIcon: true, externalLink: "https://life.ibs.ru/stream/"},
    'widget-4': { id: 'widget-4', title: 'Сотрудники', isOpen: true, isDragIcon: true},
    'widget-5': { id: 'widget-5', title: 'TS за отчетную неделю', isOpen: true, isDragIcon: true, externalLink: "https://life.ibs.ru/stream/"},
    'widget-6': { id: 'widget-6', title: 'Отсутствия', isOpen: true, isDragIcon: true, externalLink: "https://life.ibs.ru/stream/"},
    'widget-7': { id: 'widget-7', title: 'Индекс счастья', isOpen: true, isDragIcon: true, externalLink: "https://life.ibs.ru/stream/"},
    'widget-8': { id: 'widget-8', title: 'Мониторинг настроения', isOpen: true, isDragIcon: true, externalLink: "https://life.ibs.ru/stream/"},
    'widget-9': { id: 'widget-9', title: 'Мои ссылки', isOpen: true, isDragIcon: true, isPlusIcon: true},
    'widget-10': { id: 'widget-10', title: 'Обучение', isOpen: true, isDragIcon: true, internalLink: `${AppRoutes.Training}`},
    'widget-11': { id: 'widget-11', title: 'Движение персонала', isOpen: true, isDragIcon: true, externalLink: "https://life.ibs.ru/stream/"},
    'widget-12': { id: 'widget-12', title: 'Актуальность профилей', isOpen: true, isDragIcon: true, externalLink: "https://life.ibs.ru/stream/"},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      cellIds: ['widget-1', 'widget-2', 'widget-3'],
    },
    'column-2': {
      id: 'column-2',
      cellIds: ['widget-4', 'widget-5', 'widget-6', 'widget-7', 'widget-8'],
    },
    'column-3': {
      id: 'column-3',
      cellIds: ['widget-9', 'widget-10', 'widget-11', 'widget-12'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

// Виджет "Заявки на утверждение"
export const MApplications: TWidgetApplications = [
  {
    id: 'all',
    title: 'Всего сегодня',
    important: 5,
    increase: 10,
    count: 160,
  },
  {
    id: '1',
    title: 'Заявка на обучение',
    important: 0,
    increase: 1,
    count: 5,
    link: 'https://life.ibs.ru/link1',
  },
  {
    id: '2',
    title: 'Заявка на отсутствие',
    important: 0,
    increase: 1,
    count: 6,
    link: 'https://life.ibs.ru/link2',
  },
  {
    id: '3',
    title: 'Увольнение/перевод ',
    important: 1,
    increase: 0,
    count: 10,
    link: 'https://life.ibs.ru/link3',
  },
  {
    id: '4',
    title: 'Командировка',
    important: 0,
    increase: 1,
    count: 80,
    link: 'https://life.ibs.ru/link4',
  },
  {
    id: '5',
    title: 'Работа в выходной день',
    important: 0,
    increase: 0,
    count: 10,
    link: 'https://life.ibs.ru/link5',
  },
  {
    id: '6',
    title: 'Проектный отгул',
    important: 1,
    increase: 1,
    count: 10,
    link: 'https://life.ibs.ru/link6',
  },
  {
    id: '7',
    title: 'Эл. обходной лист',
    important: 0,
    increase: 0,
    count: 10,
    link: 'https://life.ibs.ru/link7',
  },
  {
    id: '8',
    title: 'Утверждение TS',
    important: 0,
    increase: 0,
    count: 10,
    link: 'https://life.ibs.ru/link8',
  },
  {
    id: '9',
    title: 'Профили на утверждении',
    important: 0,
    increase: 1,
    count: 10,
    link: 'https://life.ibs.ru/link9',
  },
  {
    id: '10',
    title: 'Вакансии',
    important: 1,
    increase: 0,
    count: 10,
    link: 'https://life.ibs.ru/link10',
  },
  {
    id: '11',
    title: 'Офферы',
    important: 1,
    increase: 1,
    count: 10,
    link: 'https://life.ibs.ru/link11',
  },
  {
    id: '12',
    title: 'Прочие ОЦО',
    important: 1,
    increase: 1,
    count: 10,
    link: 'https://life.ibs.ru/link12',
  },
];

// Виджет "Мои заместители"
export const MMyDeputies: TWidgetMyDeputies = [
  {
    id: "1",
    title: "Управление конкурсными проектами",
    rows: [
      {
        id: "1",
        name: "Попова Александра",
        src: "/src/images/AvatarPopova.png",
        period: "05.03.24 - 03.04.24",
      },
      {
        id: "2",
        name: "Васильев Анатолий",
        src: "/src/images/AvatarVasiliev.png",
        period: "неограничен",
      },
    ],
  },
  {
    id: "2",
    title: "Кредитный комитет",
    rows: [
      {
        id: "1",
        name: "Васильев Анатолий",
        src: "/src/images/AvatarVasiliev.png",
        period: "неограничен",
      },
    ],
  },
];

// Виджет "Занятость сотрудников"
export const MWorkloadOfEmployees: TWidgetWorkloadOfEmployees = [
  {
    id: "1",
    title: "Коммерческая занятость",
    percent: 20,
    color: '#008670',
  },
  {
    id: "2",
    title: "Пресейл",
    percent: 17,
    color: '#007DBB',
  },
  {
    id: "3",
    title: "Инвест",
    percent: 11,
    color: '#7B61FF',
  },
  {
    id: "4",
    title: "Отсутствия",
    percent: 8,
    color: '#F48888',
  },
  {
    id: "5",
    title: "Собрания",
    percent: 8,
    color: '#5684B6',
  },
  {
    id: "6",
    title: "Не отчитался",
    percent: 7,
    color: '#C83E3E',
  },
  {
    id: "7",
    title: "Прочее",
    percent: 2,
    color: '#D18101',
  },
];


// Виджет "Сотрудники"
export const MWidgetEmployees: TWidgetEmployees = [
  {
    id: 'all',
    title: 'Всего сотрудников',
    count: 23,
    link: `${AppRoutes.Employees}`,
  },
  {
    id: 'attestation',
    title: 'На аттестации в этом месяце',
    count: 3,
    link: '/',
  },
  {
    id: 'adaptation',
    title: 'На адаптации',
    count: 2,
    link: '/',
    important: 1,
    warning: 2,
  },
];

// Виджет "TS за отчетную неделю"
export const MWidgetReportingWeekTS: TWidgetReportingWeekTSList = [
  {
    id: "1",
    title: "TS утверждены",
    count: 23,
  },
  {
    id: "2",
    title: "TS не утверждены",
    count: 12,
  },
];

// Виджет "Отсутствия"
export const MWidgetAbsence: TWidgetAbsenceList = [
  {
    id: "1",
    title: "Отсутствуют сегодня",
    count: 23,
  },
  {
    id: "2",
    title: "Отсутствуют завтра",
    count: 1,
  },
  {
    id: "3",
    title: "Отсутствуют в ближ. 7 дней",
    count: 15,
  },
];

export const MWidgetMetrics: IWidgetMetrics = {
  // Виджет "Индекс счастья"
  "hrMetric": {
    title: "HR-метрики",
    percent: -0.1,
    total: 4.2,
    variants: [
      {
        name: "В зоне риска",
        value: 1,
        color: "#FF7979",
      },
      {
        name: "Требуют контроля",
        value: 4,
        color: "#FFA556",
      },
      {
        name: "Вне зоны риска",
        value: 10,
        color: "#00BF9F",
      },
    ],
    centerCount: "24",
    centerText: "Cотруд.",
  },
  "mlMetric": {
    title: "ML-метрики",
    percent: 0.1,
    total: 4.8,
    variants: [
      {
        name: "В зоне риска",
        value: 11,
        color: "#FF7979",
      },
      {
        name: "Требуют контроля",
        value: 12,
        color: "#FFA556",
      },
      {
        name: "Вне зоны риска",
        value: 13,
        color: "#00BF9F",
      },
    ],
    centerCount: "50",
    centerText: "Cотруд.",
  },
  // Виджет "Обучение"
  "coursesMetric": {
    variants: [
      {
        name: "Завершены успешно",
        value: 40,
        color: "#00BF9F",
      },
      {
        name: "Неявки",
        value: 10,
        color: "#C83E3E",
      },
      {
        name: "В процессе изучения",
        value: 10,
        color: "#00AAFF",
      },
      {
        name: "На согласовании",
        value: 10,
        color: "#FFA556",
      },
    ],
    centerCount: "350",
    centerText: "Курсов",
  },
  "costsMetric": {
    variants: [
      {
        name: "Израсходовано",
        value: 40,
        color: "#00BF9F",
      },
      {
        name: "Запланировано",
        value: 10,
        color: "#00AAFF",
      },
      {
        name: "На согласовании",
        value: 10,
        color: "#FFA556",
      },
    ],
    centerCount: "640",
    centerText: "Затраты",
    postfix: "т.р.",
  },
  // Виджет "Движение персонала"
  "staffTurnoverRateMetric": {
    title: "Коэффициент текучести кадров",
    ratio: 30,
    variants: [
      {
        name: "Увольнений",
        value: 7,
        color: "#FF7979",
      },
      {
        name: "Новых сотрудников",
        value: 11,
        color: "#00BF9F",
      },
      {
        name: "Без изменений",
        value: 10,
        color: "#28ABEC",
      },
    ],
    centerCount: "33",
    centerText: "Cотруд.",
  },
  // Виджет "Актуальность профилей"
  "relevanceFactorMetric": {
    title: "Коэффициент актуальности",
    ratio: 50,
    variants: [
      {
        name: "Актуален",
        value: 10,
        color: "#00BF9F",
      },
      {
        name: "Ожидает подтверждения",
        value: 3,
        color: "#FFA556",
      },
      {
        name: "Не актуален",
        value: 5,
        color: "#FF7979",
      },
    ],
    centerCount: "40",
    centerText: "Cотруд.",
  },
};

// Виджет "Мониторинг настроения"
export const MWidgetMoodMonitoring: TWidgetMoodMonitoring = [
  {
    id: "1",
    title: "Коэффициент по подразделению",
    percent: 0.5,
    count: 5,
  },
  {
    id: "2",
    title: "Коэффициент по компании",
    percent: 0.1,
    count: 4.5,
  },
];

// Виджет "Мои ссылки"
export const MWidgetMyLinks: TWidgetMyLinks = [
  {
    id: "1",
    title: "Chat GPT",
    imageSrc: "/src/images/LogoGhatGpt.svg",
    link: "https://life.ibs.ru",
  },
  {
    id: "2",
    title: "Моя полезная ссылка",
    imageSrc: "/src/images/LogoIbsRound.svg",
    link: "https://life.ibs.ru",
  },
  {
    id: "3",
    title: "Sales graph",
    imageSrc: "/src/images/LogoSalesGraph.svg",
    link: "https://life.ibs.ru",
  },
  {
    id: "4",
    title: "Awwwards",
    imageSrc: "/src/images/LogoAwwwards.svg",
    link: "https://life.ibs.ru",
  },
  {
    id: "5",
    title: "Chat GPT",
    imageSrc: "/src/images/LogoGhatGpt.svg",
    link: "https://life.ibs.ru",
  },
  {
    id: "6",
    title: "Моя полезная ссылка",
    imageSrc: "/src/images/LogoIbsRound.svg",
    link: "https://life.ibs.ru",
  },
  {
    id: "7",
    title: "Sales graph",
    imageSrc: "/src/images/LogoSalesGraph.svg",
    link: "https://life.ibs.ru",
  },
  {
    id: "8",
    title: "Awwwards",
    imageSrc: "/src/images/LogoAwwwards.svg",
    link: "https://life.ibs.ru",
  },
];

// Переключатель "Неделя" / "Месяц"
export const MWeekMonthSwitcher: IButtonGroupData[] = [
  {id: 'week', title: 'Неделя', isActive: true},
  {id: 'month', title: 'Месяц', isActive: false},
];

// Переключатель "Месяц" / "Квартал" / "Год"
export const MMonthQuarterYearSwitcher: IButtonGroupData[] = [
  {id: 'month', title: 'Месяц', isActive: true, width: '63px'},
  {id: 'quarter', title: 'Квартал', isActive: false, width: '74px'},
  {id: 'year', title: 'Год', isActive: false, width: '41px'},
];

// Переключатель "Месяц" / "Год"
export const MMonthYearSwitcher: IButtonGroupData[] = [
  {id: 'month', title: 'Месяц', isActive: true},
  {id: 'year', title: 'Год', isActive: false},
];

// Таблица "Сотрудники"
export const MEmployees: TTable = {
  settings: {
    employee: {id: 'employee', name: "Сотрудник", width: 238, isEmployee: true, isSorted: true},
    division: {id: 'division', name: "Подразделение", width: 204, isDivision: true, isSorted: true},
    specialization: {id: 'specialization', name: "Специализация", width: 180},
    post: {id: 'post', name: "Должность"},
    direction: {id: 'direction', name: "Направление"},
    technology: {id: 'technology', name: "Технология"},
    lineManager: {id: 'lineManager', name: "Лин. руководитель"},
    grade: {id: 'grade', name: "Грейд", isCenter: true},
    grossRate: {id: 'grossRate', name: "Дн. брутто-ставка, ₽", isCenter: true},
    city: {id: 'city', name: "Город"},
    timeZone: {id: 'timeZone', name: "Час. пояс", isCenter: true},
    profileStatus: {id: 'profileStatus', name: "Статус профиля", isCenter: true, isStatus: true},
    nearestReleaseDate: {id: 'nearestReleaseDate', name: "Ближ. дата высвоб.", isCenter: true},
    workExperienceIBS: {id: 'workExperienceIBS', name: "Стаж работы (IBS)", isCenter: true},
    nearestPeriodAbsence: {id: 'nearestPeriodAbsence', name: "Ближ. период отсут.", isCenter: true},
    tsStatus: {id: 'tsStatus', name: "Статус TS", isCenter: true, isStatus: true},
    happinessIndex: {id: 'happinessIndex', name: "Индекс счастья", isCenter: true},
    moodMonitoring: {id: 'moodMonitoring', name: "Мониторинг настроения", isCenter: true},
  },
  body: [
    {
      id: "1",
      employee: {
        avatar: "/src/images/AvatarBurmakin.png",
        name: "Бурмакин Евгений Дмитриевич",
      },
      division: "Группа клиентского сервиса",
      specialization: "Дизайнер",
      post: "Старший дизайнер",
      direction: "UX аналитик",
      technology: "Lean UX",
      lineManager: "Афанасьев Д. Г.",
      grade: 1,
      grossRate: 1500,
      city: "Екатеринбург",
      timeZone: "+2 МСК",
      profileStatus: {
        title: "Актуален",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      nearestReleaseDate: "02.07.24",
      workExperienceIBS: "6 лет",
      nearestPeriodAbsence: "07.06.24 - 14.06.24",
      tsStatus: {
        title: "Утвержден",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      happinessIndex: 5.5,
      moodMonitoring: 5,
    },
    {
      id: "2",
      employee: {
        avatar: "/src/images/AvatarBurmakin.png",
        name: "Бурмакин Евгений Дмитриевич",
      },
      division: "Группа клиентского сервиса",
      specialization: "Дизайнер",
      post: "Старший дизайнер",
      direction: "UX аналитик",
      technology: "Lean UX",
      lineManager: "Афанасьев Д. Г.",
      grade: 1,
      grossRate: 1500,
      city: "Екатеринбург",
      timeZone: "+2 МСК",
      profileStatus: {
        title: "Не актуален",
        color: '#C83E3E',
        bgColor: 'rgba(227, 79, 79, 0.15)',
      },
      nearestReleaseDate: "02.07.24",
      workExperienceIBS: "6 лет",
      nearestPeriodAbsence: "07.06.24 - 14.06.24",
      tsStatus: {
        title: "Не утвержден",
        color: '#C83E3E',
        bgColor: 'rgba(227, 79, 79, 0.15)',
      },
      happinessIndex: 5.5,
      moodMonitoring: 5,
    },
    {
      id: "3",
      employee: {
        avatar: "/src/images/AvatarBurmakin.png",
        name: "Бурмакин Евгений Дмитриевич",
      },
      division: "Группа клиентского сервиса",
      specialization: "Дизайнер",
      post: "Старший дизайнер",
      direction: "UX аналитик",
      technology: "Lean UX",
      lineManager: "Афанасьев Д. Г.",
      grade: 1,
      grossRate: 1500,
      city: "Екатеринбург",
      timeZone: "+2 МСК",
      profileStatus: {
        title: "Актуален",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      nearestReleaseDate: "02.07.24",
      workExperienceIBS: "6 лет",
      nearestPeriodAbsence: "07.06.24 - 14.06.24",
      tsStatus: {
        title: "Утвержден",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      happinessIndex: 5.5,
      moodMonitoring: 5,
    },
    {
      id: "4",
      employee: {
        avatar: "/src/images/AvatarBurmakin.png",
        name: "Бурмакин Евгений Дмитриевич",
      },
      division: "Группа клиентского сервиса",
      specialization: "Дизайнер",
      post: "Старший дизайнер",
      direction: "UX аналитик",
      technology: "Lean UX",
      lineManager: "Афанасьев Д. Г.",
      grade: 1,
      grossRate: 1500,
      city: "Екатеринбург",
      timeZone: "+2 МСК",
      profileStatus: {
        title: "Актуален",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      nearestReleaseDate: "02.07.24",
      workExperienceIBS: "6 лет",
      nearestPeriodAbsence: "07.06.24 - 14.06.24",
      tsStatus: {
        title: "Утвержден",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      happinessIndex: 5.5,
      moodMonitoring: 5,
    },
    {
      id: "5",
      employee: {
        avatar: "/src/images/AvatarBurmakin.png",
        name: "Бурмакин Евгений Дмитриевич",
      },
      division: "Группа клиентского сервиса",
      specialization: "Дизайнер",
      post: "Старший дизайнер",
      direction: "UX аналитик",
      technology: "Lean UX",
      lineManager: "Афанасьев Д. Г.",
      grade: 1,
      grossRate: 1500,
      city: "Екатеринбург",
      timeZone: "+2 МСК",
      profileStatus: {
        title: "Актуален",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      nearestReleaseDate: "02.07.24",
      workExperienceIBS: "6 лет",
      nearestPeriodAbsence: "07.06.24 - 14.06.24",
      tsStatus: {
        title: "Утвержден",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      happinessIndex: 5.5,
      moodMonitoring: 5,
    },
    {
      id: "6",
      employee: {
        avatar: "/src/images/AvatarBurmakin.png",
        name: "Бурмакин Евгений Дмитриевич",
      },
      division: "Группа клиентского сервиса",
      specialization: "Дизайнер",
      post: "Старший дизайнер",
      direction: "UX аналитик",
      technology: "Lean UX",
      lineManager: "Афанасьев Д. Г.",
      grade: 1,
      grossRate: 1500,
      city: "Екатеринбург",
      timeZone: "+2 МСК",
      profileStatus: {
        title: "Актуален",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      nearestReleaseDate: "02.07.24",
      workExperienceIBS: "6 лет",
      nearestPeriodAbsence: "07.06.24 - 14.06.24",
      tsStatus: {
        title: "Утвержден",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      happinessIndex: 5.5,
      moodMonitoring: 5,
    },
    {
      id: "7",
      employee: {
        avatar: "/src/images/AvatarBurmakin.png",
        name: "Бурмакин Евгений Дмитриевич",
      },
      division: "Группа клиентского сервиса",
      specialization: "Дизайнер",
      post: "Старший дизайнер",
      direction: "UX аналитик",
      technology: "Lean UX",
      lineManager: "Афанасьев Д. Г.",
      grade: 1,
      grossRate: 1500,
      city: "Екатеринбург",
      timeZone: "+2 МСК",
      profileStatus: {
        title: "Актуален",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      nearestReleaseDate: "02.07.24",
      workExperienceIBS: "6 лет",
      nearestPeriodAbsence: "07.06.24 - 14.06.24",
      tsStatus: {
        title: "Утвержден",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      happinessIndex: 5.5,
      moodMonitoring: 5,
    },
    {
      id: "8",
      employee: {
        avatar: "/src/images/AvatarBurmakin.png",
        name: "Бурмакин Евгений Дмитриевич",
      },
      division: "Группа клиентского сервиса",
      specialization: "Дизайнер",
      post: "Старший дизайнер",
      direction: "UX аналитик",
      technology: "Lean UX",
      lineManager: "Афанасьев Д. Г.",
      grade: 1,
      grossRate: 1500,
      city: "Екатеринбург",
      timeZone: "+2 МСК",
      profileStatus: {
        title: "Актуален",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      nearestReleaseDate: "02.07.24",
      workExperienceIBS: "6 лет",
      nearestPeriodAbsence: "07.06.24 - 14.06.24",
      tsStatus: {
        title: "Утвержден",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      happinessIndex: 5.5,
      moodMonitoring: 5,
    },



    {
      id: "9",
      employee: {
        avatar: "/src/images/AvatarBurmakin.png",
        name: "Бурмакин Евгений Дмитриевич",
      },
      division: "Группа клиентского сервиса",
      specialization: "Дизайнер",
      post: "Старший дизайнер",
      direction: "UX аналитик",
      technology: "Lean UX",
      lineManager: "Афанасьев Д. Г.",
      grade: 1,
      grossRate: 1500,
      city: "Екатеринбург",
      timeZone: "+2 МСК",
      profileStatus: {
        title: "Актуален",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      nearestReleaseDate: "02.07.24",
      workExperienceIBS: "6 лет",
      nearestPeriodAbsence: "07.06.24 - 14.06.24",
      tsStatus: {
        title: "Утвержден",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      happinessIndex: 5.5,
      moodMonitoring: 5,
    },
    {
      id: "10",
      employee: {
        avatar: "/src/images/AvatarBurmakin.png",
        name: "Бурмакин Евгений Дмитриевич",
      },
      division: "Группа клиентского сервиса",
      specialization: "Дизайнер",
      post: "Старший дизайнер",
      direction: "UX аналитик",
      technology: "Lean UX",
      lineManager: "Афанасьев Д. Г.",
      grade: 1,
      grossRate: 1500,
      city: "Екатеринбург",
      timeZone: "+2 МСК",
      profileStatus: {
        title: "Актуален",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      nearestReleaseDate: "02.07.24",
      workExperienceIBS: "6 лет",
      nearestPeriodAbsence: "07.06.24 - 14.06.24",
      tsStatus: {
        title: "Утвержден",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      happinessIndex: 5.5,
      moodMonitoring: 5,
    },
    {
      id: "11",
      employee: {
        avatar: "/src/images/AvatarBurmakin.png",
        name: "Бурмакин Евгений Дмитриевич",
      },
      division: "Группа клиентского сервиса",
      specialization: "Дизайнер",
      post: "Старший дизайнер",
      direction: "UX аналитик",
      technology: "Lean UX",
      lineManager: "Афанасьев Д. Г.",
      grade: 1,
      grossRate: 1500,
      city: "Екатеринбург",
      timeZone: "+2 МСК",
      profileStatus: {
        title: "Актуален",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      nearestReleaseDate: "02.07.24",
      workExperienceIBS: "6 лет",
      nearestPeriodAbsence: "07.06.24 - 14.06.24",
      tsStatus: {
        title: "Утвержден",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      happinessIndex: 5.5,
      moodMonitoring: 5,
    },
    {
      id: "12",
      employee: {
        avatar: "/src/images/AvatarBurmakin.png",
        name: "Бурмакин Евгений Дмитриевич",
      },
      division: "Группа клиентского сервиса",
      specialization: "Дизайнер",
      post: "Старший дизайнер",
      direction: "UX аналитик",
      technology: "Lean UX",
      lineManager: "Афанасьев Д. Г.",
      grade: 1,
      grossRate: 1500,
      city: "Екатеринбург",
      timeZone: "+2 МСК",
      profileStatus: {
        title: "Актуален",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      nearestReleaseDate: "02.07.24",
      workExperienceIBS: "6 лет",
      nearestPeriodAbsence: "07.06.24 - 14.06.24",
      tsStatus: {
        title: "Утвержден",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      happinessIndex: 5.5,
      moodMonitoring: 5,
    },
    {
      id: "13",
      employee: {
        avatar: "/src/images/AvatarBurmakin.png",
        name: "Бурмакин Евгений Дмитриевич",
      },
      division: "Группа клиентского сервиса",
      specialization: "Дизайнер",
      post: "Старший дизайнер",
      direction: "UX аналитик",
      technology: "Lean UX",
      lineManager: "Афанасьев Д. Г.",
      grade: 1,
      grossRate: 1500,
      city: "Екатеринбург",
      timeZone: "+2 МСК",
      profileStatus: {
        title: "Актуален",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      nearestReleaseDate: "02.07.24",
      workExperienceIBS: "6 лет",
      nearestPeriodAbsence: "07.06.24 - 14.06.24",
      tsStatus: {
        title: "Утвержден",
        color: '#008670',
        bgColor: 'rgba(0, 159, 132, 0.15)',
      },
      happinessIndex: 5.5,
      moodMonitoring: 5,
    },
  ],
};
