import axios from "axios";
import { toast } from "react-toastify";

export default function useSendenquery(data, setLoading) {

  const sendenquery = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3001/api/v1/sendnquery", // ✅ correct route
        data
      );

      if (response?.data?.success) {
        toast.success(response.data.message || "Enquiry sent successfully!");
        return true; // ✅ tell component success
      }

      toast.error("Failed to send enquiry");
      return false;

    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!"
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  return sendenquery;
}