import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangepPage } from './changep.page';

describe('ChangepPage', () => {
  let component: ChangepPage;
  let fixture: ComponentFixture<ChangepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
