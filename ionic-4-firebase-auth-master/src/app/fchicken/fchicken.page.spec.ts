import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FchickenPage } from './fchicken.page';

describe('FchickenPage', () => {
  let component: FchickenPage;
  let fixture: ComponentFixture<FchickenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FchickenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FchickenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
