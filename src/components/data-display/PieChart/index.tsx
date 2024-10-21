import {PieChart, Pie, Cell, Label} from "recharts";
import {ICustomLabelProps, IProps, IStyledCircle} from "@components/data-display/PieChart/props";
import Flexbox from "@components/surfaces/Flexbox";
import Typography from "@components/data-display/Typography";
import styled from "styled-components";
import {theme} from "@utils/theme/theme";
import Chip from "@components/data-display/Chip";

function CustomLabel({viewBox, centerCount, centerText}: ICustomLabelProps) {
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
          fontWeight={700}>{centerCount}</tspan>
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

const PieChartComponent = (
  {
    $data,
    $width = 100,
    $height = 100,
    $innerRadius = 35,
    $outerRadius = 50,
    $isCenterText = true,
    $isRightInfo = true,
    $isWrapper = true,
  }: IProps
) => {
  const {title, percent, total, variants, centerCount, centerText} = $data;

  return (
    <Flexbox
      $direction="column"
      $borderRadius={$isWrapper ? "6px" : undefined}
      $border={$isWrapper ? `1px solid ${theme.colors.surfacePrimary}` : undefined}>
      {$isWrapper &&
        <Flexbox
          $padding="16px"
          $gap="12px"
          $align="center"
          $justify="space-between"
          $border={`1px solid ${theme.colors.surfacePrimary}`}
          $borderWidth="0 0 1px 0">
          <Typography
            $variant="body-semibold"
            $color={theme.colors.textIconBaseSecondary}>{title}</Typography>
          <Flexbox
            $gap="12px"
            $align="center">
            <Chip
              $padding="2px 6px 2px 4px"
              $background={percent > 0 ? theme.colors.complimentaryGreenFaintSecondary : theme.colors.systemErrorFaintSecondary}
              $borderRadius="4px">
              <Typography
                $variant="chip-m"
                $color={percent > 0 ? theme.colors.textIconAccentSuccess : theme.colors.textIconAccentError}
              >{percent}%</Typography>
            </Chip>
            <Typography
              $variant="h2"
              $color={percent > 0 ? theme.colors.textIconAccentSuccess : theme.colors.systemWarningDarkened}>{total}</Typography>
          </Flexbox>
        </Flexbox>
      }

      <Flexbox
        $gap="16px"
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
                    centerText={centerText}/>
                }></Label>
            }
          </Pie>
        </PieChart>

        {$isRightInfo &&
          <StyledRightInfo>
            {variants.map((item, index) => (
              <Flexbox
                key={`cell-${index}`}
                $gap="4px"
                $align="center">
                <StyledCircle color={item.color}/>
                <Typography
                  $variant="caption-regular"
                  $color={theme.colors.textIconBaseSecondary}>{item.name}</Typography>
                <StyledDottedLine/>
                <Typography $variant="body-semibold">{item.value}</Typography>
              </Flexbox>
            ))}
          </StyledRightInfo>
        }
      </Flexbox>
    </Flexbox>
  );
}

export default PieChartComponent;
