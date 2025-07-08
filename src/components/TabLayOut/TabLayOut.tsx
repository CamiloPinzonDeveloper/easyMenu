'use client';

import { useState } from 'react';

import ProfileForm from '../ProfileForm/ProfileForm';

import styles from './TabLayOut.module.scss';

const tabs = ['Perfil', '+ Comercio', 'Tutoriales'];

const TabLayOut = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div className={styles.tabLayout}>
      <aside className={styles.sidebar}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={activeTab === idx ? styles.active : ''}
            onClick={() => handleTabClick(idx)}
          >
            {tab}
          </button>
        ))}
      </aside>
      <main className={styles.tabContent}>
        {activeTab === 0 && (
          <div>
            <ProfileForm />
          </div>
        )}
        {activeTab === 1 && <div>Crear Comercio</div>}
        {activeTab === 2 && <div>Settings Tutoriales</div>}
      </main>
    </div>
  );
};

export default TabLayOut;
