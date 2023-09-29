import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  @ViewChild('gmap') mapElement!: ElementRef;
  map: any;
  loader!: Loader;

  constructor(private toastController: ToastController) {}
  ngOnInit(): void {}

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
            origin: 'Rolante, RS, 95690-000, Brasil',
            destination: 'Rolante, RS, 95690-000, Brasil',
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: [
              {
                location:
                  'R. Ouro Preto, 408 - Jardim Floresta, Porto Alegre - RS, 91040-610, Brasil',
                stopover: true,
              },
              {
                location:
                  'Av. Guilherme Schell, 6750 - Centro, Canoas - RS, 92310-564, Brasil',
                stopover: true,
              },
            ],
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
    const waypoints = [
      'R. Ouro Preto, 408 - Jardim Floresta, Porto Alegre - RS, 91040-610, Brasil',
      'Av. Guilherme Schell, 6750 - Centro, Canoas - RS, 92310-564, Brasil',
    ];

    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=Minha+Localizacao&destination=${destination}&travelmode=driving&waypoints=${waypoints.join(
      '|'
    )}`;

    window.open(mapsUrl, '_blank');
  }
}
