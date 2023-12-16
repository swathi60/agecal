import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';




@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports:[FormsModule, RouterLink, RouterLinkActive, ]
 
}) 

export class HomeComponent{
  inputValue=''; 
  birthDate=new Date(''); 
 

  @Output() calculatedAge = new EventEmitter<number>();


  calculateAge(date: Date): void {
    console.log('Birth Date:', this.birthDate);
    if (this.birthDate instanceof Date && !isNaN(this.birthDate as any)) { // Check if 'date' is a valid Date object
      const today = new Date();
      const birth = this.birthDate;
  
      let age:number=0;
      age = today.getFullYear() - birth.getFullYear();  
      const monthDiff:number = today.getMonth() - birth.getMonth();
  
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
      }
  
      // Display the calculated age or use it as needed
      console.log('Calculated Age:', age);
      this.calculatedAge.emit(age);
    } else {
      console.error('Invalid date provided to calculate age');
    }
  }
  



  
}
