import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EspirituososPage } from './espirituosos.page';

describe('EspirituososPage', () => {
  let component: EspirituososPage;
  let fixture: ComponentFixture<EspirituososPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspirituososPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EspirituososPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
