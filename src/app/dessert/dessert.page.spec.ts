import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DessertPage } from './dessert.page';

describe('DessertPage', () => {
  let component: DessertPage;
  let fixture: ComponentFixture<DessertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DessertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DessertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
