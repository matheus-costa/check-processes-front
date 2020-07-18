import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Process } from '../models/process.model';
import { ENV } from 'src/environments/environment';

@Injectable()
export class ProcessService {
    constructor(
        private http: HttpClient
    ) { }
    
    list(){
        return this.http.get<Process[]>(`${ENV.API_URL}/process`);
    }

    find(id){
        return this.http.get<Process>(`${ENV.API_URL}/process/${id}`);
    }

    save(process: Process) {
        return this.http.post<Process>(`${ENV.API_URL}/process/save`, process);
    }
}