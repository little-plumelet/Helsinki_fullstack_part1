import { useState } from 'react';
import { Button } from './Button';
import { Header } from './Header';

export const UniCafePage = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodTitle = 'good';
  const neutralTitle = 'neutral';
  const badTitle = 'bad';

  return (
    <section>
        <Header title={'Give feedback'} />
        <Button title={goodTitle} handleClick={() => setGood((prevState) => prevState + 1)}/>
        <Button title={neutralTitle} handleClick={() => setNeutral((prevState) => prevState + 1)}/>
        <Button title={badTitle} handleClick={() => setBad((prevState) => prevState + 1)}/>
        <section>
          <Header title={'Statistics'} />
          <ul>
            <li>{`${goodTitle}: ${good}`}</li>
            <li>{`${neutralTitle}: ${neutral}`}</li>
            <li>{`${badTitle}: ${bad}`}</li>
            <li>{`all: ${(good + bad + neutral)}`}</li>
            <li>{`average: ${(good - bad) / (good + bad + neutral) }`}</li>
            <li>{`positive: ${good / ((good + bad + neutral) / 100) }%`}</li>
          </ul>
        </section>
      </section>
  )
}