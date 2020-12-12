import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SandPage } from './sand.page';

describe('SandPage', () => {
  let component: SandPage;
  let fixture: ComponentFixture<SandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
