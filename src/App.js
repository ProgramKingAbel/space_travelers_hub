import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import {
  DragonsPage, MissionsPage, MyProfilePage, RocketsPage,
} from './Pages';
import './styles/App.module.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<RocketsPage />} />
      <Route path="Dragons" element={<DragonsPage />} />
      <Route path="Missions" element={<MissionsPage />} />
      <Route path="Profile" element={<MyProfilePage />} />
    </Route>
  </Routes>
);

export default App;
