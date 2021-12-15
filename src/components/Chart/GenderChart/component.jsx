import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import moment from "moment-timezone";

import { GENDER } from "../../../constants/users.constants";
import {
  getUsersCountByGender,
  getUsersCountByTimezone,
  generateDoughnutChartData,
} from "../../../helpers/chart.helpers";

import { Wrapper, ChartWrapper } from "./styles";

ChartJS.register(ArcElement, Tooltip, Legend);

const component = ({ users }) => {
  const timezones = moment.tz.names();

  const [usedTimezoneLabels] = useState(timezones.filter(tz => users.some(u => u.timezone === tz)));
  const [usedGenderLabels] = useState(
    Object.values(GENDER).filter(g => users.some(u => u.gender === g))
  );

  const gendersData = generateDoughnutChartData(
    usedGenderLabels,
    usedGenderLabels.map(gender => getUsersCountByGender(users, gender))
  );

  const timezonesData = generateDoughnutChartData(
    usedTimezoneLabels,
    usedTimezoneLabels.map(timezone => getUsersCountByTimezone(users, timezone))
  );

  return (
    <Wrapper>
      <ChartWrapper>
        <Doughnut data={gendersData} />
      </ChartWrapper>
      <ChartWrapper>
        <Doughnut data={timezonesData} />
      </ChartWrapper>
    </Wrapper>
  );
};

export default component;
