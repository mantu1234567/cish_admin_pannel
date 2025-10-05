
import VKSAForm from '../components/VKSAForm';
import { VarietiesProvider } from '../context/ApiContext';
const VKSAPage = () => (
  <VarietiesProvider>
    <div className="min-h-screen bg-gray-100">
      <VKSAForm />
    </div>
  </VarietiesProvider>
);

export default VKSAPage;
