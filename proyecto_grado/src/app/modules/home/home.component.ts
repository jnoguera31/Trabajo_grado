import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/class/project';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  projectSubscription: Subscription = new Subscription
  public Project = new Project();
  public Projects: Project[] = [];
  constructor (
  public projectsService: ProjectsService
  ){}

  ngOnInit(): void {
    console.log('PAGINA DE INICIO')
    this.projectSubscription = this.projectsService.all$().subscribe((items : Project[]) =>  {
      this.Projects=items})
    this.projectsService.all().subscribe();
  }

}
