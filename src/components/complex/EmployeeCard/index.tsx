import Flexbox from "@components/surfaces/Flexbox";
import Image from "@components/data-display/Image";
import AvatarBurmakinBig from "@images/AvatarBurmakinBig.png";
import Typography from "@components/data-display/Typography";
import {theme} from "@utils/theme/theme";
import Chip from "@components/data-display/Chip";
import BagGrayIcon from "@images/BagGrayIcon.svg";
import LinkComponent from "@components/data-display/Link";
import GotoGrayIcon from "@images/GotoGrayIcon.svg";
import EmployeeCardField from "@components/complex/EmployeeCardField";
// @barrelblur: GridBox ← такое название правильное
import Gridbox from "@components/surfaces/Gridbox";
import Expand from "@components/surfaces/Expand";

// @barrelblur: убрать доллары в начале названия атрибутов
const EmployeeCard = () => {
  return (
    <Flexbox $gap="20px" $direction="column" $align="flex-start">

      <Flexbox $gap="16px" $align="center">
        <Image src={AvatarBurmakinBig} $width="80px" $height="80px" />
        <Flexbox $gap="4px" $direction="column">
          <Typography $variant="h3">Бурмакин Евгений Дмитриевич</Typography>
          <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Старший дизайнер, 3 грейд</Typography>
          <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Екатеринбург, 09:40 (+2 МСК)</Typography>
        </Flexbox>
      </Flexbox>

      <Chip $background={theme.colors.surfacePrimary} $gap="4px" $padding="4px 12px 4px 10px" $borderRadius="4px">
        <Image src={BagGrayIcon} $width="24px" $height="24px" />
        <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Будет в командировке с 12.10.2023 по 16.10.2023</Typography>
      </Chip>

      <Flexbox $direction="column" $width="100%">

        {/*Профиль*/}
        <EmployeeCardField>
          <Flexbox $gap="12px" $align="center" $justify="space-between" $padding="12px" $width="100%">
            <Typography $variant="h4" $flex="1 0 auto">Профиль</Typography>
            <Chip $background={theme.colors.complimentaryGreenFaintSecondary} $padding="2px 10px" $borderRadius="4px">
              <Typography $variant="body-regular" $color={theme.colors.textIconAccentSuccess}>Актуален</Typography>
            </Chip>
            <LinkComponent href="/" target="_blank">
              <Image src={GotoGrayIcon} $width="20px" $height="20px" />
            </LinkComponent>
          </Flexbox>
        </EmployeeCardField>

        {/*TS за отчетную неделю*/}
        <EmployeeCardField>
          <Flexbox $gap="12px" $align="center" $justify="space-between" $padding="12px" $width="100%">
            <Typography $variant="h4" $flex="1 0 auto">TS за отчетную неделю</Typography>
            <Chip $background={theme.colors.complimentaryGreenFaintSecondary} $padding="2px 10px" $borderRadius="4px">
              <Typography $variant="body-regular" $color={theme.colors.textIconAccentSuccess}>Утвержден</Typography>
            </Chip>
            <LinkComponent href="/" target="_blank">
              <Image src={GotoGrayIcon} $width="20px" $height="20px" />
            </LinkComponent>
          </Flexbox>
        </EmployeeCardField>

        {/*Контакты*/}
        <EmployeeCardField>
          <Flexbox $direction="column" $width="100%">
            <Flexbox $align="center" $justify="space-between" $padding="12px">
              <Typography $variant="h4" $flex="1 0 auto">Контакты</Typography>
            </Flexbox>
            <Flexbox $direction="column" $gap="12px" $padding="8px 12px 12px">
              <Gridbox $gridTemplateColumns="200px auto" $rowGap="12px" $columnGap="16px">
                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Почта</Typography>
                <LinkComponent href="mailto:kkonstantinopolskiy@yandexmail.com">
                  <Typography $variant="body-regular" $color={theme.colors.accentBrandNormal}>kkonstantinopolskiy@yandexmail.com</Typography>
                </LinkComponent>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Рабочий телефон</Typography>
                <LinkComponent href="tel:+74959678080">
                  <Typography $variant="body-regular" $color={theme.colors.textIconBasePrimary}>+7 (495) 967-80-80</Typography>
                </LinkComponent>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Мобильный телефон</Typography>
                <LinkComponent href="tel:+79151234567">
                  <Typography $variant="body-regular" $color={theme.colors.textIconBasePrimary}>+7 (915) 123-45-67</Typography>
                </LinkComponent>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Внутренний телефон</Typography>
                <Typography $variant="body-regular">3488</Typography>
              </Gridbox>
            </Flexbox>
          </Flexbox>
        </EmployeeCardField>

        {/*Общая информация*/}
        <EmployeeCardField>
          <Expand title="Общая информация" $width="100%" $isOpen={true}>
            <Flexbox $direction="column" $gap="12px" $padding="8px 12px 12px">
              <Gridbox $gridTemplateColumns="200px auto" $rowGap="12px" $columnGap="16px">
                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Специализация</Typography>
                <Typography $variant="body-regular">Тестировщик</Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Направление</Typography>
                <Typography $variant="body-regular">Автоматизированное тестирование</Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Технология</Typography>
                <Typography $variant="body-regular">Технология тестирования 1</Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Стаж работы (IBS)</Typography>
                <Typography $variant="body-regular">5 лет</Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Общий стаж по трудовой</Typography>
                <Typography $variant="body-regular">9 лет</Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Место в структуре компании</Typography>
                <Typography $variant="body-regular">Автоматизированное тестирование</Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Юридическое лицо</Typography>
                <Typography $variant="body-regular">ООО «ИБС Санкт-Петербург»</Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Кластер</Typography>
                <Typography $variant="body-regular">Северо-запад</Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Код МВЗ</Typography>
                <Typography $variant="body-regular">W16</Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Региональный центр</Typography>
                <Typography $variant="body-regular">Санкт-Петербург</Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Гражданство</Typography>
                <Typography $variant="body-regular">Россия</Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Совместительство в ГК ИБС</Typography>
                <Typography $variant="body-regular">Наименование юр.лица, Наименование юр.лица 2, Наименование юр.лица3, Наименование юр.лица 4, Наименование юр.лица3 </Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Руководитель</Typography>
                <Typography $variant="body-regular">
                  <LinkComponent href="/">Александрова М. В.</LinkComponent>
                </Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>HR</Typography>
                <Typography $variant="body-regular">
                  <LinkComponent href="/">Коновалова М. В.</LinkComponent>
                </Typography>
              </Gridbox>
            </Flexbox>
          </Expand>
        </EmployeeCardField>

      </Flexbox>

    </Flexbox>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default EmployeeCard;
