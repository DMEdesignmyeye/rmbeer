import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuperbalonPage } from './superbalon.page';

describe('SuperbalonPage', () => {
  let component: SuperbalonPage;
  let fixture: ComponentFixture<SuperbalonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperbalonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperbalonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
