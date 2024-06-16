import { LoggersMiddleware } from './loggers.middleware';

describe('LoggersMiddleware', () => {
  it('should be defined', () => {
    expect(new LoggersMiddleware()).toBeDefined();
  });
});
