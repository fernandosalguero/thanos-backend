export class UpdateArchivoDTO implements Iterable<[string, any]> {
    agente: string;
    avayaID: number;
    extencion: number;
    horaAcceso: string;
    horaDesconeccion: string;
    fecha: string;
    motivo: number;
    Skill1: number;
    Skill2: number;
    Skill3: number;
    Skill4: number;
    Skill5: number;
    Skill6: number;
    Skill7: number;
    Skill8: number;
    Skill9: number;
    Skill10: number;
    Skill11: number;
    Skill12: number;
    Skill13: number;
    Skill14: number;
    Skill15: number;
  
    *[Symbol.iterator](): Iterator<[string, any]> {
      const entries = Object.entries(this);
      for (const entry of entries) {
        yield entry;
      }
    }
  }