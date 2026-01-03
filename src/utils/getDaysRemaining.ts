import dayjs from "dayjs";


const getDaysRemaining = (deadline: string): number => {
  return dayjs(deadline).startOf("day").diff(dayjs().startOf("day"), "day");
};

export default getDaysRemaining;