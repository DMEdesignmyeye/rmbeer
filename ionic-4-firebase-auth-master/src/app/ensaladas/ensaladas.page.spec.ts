import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnsaladasPage } from './ensaladas.page';

describe('EnsaladasPage', () => {
  let component: EnsaladasPage;
  let fixture: ComponentFixture<EnsaladasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsaladasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnsaladasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
