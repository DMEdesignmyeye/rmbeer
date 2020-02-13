import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisilestankPage } from './misilestank.page';

describe('MisilestankPage', () => {
  let component: MisilestankPage;
  let fixture: ComponentFixture<MisilestankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisilestankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisilestankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
