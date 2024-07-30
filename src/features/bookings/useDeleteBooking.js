import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking as deleteBookingAPI } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export const useDeleteBooking = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingAPI,
    onSuccess: () => {
      toast.success('Booking was successfully deleted');

      queryClient.invalidateQueries({
        queryKey: ['bookings'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isPending, deleteBooking };
};
