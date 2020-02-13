import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrscannPage } from './qrscann.page';

describe('QrscannPage', () => {
  let component: QrscannPage;
  let fixture: ComponentFixture<QrscannPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrscannPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrscannPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
