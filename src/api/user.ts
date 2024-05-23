import { QUERY_PATHS } from "@src/utils";
import { ApiReq } from "./init";

export async function getMe(): Promise<any> {
  const { data } = await ApiReq.get(QUERY_PATHS.USER);
  return data || {};
}
