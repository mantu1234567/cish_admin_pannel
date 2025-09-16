
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiService } from '../services/apiService';

export const useApiManager = () => {
  const queryClient = useQueryClient();

  // const fetchItems = (params) =>
  //   useQuery(['items', params], () => apiService.getItems(params), {
  //     staleTime: 5 * 60 * 1000,
  //     refetchOnWindowFocus: false,
  //     retry: 2,
  //   });

   const createVarietiesItem = useMutation({
    mutationFn: apiService.createVarietiesItem,
    onSuccess: () => queryClient.invalidateQueries('items'),
    onError: (error) => console.error('Create failed:', error),
  });
  

  return {
    // fetchItems,
    createVarietiesItem,
  };
};
