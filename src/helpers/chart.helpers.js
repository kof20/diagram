import { BORDER_COLOR, HOVER_BORDER_COLOR, BORDER_WIDTH } from "../constants/chart.constants";

export const getUsersCountByGender = (users, gender) => {
  return users.filter(u => u.gender === gender).length;
};

export const getUsersCountByTimezone = (users, timezone) => {
  return users.filter(u => u.timezone === timezone).length;
};

export const generateColor = () => {
  return `hsl(${360 * Math.random()},${25 + 70 * Math.random()}%,${85 + 10 * Math.random()}%)`;
};

export const generateDoughnutChartData = (labels, data) => {
  return {
    labels,
    datasets: [
      {
        label: "# of Votes",
        data,
        backgroundColor: labels.map(() => generateColor()),
        borderColor: BORDER_COLOR,
        hoverBorderColor: HOVER_BORDER_COLOR,
        borderWidth: BORDER_WIDTH,
      },
    ],
  };
};
