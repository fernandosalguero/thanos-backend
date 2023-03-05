// convertimos un texto plano  -> un texto encriptado
import * as bcrypt from 'bcryptjs'

const saltOrRound = 9;

// encriptamos password
async function generateHash(passwordPlain:string) : Promise<string> {
    const hash = await bcrypt.hash(passwordPlain, saltOrRound);
    return hash;
} 

// comparamos si la password que nos envia el agente es la misma que tenemos
async function compareHash(plain:string, hash:string): Promise<any> {
    return await bcrypt.compare(plain, hash)
}

export {
    generateHash,
    compareHash
}