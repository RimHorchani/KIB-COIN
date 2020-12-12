import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cart2ModalPage } from './cart2-modal.page';

describe('Cart2ModalPage', () => {
  let component: Cart2ModalPage;
  let fixture: ComponentFixture<Cart2ModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart2ModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cart2ModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
