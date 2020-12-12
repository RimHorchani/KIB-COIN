import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntrePage } from './entre.page';

describe('EntrePage', () => {
  let component: EntrePage;
  let fixture: ComponentFixture<EntrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
