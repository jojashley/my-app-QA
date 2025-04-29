import { ReservaVisita } from './reserva-visita';

/**
 * Pruebas del método calcularPrecio() de la clase ReservaVisita
 * 
 * Objetivo: Verificar que el método calcule correctamente el precio total de una visita
 * dependiendo del tipo de recorrido, la cantidad de visitantes y el día de la semana.
 * 
 * Se incluyen pruebas para:
 * - Cálculo con recorrido libre en día domingo (incluye recargo del 20%)
 * - Cálculo con 0 visitantes (caso inválido controlado, debería devolver 0 sin lanzar error)
 */

describe('ReservaVisita', () => {
  let component: ReservaVisita;

  beforeEach(() => {
    // Arrange: Se crea una reserva con valores por defecto
    component = new ReservaVisita('R1', new Date(), 4, 'Libre');
  });

  it('Caso de prueba que debería calcular el precio correctamente para un recorrido libre, sin descuentos, sumando el porcentaje del domingo', () => {
    // Fecha: Domingo 27 de abril de 2025
    component.setFecha(new Date(2025, 3, 27)); // Mes 3 = abril 
    const esperado = (4 * 3000) * 1.2; // Precio base con recargo del 20%
    expect(component.calcularPrecio()).toBeCloseTo(esperado);
  });

  it('Caso de prueba para visitantes en 0 debería devolver precio 0 (aunque no tenga sentido)', () => {
    // Caso inválido: 0 visitantes en domingo
    component.setVisitantes(0);
    component.setFecha(new Date(2025, 3, 27)); // Domingo
    expect(component.calcularPrecio()).toBe(0); // No debe lanzar error
  });
});
