import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FidbackPage } from './fidback.page';

describe('FidbackPage', () => {
  let component: FidbackPage;
  let fixture: ComponentFixture<FidbackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FidbackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FidbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
