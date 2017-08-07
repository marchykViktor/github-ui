import { Injectable } from '@angular/core';

@Injectable()
export class PaginateService {

  
  availabilityItems(currentPage: number, itemsPerPage: number, items: number) {
    if (!items) return false;

    return (items - currentPage * itemsPerPage) / itemsPerPage > 0
  }
}