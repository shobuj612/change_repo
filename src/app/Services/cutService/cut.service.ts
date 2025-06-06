import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cutting } from '../../Model/cutting.model';

@Injectable({
  providedIn: 'root'
})
export class CutService {

  private baseUrl='http://localhost:8080/cut'



  constructor(private http:HttpClient) { }

  // this is the method to get the token form the localstorage

  private getToken(): { headers: HttpHeaders } {
  const token = localStorage.getItem('token');
  if (token) {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`  // Add 'Bearer ' before the token
      })
    };

  } 
  
  else {
    throw new Error('No token found in localStorage');
    
  }
}


       
  getAllCut():Observable<Cutting[]>{

    return this.http.get<Cutting[]>(this.baseUrl,this.getToken())
  }


  updateCuttingByServie(id:number,cut:Cutting):Observable<Cutting>
{

  if(id==null){

    throw new Error('Id is Invalid?')
  }

  return this.http.put<Cutting>(this.baseUrl+'/'+id,cut,this.getToken())
}



postDesignByService(cut:Cutting):Observable<Cutting>{

  return this.http.post<Cutting>(this.baseUrl,cut,this.getToken())

}


deleteDesignByService(id:number):Observable<void>{

  if(id<=0){
    throw new Error('Invalid id?')
  }

  return this.http.delete<void>(this.baseUrl+'/'+id,this.getToken())
}

//this is another method to call the reportconntroller
downloadReport():Observable<Blob>{
  const token=localStorage.getItem('token');
  const headers=new HttpHeaders({
    'Authorization':`Bearer ${token}`
  });
  return this.http.get('http://localhost:8080/api/report/cut',{headers,responseType:'blob'})
}

}
