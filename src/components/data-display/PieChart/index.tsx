import {PieChart, Pie, Cell, Label} from "recharts";
import {ICustomLabelProps, IProps, IStyledCircle} from "@components/data-display/PieChart/props";
import {Flexbox} from "@components/surfaces/Flexbox";
import {Typography} from "@components/data-display/Typography";
import styled from "styled-components";
import {theme} from "@utils/theme/theme";
import {Chip} from "@components/data-display/Chip";
import {FC} from "react";

// @barrelblur: что это такое? Это должно быть компоннетом
function CustomLabel({viewBox, centerCount, centerText, postfix}: ICustomLabelProps) {
  const {cx, cy} = viewBox;

  return (
    <>
      <text
        x={cx}
        y={cy - 4}
        fill="#363B40"
        textAnchor="middle"
        dominantBaseline="central">
        <tspan
          alignmentBaseline="middle"
          fontSize="12"
          fontWeight={700}>{centerCount}{postfix ? ` ${postfix}` : ''}</tspan>
      </text>
      <text
        x={cx}
        y={cy + 10}
        fill="#363B40"
        textAnchor="middle"
        dominantBaseline="central">
        <tspan
          fontSize="8"
          fontWeight={600}>{centerText}</tspan>
      </text>
    </>
  )
}

const StyledCircle = styled.div<IStyledCircle>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 8px;
  background: ${props => props.color || undefined};
`

const StyledDottedLine = styled.div`
  height: 7px;
  flex: 1 0 auto;
  border-bottom: 1px dashed ${theme.colors.onSurfaceFaintSecondary};
`

const StyledRightInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`

// @barrelblur: в этом компоненте не понятно, какая его единственная ответственность
// @barrelblur: вроде выводится разметка, но аттрибуты будто заменают инлайновые стили
export const PieChartComponent: FC<IProps> = (
  {
    // @barrelblur много лишних атрибутов
    $data,
    $width = 100,
    $height = 100,
    // @barrelblur много лишних атрибутов
    $innerRadius = 35,
    $outerRadius = 50,
    $isCenterText = true,
    $isRightInfo = true,
    $isHeader = true,
  }
) => {
  const {title = "", percent, total, ratio, variants, centerCount, centerText, postfix} = $data;

  return (
    <Flexbox
      $direction="column"
      $borderRadius="6px"
      $border={`1px solid ${theme.colors.surfacePrimary}`}>
      {$isHeader &&
        <Flexbox
          $padding="16px"
          gap="12px"
          $align="center"
          $justify="space-between"
          $border={`1px solid ${theme.colors.surfacePrimary}`}
          $borderWidth="0 0 1px 0">
          <Typography
            $variant="body-semibold"
            $color={theme.colors.textIconBaseSecondary}>{title}</Typography>
          <Flexbox
            gap="12px"
            $align="center">
            {percent &&
              <Chip
                $padding="2px 6px 2px 4px"
                $background={percent > 0 ? theme.colors.complimentaryGreenFaintSecondary : theme.colors.systemErrorFaintSecondary}
                $borderRadius="4px">
                <Typography
                  $variant="chip-m"
                  $color={percent > 0 ? theme.colors.textIconAccentSuccess : theme.colors.textIconAccentError}
                >{percent}%</Typography>
              </Chip>
            }
            {total &&
              <Typography
                $variant="h2"
                $color={percent && percent > 0 ? theme.colors.textIconAccentSuccess : theme.colors.systemWarningDarkened}
              >
                {total}{postfix ? ` ${postfix}` : ''}
              </Typography>
            }
            {ratio &&
              <Typography
                $variant="h2"
                $color={ratio <= 30 ? theme.colors.textIconAccentError : ratio <= 60 ?  theme.colors.systemWarningDarkened :  theme.colors.textIconAccentSuccess}
              >
                {ratio}%
              </Typography>
            }
          </Flexbox>
        </Flexbox>
      }

      <Flexbox
        gap="16px"
        $align="center"
        $width="100%"
        $padding="16px">
        <PieChart
          width={$width!}
          height={$height!}>
          <Pie
            data={variants}
            cx="50%"
            cy="50%"
            innerRadius={$innerRadius}
            outerRadius={$outerRadius}
            paddingAngle={2}
            dataKey="value"
            cornerRadius={2}
          >
            {/*
                @barrelblur
                Здесь грубое нарушение использование index, согласно интерфейсу в элементе нет ID,
                а ты используешь индекс элемента массива, и если какой-то элемент удалиться, то рендер сломается
             */}
            {variants.map((item, index) => (
              <Cell
                key={`cell-${index}`}
                fill={item.color}/>
            ))}
            {$isCenterText &&
              <Label
                width={60}
                position="center"
                content={
                  <CustomLabel
                    viewBox={{cx: $width!, cy: $height!}}
                    centerCount={centerCount}
                    centerText={centerText}
                    postfix={postfix}
                  />
                }></Label>
            }
          </Pie>
        </PieChart>

        {$isRightInfo &&
          <StyledRightInfo>
            {variants.map((item, index) => (
              <Flexbox
                key={`cell-${index}`}
                gap="4px"
                $align="center">
                <StyledCircle color={item.color}/>
                <Typography
                  $variant="caption-regular"
                  $color={theme.colors.textIconBaseSecondary}>{item.name}</Typography>
                <StyledDottedLine/>
                <Typography $variant="body-semibold">{item.value}{postfix ? ` ${postfix}` : ''}</Typography>
              </Flexbox>
            ))}
          </StyledRightInfo>
        }
      </Flexbox>
    </Flexbox>
  );
}
