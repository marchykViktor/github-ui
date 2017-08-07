import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RepoService {
  
    private name: string;

    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name
    }
}