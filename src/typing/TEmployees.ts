interface IEmployee {
  avatar: string;
  name: string;
}

interface IEmployeeRow {
  id: string;
  employee: IEmployee;
  division: string;
  specialization: string;
  post: string;
  direction: string;
  technology:string;
  lineManager: string;
  grade: number;
  grossRate: number;
  city: string;
  timeZone: string;
  profileStatus: string;
  nearestReleaseDate: string;
  workExperienceIBS: string;
  nearestPeriodAbsence: string;
  tsStatus: string;
  happinessIndex: number;
  moodMonitoring: number;
}

export type TEmployeeBody = IEmployeeRow[];

type TEmployeeHeadKeys = Exclude<keyof IEmployeeRow | 'employee', 'id'>;

type IEmployeeHead = {
  [Key in TEmployeeHeadKeys]: string;
}

export interface IEmployees {
  head: IEmployeeHead;
  body: TEmployeeBody;
}
