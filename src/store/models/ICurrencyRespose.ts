export interface ICurrecy {
  code: string;
  value: number;
}

export interface ICurrecyResponse {
  meta: Record<string, Date>;
  data: Record<string, ICurrecy>;
}
