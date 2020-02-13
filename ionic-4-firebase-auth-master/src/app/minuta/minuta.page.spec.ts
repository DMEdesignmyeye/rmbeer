import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MinutaPage } from './minuta.page';

describe('MinutaPage', () => {
  let component: MinutaPage;
  let fixture: ComponentFixture<MinutaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinutaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MinutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
