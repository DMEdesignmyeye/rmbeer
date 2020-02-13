import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RkidsPage } from './rkids.page';

describe('RkidsPage', () => {
  let component: RkidsPage;
  let fixture: ComponentFixture<RkidsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RkidsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RkidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
