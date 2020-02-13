import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SandwichsPage } from './sandwichs.page';

describe('SandwichsPage', () => {
  let component: SandwichsPage;
  let fixture: ComponentFixture<SandwichsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandwichsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SandwichsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
