import PageContainer from "@layouts/PageContainer";
import Flexbox from "@components/surfaces/Flexbox";
import Button from "@components/inputs/Button";
import ArrowLeftBlue from "@images/ArrowLeftBlue.svg";
import Image from "@components/data-display/Image";
import Typography from "@components/data-display/Typography";
import {AppRoutes} from "@utils/const";
import {Link} from "react-router-dom";
import Input from "@components/inputs/Input";
import SearchGray from "@images/SearchGray.svg";
import ColumnBlueIcon from "@images/ColumnBlueIcon.svg";
import FilterBlueIcon from "@images/FilterBlueIcon.svg";
import DownloadBlueIcon from "@images/DownloadBlueIcon.svg";
import {MEmployees} from "@utils/mock";
import Table from "@components/data-display/Table";
import RightPanel from "@components/complex/RightPanel";
import {useState} from "react";
import styled from "styled-components";
import {SLIDE_PANEL_TIME} from "@utils/const"

const StyledTableWrap = styled.div`
  width: 100%;
  transition: width ${SLIDE_PANEL_TIME}ms ease;
  
  &.active {
    width: calc(100% - 560px - 16px);
  }
`

const EmployeesPage = () => {
  const [showPanel, setShowPanel] = useState<boolean>(false);

  const handleRowClick = () => {
    setShowPanel(true);
    // TODO заменить данные в панели
  }

  return (
    <PageContainer>
      <Flexbox $gap="16px" $direction="column" $width="100%" $borderRadius="8px">
        <Flexbox $gap="16px" $align="center" $justify="space-between" $width="100%">
          <Flexbox $gap="16px" $align="center">
            <Link to={AppRoutes.Main}>
              <Button $variant="primary" size="no-size" $width="32px" $height="32px">
                <Image src={ArrowLeftBlue} $width="20px" $height="20px" />
              </Button>
            </Link>
            <Typography $variant="h2">Сотрудники</Typography>
          </Flexbox>

          <Flexbox $gap="12px" $align="center">
            <Flexbox $width="320px" $flex="0 0 320px">
              {/* TODO сделать поиск */}
              <Input type="search" name="employeeSearchInput" placeholder="Начните вводить ФИО сотрудника" icon={SearchGray} />
            </Flexbox>
            <Button $variant="primary" size="no-size" $width="40px" $height="40px" $flex="0 0 40px">
              <Image src={ColumnBlueIcon} $width="24px" $height="24px" />
            </Button>
            <Button $variant="primary" size="no-size" $width="40px" $height="40px" $flex="0 0 40px">
              <Image src={FilterBlueIcon} $width="24px" $height="24px" />
            </Button>
            <Button $variant="primary" size="no-size" $width="40px" $height="40px" $flex="0 0 40px">
              <Image src={DownloadBlueIcon} $width="24px" $height="24px" />
            </Button>
          </Flexbox>
        </Flexbox>

        <Flexbox $position="relative">
          <StyledTableWrap className={showPanel ? 'active' : undefined}>
            <Table data={MEmployees} onRowClick={handleRowClick} />
          </StyledTableWrap>

          <RightPanel isShow={showPanel}>
            children
          </RightPanel>
        </Flexbox>

      </Flexbox>
    </PageContainer>
  );
}

export default EmployeesPage;
