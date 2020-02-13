import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeautorPage } from './deautor.page';

describe('DeautorPage', () => {
  let component: DeautorPage;
  let fixture: ComponentFixture<DeautorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeautorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeautorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
