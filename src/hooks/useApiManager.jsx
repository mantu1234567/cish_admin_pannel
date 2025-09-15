// src/hooks/useApiManager.js
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { apiService } from '../services/apiService';

export const useApiManager = () => {
  const queryClient = useQueryClient();

  const fetchItems = (params) =>
    useQuery(['items', params], () => apiService.getItems(params), {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 2,
    });

  const createItem = () =>
    useMutation(apiService.createItem, {
      onSuccess: () => queryClient.invalidateQueries('items'),
      onError: (error) => console.error('Create failed:', error),
    });

  const updateItem = () =>
    useMutation(({ id, data }) => apiService.updateItem(id, data), {
      onSuccess: () => queryClient.invalidateQueries('items'),
      onError: (error) => console.error('Update failed:', error),
    });

  const deleteItem = () =>
    useMutation((id) => apiService.deleteItem(id), {
      onSuccess: () => queryClient.invalidateQueries('items'),
      onError: (error) => console.error('Delete failed:', error),
    });

  return {
    fetchItems,
    createItem,
    updateItem,
    deleteItem,
  };
};
