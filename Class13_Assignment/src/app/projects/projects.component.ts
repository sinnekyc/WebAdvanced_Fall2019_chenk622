import { Component, OnInit } from '@angular/core';
import {projects} from '../projects';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  data = projects;
  constructor() { }

  myFunction = ()=>{
    console.log('Click Project');
    
  }

  showDialog(){
    let closeModal  = document.getElementById('pj-description')
   closeModal.classList.remove('hidden')
   closeModal.classList.add('show');
  }
  
  closeDialog() {
      let closeModal  = document.getElementById('pj-description')
      closeModal.classList.remove('show')
      closeModal.classList.add('hidden');
  }


  ngOnInit() {
    
  }

}
