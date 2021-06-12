import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {Contact} from './contact';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})

export class ContactService{
	private apiServerUrl = environment.apiBaseUrl;

	constructor(private http: HttpClient){ }

	public getContacts(): Observable<Contact[]> {
		return this.http.get<any>(`${this.apiServerUrl}/contact/all`)
	}

	public addContact(contact: Contact): Observable<Contact> {
		return this.http.post<any>(`${this.apiServerUrl}/contact/add`,contact)
	}

	public getContactById(contactId: number): Observable<Contact> {
		return this.http.get<any>(`${this.apiServerUrl}/contact/find/${contactId}`)
	}
}