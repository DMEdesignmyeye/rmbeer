import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsaborPage } from './csabor.page';

describe('CsaborPage', () => {
  let component: CsaborPage;
  let fixture: ComponentFixture<CsaborPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsaborPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsaborPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
