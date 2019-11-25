import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }


  showDialog(){
    let closeModal  = document.getElementById('info')
   closeModal.classList.remove('hidden')
   closeModal.classList.add('show');
  }
  
  closeDialog() {
      let closeModal  = document.getElementById('info')
      closeModal.classList.remove('show')
      closeModal.classList.add('hidden');
  }


  ngOnInit() {
  }

}
