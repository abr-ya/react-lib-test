export interface IDecodedToken {
  authorities: string[];
  blocked?: boolean;
  client_id?: string | number;
  current_department?: number;
  exp?: number;
  full_name?: string;
  jti?: string;
  scope?: string[];
  timezone?: string;
  user_id?: number;
  user_name?: string;
}
