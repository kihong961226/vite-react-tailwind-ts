import { useCountStore } from 'src/stores';

const Counter = () => {
  const { count, increment } = useCountStore();
  return (
    <div>
      <p>CurrentCount: {count}</p>
      <button onClick={increment} className='rounded bg-[#ffe093] px-2'>
        Increment
      </button>
    </div>
  );
};

export default Counter;
