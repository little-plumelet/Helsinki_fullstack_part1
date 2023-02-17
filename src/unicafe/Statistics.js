import { Header } from "./Header";

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
        <li>{`${goodTitle}: ${good}`}</li>
        <li>{`${neutralTitle}: ${neutral}`}</li>
        <li>{`${badTitle}: ${bad}`}</li>
        <li>{`all: ${good + bad + neutral}`}</li>
        <li>{`average: ${(good - bad) / (good + bad + neutral)}`}</li>
        <li>{`positive: ${good / ((good + bad + neutral) / 100)}%`}</li>
      </ul>
    </section>
  );
};
