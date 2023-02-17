import { Header } from "./Header";
import { StatisticLine } from "./StatisticLine";

export const Statistics = ({
  good,
  bad,
  neutral,
  goodTitle,
  neutralTitle,
  badTitle,
}) => {
  return (
    <section>
      <Header title={"Statistics"} />
      <ul>
        <StatisticLine text={goodTitle} value={good} />
        <StatisticLine text={neutralTitle} value={neutral} />
        <StatisticLine text={badTitle} value={bad} />
        <StatisticLine text='all' value={good + bad + neutral} />
        <StatisticLine text='average' value={(good - bad) / (good + bad + neutral)} />
        <StatisticLine text='positive' value={(good / ((good + bad + neutral) / 100) + '%')} />
      </ul>
    </section>
  );
};
