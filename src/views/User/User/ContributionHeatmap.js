import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import CalendarHeatmap from 'react-calendar-heatmap';
import { useTranslation } from 'react-i18next';

// const useStyles = makeStyles((theme) => ({}));

export default function ContributionHeatmap({
  startDate,
  endDate,
  values,
}) {
  // const classes = useStyles();
  const { t } = useTranslation();

  return (
    <CalendarHeatmap
      startDate={startDate}
      endDate={endDate}
      showWeekdayLabels={true}
      monthLabels={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map((i)=>t(`datetime_month${i}`))}
      weekdayLabels={['0', '1', '2', '3', '4', '5', '6'].map((i)=>t(`datetime_weekday${i}`))}
      values={values}
      classForValue={(value) => {
        if (!value) {
          return 'color-empty';
        }
        let scaleValue;
        if (value.count === 0) {
          scaleValue = 0;
        } else
        if (value.count <= 5) {
          scaleValue = 1;
        } else
        if (value.count <= 10) {
          scaleValue = 2;
        } else
        if (value.count <= 20) {
          scaleValue = 3;
        } else
        if (value.count <= 30) {
          scaleValue = 4;
        } else {
          scaleValue = 5;
        }
        return `color-scale-${scaleValue}`;
      }}
      tooltipDataAttrs={(value) => {
        return {
          'data-tip': `${value.date} has count: ${
            value.count
          }`,
        };
      }}
      onClick={(v)=>console.log(v)}
    />
  );
}


ContributionHeatmap.propTypes = {
  values: PropTypes.array.isRequired,
  startDate: PropTypes.any.isRequired,
  endDate: PropTypes.any.isRequired,
};
