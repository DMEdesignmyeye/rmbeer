import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RabasPage } from './rabas.page';

describe('RabasPage', () => {
  let component: RabasPage;
  let fixture: ComponentFixture<RabasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RabasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
