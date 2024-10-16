import PageContainer from "@layouts/PageContainer";
import {MInitialData} from "@utils/mock";
import WidgetApplicationsForApproval from "@components/complex/Widgets/WidgetApplicationsForApproval";
import WidgetMyDeputies from "@components/complex/Widgets/WidgetMyDeputies";
import WidgetWorkloadOfEmployees from "@components/complex/Widgets/WidgetWorkloadOfEmployees";
import Employees from "@components/complex/Widgets/WidgetEmployees";
import WidgetReportingWeekTS from "@components/complex/Widgets/WidgetReportingWeekTS";
import WidgetAbsence from "@components/complex/Widgets/WidgetAbsence";
import WidgetHappinessIndex from "@components/complex/Widgets/WidgetHappinessIndex";
import WidgetMoodMonitoring from "@components/complex/Widgets/WidgetMoodMonitoring";
import WidgetMyLinks from "@components/complex/Widgets/WidgetMyLinks";
import WidgetTraining from "@components/complex/Widgets/WidgetTraining";
import WidgetStaffMovement from "@components/complex/Widgets/WidgetStaffMovement";
import WidgetRelevanceOfProfiles from "@components/complex/Widgets/WidgetRelevanceOfProfiles";
import DndMain from "@components/complex/Dnd/DndMain";

const MainPage = () => {
  return (
    <PageContainer>
      <DndMain initialData={MInitialData}>
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
      </DndMain>
    </PageContainer>
  );
}

export default MainPage;
