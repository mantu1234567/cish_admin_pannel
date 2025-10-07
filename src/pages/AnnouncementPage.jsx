import AnnouncementForm from "../components/AnnouncementForm";
import { VarietiesProvider } from "../context/ApiContext";

export default function AnnouncementPage() {
  return  (
    <VarietiesProvider>
    <div className="min-h-screen bg-gray-100">
      <AnnouncementForm />
    </div>
  </VarietiesProvider>
  );
}