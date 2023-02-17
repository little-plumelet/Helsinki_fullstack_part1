export const StatisticLine = ({text, value}) => {
  console.log(value)
  return (
    <li>{`${text}: ${value}`}</li>
  )
}