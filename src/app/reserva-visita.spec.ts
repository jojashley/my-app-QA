import { ReservaVisita } from './reserva-visita';


describe('ReservaVisita', () => {
  let component: ReservaVisita;

  beforeEach(() => {
    component = new ReservaVisita('R1', new Date(), 4 , 'Libre');
  });

  it('Caso de prueba que debería calcular el precio correctamente para un recorrido libre, sin descuentos, dia diferente a domingo', () => {
    component.setFecha(new Date(2025, 3, 26)); // Sábado
    expect(component.calcularPrecio()).toBe(4 * 3000)
  });

  it('Caso de prueba que debería calcular el precio correctamente para un recorrido libre, sin descuentos, sumando el porcentaje del domingo', () => {
    component.setFecha(new Date(2025, 3, 27)); // domingo
    expect(component.calcularPrecio()).toBeCloseTo ((4 * 3000)*1.2)
  });
  
});
 