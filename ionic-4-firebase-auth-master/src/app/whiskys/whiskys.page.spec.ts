import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhiskysPage } from './whiskys.page';

describe('WhiskysPage', () => {
  let component: WhiskysPage;
  let fixture: ComponentFixture<WhiskysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiskysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhiskysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
