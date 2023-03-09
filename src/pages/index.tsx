import { BriefcaseIcon, DribbleIcon } from 'src/components/icons';
import { Counter } from 'src/components/ui';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      {/* svg example 1 */}
      <img src='/assets/icons/clock.svg' width={24} height={24} alt='clock' />
      {/* svg example 2 */}
      <BriefcaseIcon />
      {/* svg example 3 */}
      <DribbleIcon />
      {/* Global State(zustand) example */}
      <Counter />
    </div>
  );
};

export default Home;
