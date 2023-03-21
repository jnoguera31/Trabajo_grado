import { environment } from 'src/environments/environment';
import { Project } from './../class/project';
import { Injectable } from '@angular/core';
import {Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public Project$ = new Subject<Project>();
  public Projects$ = new Subject<Project[]>();

  public Project = new Project();
  public Projects: Project[] = [];


  

  httpOptions = {
    header: new HttpHeaders ({'Content-Type': 'application/json'})
  }

   public url = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  all$(): Observable<Project[]>{
    return this.Projects$.asObservable();
  }
  all(): Observable<any>{
    this.Projects = []
    return this.http.get<Project[]>(this.url)
    .pipe(
      map((res: any)=>{
        res.forEach((item:any) => {
          this.Project = new Project()
          this.Project.SetValues(item)
          this.Projects.push(this.Project)
        });
        this.Projects$.next(this.Projects)
      }),
      catchError((err)=> of(err))
    )
  }
}
