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
        <WidgetApplicationsForApproval {...MInitialData.cells["widget-1"]} />
        <WidgetMyDeputies {...MInitialData.cells["widget-2"]} />
        <WidgetWorkloadOfEmployees {...MInitialData.cells["widget-3"]} />
        <Employees {...MInitialData.cells["widget-4"]} />
        <WidgetReportingWeekTS {...MInitialData.cells["widget-5"]} />
        <WidgetAbsence {...MInitialData.cells["widget-6"]} />
        <WidgetHappinessIndex {...MInitialData.cells["widget-7"]} />
        <WidgetMoodMonitoring {...MInitialData.cells["widget-8"]} />
        <WidgetMyLinks {...MInitialData.cells["widget-9"]} />
        <WidgetTraining {...MInitialData.cells["widget-10"]} />
        <WidgetStaffMovement {...MInitialData.cells["widget-11"]} />
        <WidgetRelevanceOfProfiles {...MInitialData.cells["widget-12"]} />
      </Dnd>
    </PageContainer>
  );
}

export default MainPage;
