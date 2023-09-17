import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HistoricoPage } from './historico.page';

describe('HistoricoPage', () => {
  let component: HistoricoPage;
  let fixture: ComponentFixture<HistoricoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricoPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoricoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
