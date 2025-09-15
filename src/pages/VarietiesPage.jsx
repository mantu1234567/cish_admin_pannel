import VariatiesForm from '../components/VariatiesForm';
import { VarietiesProvider } from '../context/VarietiesContext';

const VarietiesPage = () => (
  <VarietiesProvider>
    <div className="min-h-screen bg-gray-100">
      <VariatiesForm />
    </div>
  </VarietiesProvider>
);

export default VarietiesPage;
