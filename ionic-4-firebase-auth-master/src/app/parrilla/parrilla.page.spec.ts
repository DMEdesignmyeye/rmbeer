import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParrillaPage } from './parrilla.page';

describe('ParrillaPage', () => {
  let component: ParrillaPage;
  let fixture: ComponentFixture<ParrillaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParrillaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParrillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
