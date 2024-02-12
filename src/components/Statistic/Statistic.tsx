import React from 'react'
import { styled } from '@mui/material/styles';
import { StatisticProps } from './Statistic.types';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

const beautify = (str: string) => {
  if (Number(str) !== NaN) {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  } else {
    return str
  }
};


const Statistic: React.FC<StatisticProps> = ({
  value,
  label,
  icon,
}) => (
  <Div style={{textAlign: 'center'}}>
    <h1 style={{lineHeight: '0px'}}>{beautify(value)}</h1>
    <h5>{label}</h5>
  </Div>
);

export default Statistic