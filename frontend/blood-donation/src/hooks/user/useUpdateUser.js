import { useMutation } from "@tanstack/react-query";

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: async ({ id, payload }) => {
      await sleep();
      return await quanLyUserServices.editNguoiDung(id, payload);
    },
  });
};
