import {PageContainer} from "@layouts/PageContainer";
import {MInitialData} from "@utils/mock";
import {WidgetApplicationsForApproval} from "@components/complex/Widgets/WidgetApplicationsForApproval";
import {WidgetMyDeputies} from "@components/complex/Widgets/WidgetMyDeputies";
import {WidgetWorkloadOfEmployees} from "@components/complex/Widgets/WidgetWorkloadOfEmployees";
import {WidgetReportingWeekTS} from "@components/complex/Widgets/WidgetReportingWeekTS";
import {WidgetAbsence} from "@components/complex/Widgets/WidgetAbsence";
import {WidgetHappinessIndex} from "@components/complex/Widgets/WidgetHappinessIndex";
import {WidgetMoodMonitoring} from "@components/complex/Widgets/WidgetMoodMonitoring";
import {WidgetMyLinks} from "@components/complex/Widgets/WidgetMyLinks";
import {WidgetTraining} from "@components/complex/Widgets/WidgetTraining";
import {WidgetStaffMovement} from "@components/complex/Widgets/WidgetStaffMovement";
import {WidgetRelevanceOfProfiles} from "@components/complex/Widgets/WidgetRelevanceOfProfiles";
import {DndMain} from "@components/complex/Dnd/DndMain";
import {WidgetEmployees} from "@components/complex/Widgets/WidgetEmployees";

export const MainPage = () => {
  const {
    ["widget-1"]: dataApplicationsForApproval,
    ["widget-2"]: dataMyDeputies,
    ["widget-3"]: dataWorkloadOfEmployees,
    ["widget-4"]: dataEmployees,
    ["widget-5"]: dataReportingWeekTS,
    ["widget-6"]: dataAbsence,
    ["widget-7"]: dataHappinessIndex,
    ["widget-8"]: dataMoodMonitoring,
    ["widget-9"]: dataMyLinks,
    ["widget-10"]: dataTraining,
    ["widget-11"]: dataStaffMovement,
    ["widget-12"]: dataRelevanceOfProfiles,
  } = MInitialData.cells;

  return (
    <PageContainer>
      <DndMain initialData={MInitialData}>
        <WidgetApplicationsForApproval {...dataApplicationsForApproval} />
        <WidgetMyDeputies {...dataMyDeputies} />
        <WidgetWorkloadOfEmployees {...dataWorkloadOfEmployees} />
        <WidgetEmployees {...dataEmployees} />
        <WidgetReportingWeekTS {...dataReportingWeekTS} />
        <WidgetAbsence {...dataAbsence} />
        <WidgetHappinessIndex {...dataHappinessIndex} />
        <WidgetMoodMonitoring {...dataMoodMonitoring} />
        <WidgetMyLinks {...dataMyLinks} />
        <WidgetTraining {...dataTraining} />
        <WidgetStaffMovement {...dataStaffMovement} />
        <WidgetRelevanceOfProfiles {...dataRelevanceOfProfiles} />
      </DndMain>
    </PageContainer>
  );
}
