import CreateForm from '@/components/CreateForm';
import ReportTable from '@/components/ReportTable';
import { useState } from 'react';
import { locations } from '@/components/CreateForm'

export default function Main({ locations }) {
  const [cookieStands, setCookieStands] = useState([]);

  const handleLocationCreate = (newLocation) => {
    setCookieStands([...cookieStands, newLocation]);
  };

  return (

    <div className="main">
      <CreateForm onLocationCreate={handleLocationCreate} />
      {cookieStands.length > 0 ? (
        <ReportTable cookieStands={cookieStands} />
      ) : (
        <p>No Cookie Stands Available</p>
      )}
    </div>

  );
}