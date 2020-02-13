import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EspumantesPage } from './espumantes.page';

describe('EspumantesPage', () => {
  let component: EspumantesPage;
  let fixture: ComponentFixture<EspumantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspumantesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EspumantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
