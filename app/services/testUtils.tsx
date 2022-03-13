import useAxios from 'axios-hooks';
import {mocked} from 'jest-mock';

interface IAxiosResult {
  data: any;
  loading: boolean;
  error: boolean;
}

export const mockAxiosResult = (result: IAxiosResult, refetch = jest.fn()) => {
  mocked(useAxios).mockImplementation(() => [result, refetch] as any);
};

export const mockAxiosResultOnce = (
  result: IAxiosResult,
  refetch = jest.fn(),
) => {
  mocked(useAxios).mockImplementationOnce(() => [result, refetch] as any);
};
