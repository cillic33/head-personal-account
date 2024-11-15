import PageContainer from "@layouts/PageContainer";
import Flexbox from "@components/surfaces/Flexbox";
import {Link} from "react-router-dom";
import {AppRoutes} from "@utils/const";
import Button from "@components/inputs/Button";
import Image from "@components/data-display/Image";
import ArrowLeftBlue from "@images/ArrowLeftBlue.svg";
import Typography from "@components/data-display/Typography";
import Input from "@components/inputs/Input";
import SearchGray from "@images/SearchGray.svg";
import ColumnBlueIcon from "@images/ColumnBlueIcon.svg";
import FilterBlueIcon from "@images/FilterBlueIcon.svg";
import DownloadBlueIcon from "@images/DownloadBlueIcon.svg";

const TrainingPage = () => {
  return (
    <PageContainer>
      <Flexbox gap="16px" $direction="column" $width="100%" $borderRadius="8px">
        <Flexbox gap="16px" $align="center" $justify="space-between" $width="100%">
          <Flexbox gap="16px" $align="center">
            <Link to={AppRoutes.Main}>
              <Button $variant="primary" size="no-size" $width="32px" $height="32px">
                <Image src={ArrowLeftBlue} $width="20px" $height="20px" />
              </Button>
            </Link>
            <Typography $variant="h2">Обучение</Typography>
          </Flexbox>

          <Flexbox gap="12px" $align="center">
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


      </Flexbox>
    </PageContainer>
  );
}

export default TrainingPage;
