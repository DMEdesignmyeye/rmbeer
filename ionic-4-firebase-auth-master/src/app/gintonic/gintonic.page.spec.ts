import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GintonicPage } from './gintonic.page';

describe('GintonicPage', () => {
  let component: GintonicPage;
  let fixture: ComponentFixture<GintonicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GintonicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GintonicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
