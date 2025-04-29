import { ReporteMensual } from './reporte-mensual';
import { Animal } from './animal';

/**
 * Prueba parametrizada para el método contarAnimalesNuevos() de la clase ReporteMensual
 * 
 * Objetivo: Verificar que el método cuente correctamente los animales ingresados en un mes y año específicos.
 * 
 * Se utilizan tres escenarios distintos, variando los valores de entrada (fecha de ingreso, mes y año del reporte).
 */

describe('ReporteMensual.contarAnimalesNuevos (caso parametrizado)', () => {
  interface Caso {
    descripcion: string;
    animales: Animal[];
    mes: number;
    anio: number;
    esperado: number;
  }

  const casos: Caso[] = [
    {
      descripcion: 'Dos animales ingresados en el mismo mes y año',
      animales: [
        // Datos de prueba: ambos con fecha de ingreso en abril de 2025
        new Animal('A1', 'Tigre', 'Felino', new Date('2025-04-10'), 100, 'Estable'),
        new Animal('A2', 'Mono', 'Primate', new Date('2025-04-20'), 40, 'Estable')
      ],
      mes: 4, // Abril
      anio: 2025,
      esperado: 2 // Resultado esperado: ambos animales deben contarse
    },
    {
      descripcion: 'Un animal ingresado en mes anterior',
      animales: [
        // Fecha de ingreso: marzo 2025 (no debe contarse)
        new Animal('A1', 'Puma', 'Felino', new Date('2025-03-15'), 90, 'Estable')
      ],
      mes: 4,
      anio: 2025,
      esperado: 0
    },
    {
      descripcion: 'Animales de diferentes años',
      animales: [
        // Uno de 2024, otro de 2025 (solo uno califica)
        new Animal('A1', 'Guacamaya', 'Ave', new Date('2024-04-05'), 2, 'Estable'),
        new Animal('A2', 'Tapir', 'Mamífero', new Date('2025-04-07'), 250, 'Estable')
      ],
      mes: 4,
      anio: 2025,
      esperado: 1
    }
  ];

  // Itera sobre cada caso de prueba y evalúa el resultado
  casos.forEach((caso) => {
    it(`debería contar correctamente animales nuevos: ${caso.descripcion}`, () => {
      // Arrange: crear el reporte mensual con los datos del caso
      const reporte = new ReporteMensual(caso.mes, caso.anio, caso.animales, [], []);

      // Act + Assert: verificar si el resultado coincide con lo esperado
      expect(reporte.contarAnimalesNuevos()).toBe(caso.esperado);
    });
  });
});