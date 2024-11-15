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
    <Flexbox gap="20px" $direction="column" $align="flex-start">

      <Flexbox gap="16px" $align="center">
        <Image src={AvatarBurmakinBig} $width="80px" $height="80px" />
        <Flexbox gap="4px" $direction="column">
          <Typography $variant="h3">Бурмакин Евгений Дмитриевич</Typography>
          <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Старший дизайнер, 3 грейд</Typography>
          <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Екатеринбург, 09:40 (+2 МСК)</Typography>
        </Flexbox>
      </Flexbox>

      <Chip $background={theme.colors.surfacePrimary} gap="4px" $padding="4px 12px 4px 10px" $borderRadius="4px">
        <Image src={BagGrayIcon} $width="24px" $height="24px" />
        <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Будет в командировке с 12.10.2023 по 16.10.2023</Typography>
      </Chip>

      <Flexbox $direction="column" $width="100%">

        {/*Профиль*/}
        <EmployeeCardField>
          <Flexbox gap="12px" $align="center" $justify="space-between" $padding="12px" $width="100%">
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
          <Flexbox gap="12px" $align="center" $justify="space-between" $padding="12px" $width="100%">
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
            <Flexbox $direction="column" gap="12px" $padding="8px 12px 12px">
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
          <Expand title="Общая информация" $width="100%" $isOpen={true} $paddingHead="12px" $paddingBody="8px 12px 12px">
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
                <LinkComponent href="/" $color={theme.colors.accentBrandNormal}>Александрова М. В.</LinkComponent>
              </Typography>

              <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>HR</Typography>
              <Typography $variant="body-regular">
                <LinkComponent href="/" $color={theme.colors.accentBrandNormal}>Коновалова М. В.</LinkComponent>
              </Typography>
            </Gridbox>
          </Expand>
        </EmployeeCardField>

        {/*Проектная занятость*/}
        <EmployeeCardField>
          <Expand title="Проектная занятость" $width="100%" $isOpen={true} $paddingHead="12px" $paddingBody="8px 12px 12px">
            <Gridbox $gridTemplateColumns="200px auto" $rowGap="12px" $columnGap="16px">
              <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>50%</Typography>
              <Flexbox $direction="column" gap="4px">
                <Typography $variant="body-regular">
                  <LinkComponent href="/" $color={theme.colors.accentBrandNormal}>Сбербанк - Новое приложение</LinkComponent>
                </Typography>
                <Typography $variant="caption-regular" $color={theme.colors.textIconBaseTertiary}>
                  CRP23 • SB4325 • Этап 1 - Технический • 10.10.2022 - 08.02.2023
                </Typography>
              </Flexbox>
              <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>50%</Typography>
              <Flexbox $direction="column" gap="4px">
                <Typography $variant="body-regular">
                  <LinkComponent href="/" $color={theme.colors.accentBrandNormal}>Сбербанк - Новое приложение</LinkComponent>
                </Typography>
                <Typography $variant="caption-regular" $color={theme.colors.textIconBaseTertiary}>
                  CRP23 • SB4325 • Этап 1 - Технический • 10.10.2022 - 08.02.2023
                </Typography>
              </Flexbox>
            </Gridbox>
          </Expand>
        </EmployeeCardField>

        {/*Ближайшее мероприятие*/}
        <EmployeeCardField>
          <Flexbox $direction="column" $width="100%">
            <Flexbox gap="12px" $align="center" $justify="space-between" $padding="12px" $width="100%">
              <Typography $variant="h4" $flex="1 0 auto">Ближайшее мероприятие</Typography>
              <LinkComponent href="/" target="_blank">
                <Image src={GotoGrayIcon} $width="20px" $height="20px" />
              </LinkComponent>
            </Flexbox>

            <Flexbox $direction="column" gap="12px" $padding="8px 12px 12px">
              <Gridbox $gridTemplateColumns="200px auto" $rowGap="12px" $columnGap="16px">
                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Тип мероприятия</Typography>
                <Typography $variant="body-regular">Установочная аттестация</Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Период проведения</Typography>
                <Typography $variant="body-regular">Окт. 24 - Нояб. 24</Typography>
              </Gridbox>
            </Flexbox>
          </Flexbox>
        </EmployeeCardField>

        {/*Адаптация*/}
        <EmployeeCardField>
          <Flexbox $direction="column" $width="100%">
            <Flexbox gap="12px" $align="center" $justify="space-between" $padding="12px" $width="100%">
              <Typography $variant="h4" $flex="1 0 auto">Адаптация</Typography>
              <Chip $background={theme.colors.systemErrorFaintSecondary} $padding="2px 10px" $borderRadius="4px">
                <Typography $variant="body-regular" $color={theme.colors.textIconAccentError}>В зоне риска</Typography>
              </Chip>
              <LinkComponent href="/" target="_blank">
                <Image src={GotoGrayIcon} $width="20px" $height="20px" />
              </LinkComponent>
            </Flexbox>

            <Flexbox $direction="column" gap="12px" $padding="8px 12px 12px">
              <Gridbox $gridTemplateColumns="200px auto" $rowGap="12px" $columnGap="16px">
                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Дата окончания ИС</Typography>
                <Typography $variant="body-regular">02.03.24</Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Прогресс плана</Typography>
                <Typography $variant="body-regular">90%</Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Наставник</Typography>
                <Typography $variant="body-regular">Семенова М. В.</Typography>

                <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Дата ближ. задачи</Typography>
                <Typography $variant="body-regular">01.03.24</Typography>
              </Gridbox>
            </Flexbox>
          </Flexbox>
        </EmployeeCardField>

        {/*Обучение*/}
        <EmployeeCardField>
          <Expand
            title="Обучение"
            $width="100%"
            $isOpen={true}
            $externalLink="/"
            $paddingHead="12px"
            $paddingBody="8px 12px 12px"
            $chip={{title: "2 курса просрочено", color: theme.colors.textIconAccentError, bgColor: theme.colors.systemErrorFaintSecondary}}
          >
            <Gridbox $gridTemplateColumns="200px auto" $rowGap="12px" $columnGap="16px">
              <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Просроченные курсы</Typography>
              <Flexbox $direction="column" gap="8px">
                <Flexbox $direction="column" gap="4px">
                  <Typography $variant="body-regular">Fundamentals of graphic design</Typography>
                  <Typography $variant="caption-regular" $color={theme.colors.textIconAccentError}>До 05.01.24</Typography>
                </Flexbox>
                <Flexbox $direction="column" gap="4px">
                  <Typography $variant="body-regular">Fundamentals of graphic design</Typography>
                  <Typography $variant="caption-regular" $color={theme.colors.textIconAccentError}>До 05.01.24</Typography>
                </Flexbox>
              </Flexbox>

              <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>В процессе</Typography>
              <Flexbox $direction="column" gap="4px">
                <Typography $variant="body-regular">Fundamentals of graphic design</Typography>
                <Typography $variant="caption-regular" $color={theme.colors.textIconBaseTertiary}>До 05.01.24</Typography>
              </Flexbox>

              <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Ближайшие обучения</Typography>
              <Flexbox $direction="column" gap="4px">
                <Typography $variant="body-regular">Fundamentals of graphic design</Typography>
                <Typography $variant="caption-regular" $color={theme.colors.textIconBaseTertiary}>До 05.01.24</Typography>
              </Flexbox>
            </Gridbox>
          </Expand>
        </EmployeeCardField>

        {/*Оборудование*/}
        <EmployeeCardField>
          <Expand
            title="Оборудование"
            $width="100%"
            $isOpen={true}
            $externalLink="/"
            $paddingHead="12px"
            $paddingBody="8px 12px 12px"
            $chip={{title: "2", color: theme.colors.onSurfaceSecondary, bgColor: theme.colors.onSurfaceFaintTertiary}}
          >
            <Gridbox $gridTemplateColumns="200px auto" $rowGap="12px" $columnGap="16px">
              <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Ноутбук</Typography>
              <Flexbox $direction="column" gap="4px">
                <Typography $variant="body-regular">Huawei MateView GT 14.2</Typography>
                <Typography $variant="caption-regular" $color={theme.colors.textIconBaseTertiary}>Выдан 05.01.24</Typography>
              </Flexbox>

              <Typography $variant="body-regular" $color={theme.colors.textIconBaseTertiary}>Телефон</Typography>
              <Flexbox $direction="column" gap="4px">
                <Typography $variant="body-regular">Samsung Galaxy A35 5G 8/128GB</Typography>
                <Typography $variant="caption-regular" $color={theme.colors.textIconBaseTertiary}>Выдан 05.01.24</Typography>
              </Flexbox>
            </Gridbox>
          </Expand>
        </EmployeeCardField>

        {/*Расчетный лист*/}
        <EmployeeCardField>
          <Flexbox gap="12px" $align="center" $justify="space-between" $padding="12px" $width="100%">
            <Typography $variant="h4" $flex="1 0 auto">Расчетный лист</Typography>
            <LinkComponent href="/" target="_blank">
              <Image src={GotoGrayIcon} $width="20px" $height="20px" />
            </LinkComponent>
          </Flexbox>
        </EmployeeCardField>

      </Flexbox>

    </Flexbox>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default EmployeeCard;
