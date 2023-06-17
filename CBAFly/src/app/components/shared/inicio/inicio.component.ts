import { Component, ViewChild, AfterViewInit, OnInit, ElementRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/authentication.service';
import Swiper from 'swiper';
import { Usuario } from 'src/app/model/usuario';
declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements AfterViewInit, OnInit {
  currentUser: Usuario | null;
  catalogData: any[];
  currentPage: number = 1;
  totalPages: number = 0;
  searchText: string = '';
  selectedOrigin: string = '';
  selectedDestination: string = '';
  origins: string[] = [];
  destinations: string[] = [];
  selectedDate: string = '';
  startDate: string = '';
  endDate: string = '';
  @ViewChild('originSelect') originSelect: any;
  @ViewChild('destinationSelect') destinationSelect: any;

  @ViewChild('swiperContainer') swiperContainer: any;

  constructor(private http: HttpClient, private authService: AuthService) { }
  
  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      // Aquí puedes hacer cualquier otra lógica necesaria cuando el usuario cambie
    });
    this.http.get<any>('http://127.0.0.1:8000/api/vuelo/').subscribe(
      (data) => {
        this.catalogData = data; 
        this.totalPages = Math.ceil(this.catalogData.length / 6);
        
        const uniqueOrigins = Array.from(new Set(this.catalogData.map(item => item.origen)));
        const uniqueDestinations = Array.from(new Set(this.catalogData.map(item => item.destino)));
  
        this.origins = uniqueOrigins;
        this.destinations = uniqueDestinations;
        
        this.refreshSelectPicker();
        setTimeout(() => {
          $('.selectpicker').selectpicker('refresh');
        }, 0);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  agregarAlCarrito(item: any) {
    console.log('Usuario actual:', this.currentUser);
    if (this.currentUser) {
      const vuelo = {
        vuelo: item,
        cantidad_asientos: 1,
        usuario: this.currentUser
      };
      this.http.post('http://127.0.0.1:8000/api/carrito/', vuelo).subscribe(
        (response) => {
          // Aquí puedes realizar alguna acción después de agregar al carrito exitosamente
          console.log('Vuelo agregado al carrito');
        },
        (error) => {
          // Aquí puedes manejar errores en caso de que ocurra alguno durante la solicitud HTTP
          console.error('Error al agregar vuelo al carrito', error);
        }
      );
    }
  }
  refreshSelectPicker() {
    $(this.originSelect.nativeElement).selectpicker('refresh');
  }

  ngAfterViewInit() {
    $('.selectpicker').selectpicker();
    const swiper = new Swiper('.bg-slider-thumbs', {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 0,
    });
    var swiper2 = new Swiper('.bg-slider', {
      loop: true,
      spaceBetween: 0,
      thumbs: {
        swiper: swiper,
      },
    });
    this.originSelect.refresh();
    this.destinationSelect.refresh();
  }

  getPaginatedData(): any[] {
    if (this.catalogData) {
      let filteredData = this.catalogData.filter(item =>
        item.destino.toLowerCase().includes(this.searchText.toLowerCase()) &&
        this.isWithinDateRange(item.hora_salida)
      );
      if (this.selectedOrigin) {
        filteredData = filteredData.filter(item => item.origen === this.selectedOrigin);
      }
      if (this.selectedDestination) {
        filteredData = filteredData.filter(item => item.destino === this.selectedDestination);
      }
      const startIndex = (this.currentPage - 1) * 6;
      const endIndex = startIndex + 6;
      return filteredData.slice(startIndex, endIndex);
    }
    return [];
  }
  
  onSearch(): void {
    this.currentPage = 1;
  }
  
  isWithinDateRange(dateString: string): boolean {
    if (this.selectedDate) {
      const selectedDate = new Date(this.selectedDate);
      const flightDate = new Date(dateString);
      
      const selectedDateUTC = new Date(
        selectedDate.getUTCFullYear(),
        selectedDate.getUTCMonth(),
        selectedDate.getUTCDate()
      );
      const flightDateUTC = new Date(
        flightDate.getUTCFullYear(),
        flightDate.getUTCMonth(),
        flightDate.getUTCDate()
      );
      return flightDateUTC.getTime() === selectedDateUTC.getTime();
    }
    
    return true;
  }


  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
