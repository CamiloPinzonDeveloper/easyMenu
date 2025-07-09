'use client';

import ProfileForm from '../ProfileForm/ProfileForm';
import CreateRestaurantWizard from '../CreateRestaurantWizard/CreateRestaurantWizard';
import styles from './TabLayOut.module.scss';

import { Plus } from 'lucide-react';

interface ITabLayOutProps {
  customActiveTab: number;
  setCustomActiveTab: (index: number) => void;
}

const tabs = [<>Perfil</>, <>{<Plus />} Comercio</>, <>Tutoriales</>];

const TabLayOut = ({ customActiveTab, setCustomActiveTab }: ITabLayOutProps) => {
  const handleTabChange = (index: number) => {
    setCustomActiveTab(index);
  };

  return (
    <div className={styles.tabLayout}>
      <aside className={styles.sidebar}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={customActiveTab === idx ? styles.active : ''}
            onClick={() => handleTabChange(idx)}
          >
            {tab}
          </button>
        ))}
      </aside>
      <main className={styles.tabContent}>
        {customActiveTab === 0 && <ProfileForm />}
        {customActiveTab === 1 && (
          <div>
            <CreateRestaurantWizard />
          </div>
        )}
        {customActiveTab === 2 && <div>Settings Tutoriales</div>}
      </main>
    </div>
  );
};

export default TabLayOut;
