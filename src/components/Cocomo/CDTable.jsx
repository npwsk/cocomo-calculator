import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import costDrivers from '../../constants/costDrivers';
import { ratings } from '../../constants';
import { cdRatings } from '../../constants/ratings';
import { useTranslation } from 'react-i18next';
import {Field} from 'formik';

const CDTable = ({
  costDrivers
}) => {
  const { t } = useTranslation();

  Object.keys(costDrivers).map((cd) => (
    <Field
      key={cd}
      name={cd}
      id={cd}
      label={t(`cost-drivers.${cd}`)}
      options={cdRatings}
      component={FormikRadioGroup}
      row
    />));

  const cdList = Object.keys(costDrivers);

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          {cdRatings
            .map((r) => t(`ratings.${r}`))
            .map((r) => <TableCell key={r} align="center">{r}</TableCell>)}
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map((row) => (
          <Field component={
            <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              <Radio
                value={row.id}
                defaultSelected={false}
                checked={row.id != this.state.paymentSourceId ? false : true}
                onChange={this.handleChange.bind(this, 'paymentSourceId')}
              />
            </TableCell>
            <TableCell align="center">{row.brand}</TableCell>
            <TableCell align="center">{row.name}</TableCell>
            <TableCell align="center">{row.last4}</TableCell>
            <TableCell align="center">
              {row.exp_month}/{row.exp_year}
            </TableCell>
            <TableCell align="center">
              <IconButton
                aria-label="delete"
                color="primary"
                onClick={() => this.handleDelete(this.state.paymentSourceId)}
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
          } />

        ))}
      </TableBody>
    </Table>
  );
};

export default CDTable;
