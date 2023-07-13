import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Mazda',
            model: 'CX5'
        },
        {
            id: 3,
            brand: 'Kia',
            model: 'Rio'
        },
    ];

    findAll(){
        return this.cars;
    }

    findOneById(id: number){
        const car = this.cars.find(x => x.id === id);

        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        
        return car;
    }
}
