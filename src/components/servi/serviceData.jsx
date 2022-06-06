import Card from './serviceCard';

import { useEffect, useState } from 'react';

export default function ServicesCardList({ serviceCards }) {
  const [data, setData] = useState([]);

  async function getServices() {
    const resp = await fetch('services.json');
    const datainJs = await resp.json();
    setData(datainJs);
  }
  useEffect(() => {
    getServices();
  }, []);

  return (
    <section className={serviceCards}>
      {data.map((ob) => {
        return <Card key={ob.id} title={ob.title} summary={ob.summary} icon={ob.icon} />;
      })}
    </section>
  );
}
