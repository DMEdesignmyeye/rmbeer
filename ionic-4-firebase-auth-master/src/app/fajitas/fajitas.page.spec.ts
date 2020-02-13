import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FajitasPage } from './fajitas.page';

describe('FajitasPage', () => {
  let component: FajitasPage;
  let fixture: ComponentFixture<FajitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FajitasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FajitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
