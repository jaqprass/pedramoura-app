import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntregasPage } from './entregas.page';

describe('EntregasPage', () => {
  let component: EntregasPage;
  let fixture: ComponentFixture<EntregasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntregasPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(EntregasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
