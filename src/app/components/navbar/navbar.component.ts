import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMenuOpen = false; // Agrega esta propiedad

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const icons = this.elementRef.nativeElement.querySelector('.img__hamburgueza');
    const navbar = this.elementRef.nativeElement.querySelector('.navbar');

    if (icons) {
      icons.addEventListener('click', () => {
        this.isMenuOpen = !this.isMenuOpen; // Cambia el estado del menú
        navbar.classList.toggle('efecto');
      });
    }

    document.addEventListener('click', (event: MouseEvent) => {
      if (navbar && !navbar.contains(event.target as Node) && icons && !icons.contains(event.target as Node)) {
        this.isMenuOpen = false; // Cierra el menú si se hace clic fuera de él
        navbar.classList.remove('efecto');
      }
    });
  }

}
