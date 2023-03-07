export class UpdateArchivoDTO implements Iterable<any> {
    [Symbol.iterator](): Iterator<any> {
        const values = Object.values(this);
        let index = 0;

        return {
            next: (): IteratorResult<any> => {
                if (index < values.length) {
                    return { done: false, value: values[index++] };
                } else {
                    return { done: true, value: null };
                }
            },
        };
    }

    agente: string;
    avayaID: number;
    extencion: number;
    horaAcceso: string;
    horaDesconeccion: string;
    fecha: number;
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
}
