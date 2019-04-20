// Dependencias
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
// Servicios
import { ProjectsService } from '../services/projects.service';
// Modelos
import { Project } from '../models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Título
  private readonly TITLE = 'Proyectos - Portafolio de Alejandro Suárez';
  // Datos
  public projects: Project[];
  // ParticleJS
  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
  height: number = 100;

  constructor(private titleService: Title, private projectsService: ProjectsService) { }

  ngOnInit() {
    // Cambiar título
    this.titleService.setTitle(this.TITLE);
    // ParticleJS
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background-color': '#212529'
    };
    this.myParams = {
      particles: {
        number: {
            value: 1,
            density: {
              enable: true,
              value_area: 100
            }
        },
        color: {
            value: '#536DFE'
        },
        shape: {
            type: 'polygon',
            polygon: {
              nb_sides: 6
            }
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 100,
          random: false,
          anim: {
            enable: true,
            speed: 10,
            size_min: 40,
            sync: false
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 10,
          direction: 'bottom',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: 'false',
          atrract: {
            enable: false
          }
        }
      }
    };
    // Obtener datos
    this.projectsService.getProjects().subscribe(
      projects => {
        this.projects = projects;
        // console.log('Proyectos obtenidos');
        // console.table(projects);
      },
      error => {
        console.log('Error: ' + error.message);
      }
    );
  }

}
