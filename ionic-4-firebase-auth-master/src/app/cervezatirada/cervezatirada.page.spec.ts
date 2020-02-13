import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CervezatiradaPage } from './cervezatirada.page';

describe('CervezatiradaPage', () => {
  let component: CervezatiradaPage;
  let fixture: ComponentFixture<CervezatiradaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervezatiradaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CervezatiradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
