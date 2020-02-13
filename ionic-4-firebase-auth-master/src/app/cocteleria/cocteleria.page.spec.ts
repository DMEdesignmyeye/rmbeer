import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CocteleriaPage } from './cocteleria.page';

describe('CocteleriaPage', () => {
  let component: CocteleriaPage;
  let fixture: ComponentFixture<CocteleriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocteleriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CocteleriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
