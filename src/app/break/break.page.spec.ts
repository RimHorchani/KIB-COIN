import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreakPage } from './break.page';

describe('BreakPage', () => {
  let component: BreakPage;
  let fixture: ComponentFixture<BreakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
