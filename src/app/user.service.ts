import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from './user'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private addUser="http://localhost:8080/api/createUser";
 private getUsers="http://localhost:8080/api/getAllUsers";
 private getById="http://localhost:8080/api/getUserById";
 private editUser="http://localhost:8080/api/updateUser";
 private delUser="http://localhost:8080/api/deleteUser";


 constructor(private httpClient:HttpClient) {}



 createUser(user:User):Observable<Object>
  {

    return this.httpClient.post(`${this.addUser}`,user);
  }

  getAllUserList():Observable<User[]>
  {
    return this.httpClient.get<User[]>(`${this.getUsers}`);
  }

  getUserById(userId:number):Observable<User>
  {
    return this.httpClient.get<User>(`${this.getById}/${userId}`);
  }

  updateUser(userId:number,user:User):Observable<Object>
  {
    return this.httpClient.put(`${this.editUser}/${userId}`,user);
  }
  
  deleteUser(userId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.delUser}/${userId}`);
  }

}
