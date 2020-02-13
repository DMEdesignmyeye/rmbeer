import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TacosPage } from './tacos.page';

describe('TacosPage', () => {
  let component: TacosPage;
  let fixture: ComponentFixture<TacosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TacosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
