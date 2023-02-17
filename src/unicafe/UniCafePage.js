import { useState } from 'react';
import { Button } from './Button';
import { Header } from './Header';

export const UniCafePage = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <section>
        <Header title={'Give feedback'} />
        <Button title='good' handleClick={() => setGood((prevState) => prevState + 1)}/>
        <Button title='neutral' handleClick={() => setNeutral((prevState) => prevState + 1)}/>
        <Button title='bad' handleClick={() => setBad((prevState) => prevState + 1)}/>
        <section>
          <Header course={'Statistics'} />
          <ul>
            <li>{`good: ${good}`}</li>
            <li>{`neutral: ${neutral}`}</li>
            <li>{`bad: ${bad}`}</li>
          </ul>
        </section>
      </section>
  )
}