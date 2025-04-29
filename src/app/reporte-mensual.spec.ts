import { ReporteMensual } from './reporte-mensual';

describe('ReporteMensual', () => {
  it('should create an instance', () => {
    expect(new ReporteMensual(4, 2025, [], [], [])).toBeTruthy();
  });
});
