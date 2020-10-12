import {AppConfig} from '../appConfig';

export const ClientTransformOptions = (options: any): RequestInit => {
  options.headers = options.headers ?? {};
  options.headers['Content-Type'] = 'application/json';
  options.headers.Accept = 'application/json';
  return options;
};

export const ClientOptions: ControllerOptions = {
  baseUrl: AppConfig.host,
  getJwt: () => {
    return '';
  },
  handleError: (error: string) => {
    if (error.toLowerCase().includes('fetch')) {
      error = 'Sorry, an error has occurred with EmoteBingo.';
    }
    alert(error);
  },
  handleUnauthorized: (error: string) => {},
};
export const ClientSocketOptions: ControllerOptions = {
  get baseUrl() {
    return '';
  },
  getJwt: () => {
    return '';
  },
  handleError: (error: string) => {},
  handleUnauthorized: (error: string) => {},
};

export const handle400 = {
  400: (result: {error: string}) => {
    alert(result.error);
  },
};

export interface ControllerOptions {
  baseUrl: string;
  getJwt: () => string;
  handleError: (error: string) => void;
  handleUnauthorized: (error: string) => void;
}
