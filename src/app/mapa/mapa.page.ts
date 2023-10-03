import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { ToastController } from '@ionic/angular';
import { Pedido } from '../interfaces/pedidos.interface';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  @ViewChild('gmap') mapElement!: ElementRef;
  map: any;
  loader!: Loader;
  enderecos: string[] = [];
  waypoints: google.maps.DirectionsWaypoint[] = [];

  constructor(
    private route: ActivatedRoute,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      const state = history.state;
      if (state) {
        this.enderecos = state.enderecos;
        this.enderecos.forEach((endereco) => {
          this.waypoints.push({
            location: endereco,
            stopover: true,
          });
        });
      }
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap() {
    this.loader = new Loader({
      apiKey: 'AIzaSyD9yWSyBhbOtQt-ybgQSSKJnuTVJGBfKEs',
      version: 'weekly',
    });
    const mapOptions = {
      center: {
        lat: -29.656228,
        lng: -50.5735855,
      },
      zoom: 8,
    };
    const elementMap: HTMLElement = this.mapElement.nativeElement;

    this.loader
      .importLibrary('maps')
      .then(({ Map }) => {
        const directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        const map = new Map(elementMap, mapOptions);

        directionsRenderer.setMap(map);

        directionsService.route(
          {
            origin: 'Rolante, RS, 95690-000, Brasil', //Saindo da empresa PedraMoura
            destination: 'Rolante, RS, 95690-000, Brasil', //Retornando a empresa PedraMoura
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: this.waypoints,
          },
          function (result, status) {
            if (status == 'OK') {
              directionsRenderer.setDirections(result);
            }
          }
        );
      })
      .catch((e) => {
        this.presentErrorToast();
      });
  }

  async presentErrorToast() {
    const toast = await this.toastController.create({
      message: 'Erro ao carregar a rota',
      duration: 3000,
      position: 'middle',
      color: 'danger',
    });
    toast.present();
  }

  openGoogleMapsNavigation() {
    const destination = 'Rolante, RS, 95690-000, Brasil';
    const waypoints = this.enderecos;

    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=Minha+Localizacao&destination=${destination}&travelmode=driving&waypoints=${waypoints.join(
      '|'
    )}`;

    window.open(mapsUrl, '_blank');
  }
}
