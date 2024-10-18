import {IInitialData} from "@typing/TDnd";
import {TWidgetApplications} from "@typing/TWidgetApplications";
import {TWidgetMyDeputies} from "@typing/TWidgetMyDeputies";
import {TWidgetWorkloadOfEmployees} from "@typing/TWidgetWorkloadOfEmployees";
import {IButtonGroupData} from "@typing/TButtonGroupData";
import {TWidgetEmployees} from "@typing/TWidgetEmployees";
import {TWidgetReportingWeekTSList} from "@typing/TWidgetReportingWeekTS";

// Виджеты на главной
export const MInitialData: IInitialData = {
  cells: {
    'widget-1': { id: 'widget-1', title: 'Заявки на утверждение', $isOpen: false, $isDragIcon: true},
    'widget-2': { id: 'widget-2', title: 'Мои заместители', $isOpen: false, $isDragIcon: true, $externalLink: "https://life.ibs.ru/stream/"},
    'widget-3': { id: 'widget-3', title: 'Занятость сотрудников', $isOpen: true, $isDragIcon: true, $externalLink: "https://life.ibs.ru/stream/"},
    'widget-4': { id: 'widget-4', title: 'Сотрудники', $isOpen: true, $isDragIcon: true},
    'widget-5': { id: 'widget-5', title: 'TS за отчетную неделю', $isOpen: true, $isDragIcon: true, $externalLink: "https://life.ibs.ru/stream/"},
    'widget-6': { id: 'widget-6', title: 'Отсутствия', $isOpen: true, $isDragIcon: true, $externalLink: "https://life.ibs.ru/stream/"},
    'widget-7': { id: 'widget-7', title: 'Индекс счастья', $isOpen: true, $isDragIcon: true, $externalLink: "https://life.ibs.ru/stream/"},
    'widget-8': { id: 'widget-8', title: 'Мониторинг настроения', $isOpen: true, $isDragIcon: true, $externalLink: "https://life.ibs.ru/stream/"},
    'widget-9': { id: 'widget-9', title: 'Мои ссылки', $isOpen: true, $isDragIcon: true, $popupId: "addLinkPopup"},
    'widget-10': { id: 'widget-10', title: 'Обучение', $isOpen: true, $isDragIcon: true, $internalLink: "/training"},
    'widget-11': { id: 'widget-11', title: 'Движение персонала', $isOpen: true, $isDragIcon: true, $externalLink: "https://life.ibs.ru/stream/"},
    'widget-12': { id: 'widget-12', title: 'Актуальность профилей', $isOpen: true, $isDragIcon: true, $externalLink: "https://life.ibs.ru/stream/"},
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

// Переключатель "Неделя" / "Месяц"
export const MPeriodsSwitcher: IButtonGroupData[] = [
  {id: 'week', title: 'Неделя', isActive: true},
  {id: 'month', title: 'Месяц', isActive: false},
];

// Виджет "Сотрудники "
export const MWidgetEmployees: TWidgetEmployees = [
  {
    id: 'all',
    title: 'Всего сотрудников',
    count: 23,
    link: '/',
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
