import React from 'react';
import Tasks from './Tasks';

import CustomNav from './customNav';

export default () => (
      <div className="overlay">
          <CustomNav />
          <Tasks />
      </div>

);
