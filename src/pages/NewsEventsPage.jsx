
import NewsEventsForm from '../components/NewsEventsForm';
import { VarietiesProvider } from '../context/ApiContext';
const NewsEventsPage = () => (
  <VarietiesProvider>
    <div className="min-h-screen bg-gray-100">
      <NewsEventsForm />
    </div>
  </VarietiesProvider>
);

export default NewsEventsPage;
