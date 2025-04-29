import { Animal } from './animal';

/**
 * Pruebas para el método necesitaAtencion() de la clase Animal
 * 
 * Objetivo: Verificar que el método identifique correctamente cuándo un animal necesita atención
 * médica, ya sea por estado de salud crítico o por condiciones inválidas como un peso negativo.
 * 
 * Se incluyen pruebas para:
 * - Animal con estado de salud "Crítico" (debe requerir atención)
 * - Animal con peso negativo (caso inválido controlado, debe requerir atención)
 */

describe('Animal', () => {
  let component: Animal;

  beforeEach(() => {
    // Arrange: Se crea un animal con datos válidos por defecto
    component = new Animal('1', 'Leo', 'León', new Date(), 10, 'Estable');
  });

  it('Debe requerir atención si el estado de salud es "Crítico"', () => {
    component.setEstadoSalud('Crítico');
    component.setPeso(10); // Peso válido
    expect(component.necesitaAtencion()).toBe(true);
  });

  it('Debe requerir atención si el peso es negativo (caso inválido)', () => {
    component.setEstadoSalud('Estable');
    component.setPeso(-5); // Peso inválido
    expect(component.necesitaAtencion()).toBe(true);
  });
});
