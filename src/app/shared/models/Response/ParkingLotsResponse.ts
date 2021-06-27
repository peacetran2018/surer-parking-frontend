export class ParkingLotsResponse {
    items : CarParkItems[] = [];
}

class CarParkItems {
    timestamp : Date = new Date();
    carpark_data: CarParkData[]  = [];
}

export class CarParkData {
    carpark_number: string = "";
    update_datetime: Date = new Date();
    carpark_info: CarParkInfo[] = []
}

export class CarParkInfo {
    total_lots: string = "";
    lot_type: string = "";
    lots_available: string = "";
}