export interface IArticulo {
    "id": number,
    "nombre": string,
    "descripcion": string,
    "precio": number,
    "tipo": string,
}

export interface ITecnologia extends IArticulo {
    "estado" : string
}

export interface IInmobiliaria extends IArticulo {
    "mCuadrados" : string,
    "nBanyos" : number,
    "nHabitaciones" : number,
    "localidad" : string
}

export interface IMotor extends IArticulo {
    "vehiculo" : string,
    "km" : number,
    "anyo" : number,
}