import { CounterButton, CounterWrap } from './Counter.styled';

export const Counter = ({ count, handleDecrement, handleIncrement }) => {
  return (
    <CounterWrap>
      <CounterButton
        type="button"
        onClick={handleDecrement}
        disabled={count === 0}
      >
        -
      </CounterButton>
      <span>{count}</span>
      <CounterButton type="button" onClick={handleIncrement}>
        +
      </CounterButton>
    </CounterWrap>
  );
};
