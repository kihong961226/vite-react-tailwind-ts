import type { FC } from 'react';
import { Counter } from 'src/components/ui';

export const Component: FC = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Counter />
    </div>
  );
};

Component.displayName = 'About';
