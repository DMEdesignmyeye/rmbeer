import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnergizantesPage } from './energizantes.page';

describe('EnergizantesPage', () => {
  let component: EnergizantesPage;
  let fixture: ComponentFixture<EnergizantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergizantesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnergizantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
