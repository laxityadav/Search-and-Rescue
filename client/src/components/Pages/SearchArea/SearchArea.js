import React from 'react';
import './SearchArea.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import SearchMap from '../../layout/SearchMap/SearchMap';
import AreaTypeSelector from '../../layout/AreaTypeSelector/AreaTypeSelector';
import { getSearchArea } from '../../../actions/area.js';
const mapStateToProps = (state) => {
  return {
    areaData: state.searchAreaReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchArea: () => dispatch(getSearchArea()),
  };
};

// main component

const SearchArea = (props) => {
  return (
    <div className='search-area-main'>
      <div className='top'>
        <AreaTypeSelector></AreaTypeSelector>
      </div>
      <div className='middle'>
        {/* pass down the area's data and geojson as prop */}

        <SearchMap />
      </div>

      {/* show additional information on right side of the page */}
      <div className='side'>
        <TableContainer component={Paper} className='table'>
          <Table aria-label='simple table' size='small'>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2} align='center'>
                  <p style={{ fontSize: '1rem' }}>
                    Current Search Area Information
                  </p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(
                props.areaData.geojson.features[0].properties
              ).map((row, index) => (
                <TableRow key={index} hover={true} className='tablerow'>
                  <TableCell component='th' scope='row'>
                    {row[0]}
                  </TableCell>
                  <TableCell
                    component='th'
                    scopr='row'
                    style={{ color: 'purple' }}
                  >
                    {row[1]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className='button-container'>
          <Button
            variant='contained'
            color='primary'
            size='small'
            onClick={() => {
              props.getSearchArea();
            }}
          >
            Find Area
          </Button>
          <Button variant='contained' color='secondary' size='small'>
            Proceed to Pattern
          </Button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchArea);
