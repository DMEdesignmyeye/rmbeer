import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LomosPage } from './lomos.page';

describe('LomosPage', () => {
  let component: LomosPage;
  let fixture: ComponentFixture<LomosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LomosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
