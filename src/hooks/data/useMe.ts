import { getMe } from "@src/api/user";
import { QUERY_PATHS } from "@src/utils";
import { useQuery } from "@tanstack/react-query";

export const useMe = () => {
  return useQuery({
    queryKey: [QUERY_PATHS.USER],
    queryFn: () => getMe(),
  });
};
