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

const EmployeesPage = () => {
  return (
    <PageContainer>
      <Flexbox $gap="16px" $direction="column" $width="100%">
        <Flexbox $gap="16px" $align="center" $justify="space-between" $width="100%">
          <Flexbox $gap="16px" $align="center">
            <Link to={AppRoutes.Main}>
              <Button $variant="primary" size="no-size" $width="32px" $height="32px">
                <Image src={ArrowLeftBlue} $width="20px" $height="20px" />
              </Button>
            </Link>
            <Typography $variant="h2">Сотрудники</Typography>
          </Flexbox>

          <Flexbox $gap="16px" $align="center">
            <Input type="search" name="employeeSearchInput" placeholder="Начните вводить ФИО сотрудника" icon={SearchGray} />
          </Flexbox>
        </Flexbox>
        <div>table</div>
      </Flexbox>
    </PageContainer>
  );
}

export default EmployeesPage;
