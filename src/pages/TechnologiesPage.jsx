
import TechnologiesForm from '../components/TechnologiesForm';
import { VarietiesProvider } from '../context/ApiContext';
const TechnologiesPage = () => (
  <VarietiesProvider>
    <div className="min-h-screen bg-gray-100">
      <TechnologiesForm />
    </div>
  </VarietiesProvider>
);

export default TechnologiesPage;
