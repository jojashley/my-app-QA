import { TratamientoVeterinario } from './tratamiento-veterinario';
import { Animal } from './animal'; 

describe('TratamientoVeterinario', () => {
  it('should create an instance', () => {
    const animal = new Animal('1', 'Leo', 'León', new Date(), 150, 'Estable');
    const tratamiento = new TratamientoVeterinario('T1', animal, 'Tratamiento para herida', new Date(), 10, 5000);
    expect(tratamiento).toBeTruthy();
  });
});
