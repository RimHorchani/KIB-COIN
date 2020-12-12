import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FidPage } from './fid.page';

describe('FidPage', () => {
  let component: FidPage;
  let fixture: ComponentFixture<FidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
