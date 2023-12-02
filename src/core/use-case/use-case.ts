export interface UseCase<Data = any, Params = any> {
  call(params: Params): Promise<Data>;
}
