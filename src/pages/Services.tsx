import Process from '../components/Process';
import Packages from '../components/Packages';
import ComparisonTable from '../components/ComparisonTable';
import AddOns from '../components/AddOns';

export default function Services() {
  return (
    <div className="pt-28">
      <Process />
      <Packages />
      <ComparisonTable />
      <AddOns />
    </div>
  );
}
