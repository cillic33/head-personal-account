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
        <WidgetApplicationsForApproval id="widget-1" />
        <WidgetMyDeputies id="widget-2" />
        <WidgetWorkloadOfEmployees id="widget-3" />
        <Employees id="widget-4" />
        <WidgetReportingWeekTS id="widget-5" />
        <WidgetAbsence id="widget-6" />
        <WidgetHappinessIndex id="widget-7" />
        <WidgetMoodMonitoring id="widget-8" />
        <WidgetMyLinks id="widget-9" />
        <WidgetTraining id="widget-10" />
        <WidgetStaffMovement id="widget-11" />
        <WidgetRelevanceOfProfiles id="widget-12" />
      </Dnd>
    </PageContainer>
  );
}

export default MainPage;
