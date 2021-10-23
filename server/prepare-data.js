const csv = require('csvtojson');
const util = require('util');
var fs = require('fs');

// const jwtDecode = require('jwt-decode');
// const moment = require('moment')
// const arrangement1 = require('./calc_input/result.csv');

const aircraftStandsTransform = (stand) => {
  // [{"1":"25","2":"15","3":"5","4":"25","5":"10","Aircraft_Stand":"1","JetBridge_on_Arrival":"N","JetBridge_on_Departure":"N","Terminal":"","Taxiing_Time":"5"},
  let result = {};
  result['id'] = stand['Aircraft_Stand'];
  result['timeToTerminal1'] = stand[1];
  result['timeToTerminal2'] = stand[2];
  result['timeToTerminal3'] = stand[3];
  result['timeToTerminal4'] = stand[4];
  result['timeToTerminal5'] = stand[5];
  result['jetbridgeType'] = stand['JetBridge_on_Arrival'];
  result['taxiingTime'] = stand['Taxiing_Time'];
  result['terminalId'] = stand['Terminal'];
  return result;
};

const timetableTransform = (timetable) => {
  // [{"1":"25","2":"15","3":"5","4":"25","5":"10","Aircraft_Stand":"1","JetBridge_on_Arrival":"N","JetBridge_on_Departure":"N","Terminal":"","Taxiing_Time":"5"},
  let result = {};
  result['id'] = timetable['id'] + 1;
  result['isArrival'] = timetable['flight_AD'] === 'A';
  result['time'] = timetable['flight_datetime'];
  result['airline'] = timetable['flight_AL_Synchron_code'];
  result['synchronCode'] = timetable['flight_AC_Synchron_code'];
  result['flightType'] = timetable['flight_ID'];
  result['terminalId'] = timetable['flight_terminal'];
  result['airport'] = timetable['flight_AP'];
  result['pax'] = timetable['flight_PAX'];
  result['paxCapTotal'] = timetable['flight_AC_PAX_capacity_total'];
  // result['standId'] = timetable['Aircraft_Stand'];
  result['standId'] = timetable['Aircraft_Stand'];
  result['start'] = timetable['flight_datetime_start'];
  result['end'] = timetable['flight_datetime_finish'];
  // result['standId'] = timetable['Aircraft_Stand'];

  return result;
};

const tasks = [
  { model: 'aircraft-classes', path: './server/case_svo/AirCraftClasses_private.csv' },
  { model: 'handling-rates', path: './server/case_svo/Handling_Rates_private.csv' },
  { model: 'handling-times', path: './server/case_svo/Handling_Time_private.csv' },
  { model: 'aircraft-stands', path: './server/case_svo/Aircraft_Stands_private.csv', transform: aircraftStandsTransform },
  { model: 'timetables', path: './server/case_svo/Timetable_private.csv', transform: timetableTransform },
  // { model: 'timetables', path: './server/calc_input/result.csv', transform: timetableTransform },
];

const performTask = async function (task) {
  let json = await csv().fromFile(task.path);
  if (task.transform) {
    json = json.map(task.transform);
  }

  console.log(json.slice(0, 20));
  const saveJson = JSON.stringify(json);
  fs.writeFileSync(`./public/data/${task.model}.json`, saveJson);
};

tasks.forEach(performTask);
