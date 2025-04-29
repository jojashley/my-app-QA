import { Animal } from './animal';

describe('Animal', () => {
  let component: Animal;
  beforeEach(()=>{
    component = new Animal('1', 'Leo', 'León', new Date(), 10, 'Estable');
  });
  
  it ('Casos de prueba para validar si necesita atencion', () => {
    component.setEstadoSalud('Crítico');
    component.setPeso(10); 
    expect(component.necesitaAtencion()).toBe(true);
  });

  it ('Casos de prueba para validar que el peso es suficiente y no necesita atencion', () => {
    component.setEstadoSalud('Estable');
    component.setPeso(10)
    expect(component.necesitaAtencion()).toBe(false);
  });

});