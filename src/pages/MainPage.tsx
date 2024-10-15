import PageContainer from "@layouts/PageContainer";
import Dnd from "@components/complex/Dnd";
import {MInitialData} from "@utils/mock";
import WidgetApplicationsForApproval from "@components/complex/WidgetApplicationsForApproval";
import WidgetMyDeputies from "@components/complex/WidgetMyDeputies";
import WidgetWorkloadOfEmployees from "@components/complex/WidgetWorkloadOfEmployees";
import Employees from "@components/complex/WidgetEmployees";
import WidgetReportingWeekTS from "@components/complex/WidgetReportingWeekTS";
import WidgetAbsence from "@components/complex/WidgetAbsence";
import WidgetHappinessIndex from "@components/complex/WidgetHappinessIndex";
import WidgetMoodMonitoring from "@components/complex/WidgetMoodMonitoring";
import WidgetMyLinks from "@components/complex/WidgetMyLinks";
import WidgetTraining from "@components/complex/WidgetTraining";
import WidgetStaffMovement from "@components/complex/WidgetStaffMovement";
import WidgetRelevanceOfProfiles from "@components/complex/WidgetRelevanceOfProfiles";

const MainPage = () => {
  return (
    <PageContainer>
      <Dnd initialData={MInitialData}>
        <WidgetApplicationsForApproval id="widget-1" title="Заявки на утверждение" />
        <WidgetMyDeputies id="widget-2" title="Мои заместители" />
        <WidgetWorkloadOfEmployees id="widget-3" title="Занятость сотрудников" />
        <Employees id="widget-4" title="Сотрудники" />
        <WidgetReportingWeekTS id="widget-5" title="TS за отчетную неделю" />
        <WidgetAbsence id="widget-6" title="Отсутствия" />
        <WidgetHappinessIndex id="widget-7" title="Индекс счастья" />
        <WidgetMoodMonitoring id="widget-8" title="Мониторинг настроения" />
        <WidgetMyLinks id="widget-9" title="Мои ссылки" />
        <WidgetTraining id="widget-10" title="Обучение" />
        <WidgetStaffMovement id="widget-11" title="Движение персонала" />
        <WidgetRelevanceOfProfiles id="widget-12" title="Актуальность профилей" />
      </Dnd>
    </PageContainer>
  );
}

export default MainPage;
