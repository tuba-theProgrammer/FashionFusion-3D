import React from 'react';
import { useSnapshot } from 'valtio';
import state from '@/_config/store';

// Define types for the props
interface TabProps {
  tab: {
    name: string;
    icon: string;
  };
  isFilterTab: boolean;
  isActiveTab: string;
  handleClick: () => void;
}

const Tab: React.FC<TabProps> = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
 

  return (
    <div
    >
       tab
    </div>
  );
};

export default Tab;
