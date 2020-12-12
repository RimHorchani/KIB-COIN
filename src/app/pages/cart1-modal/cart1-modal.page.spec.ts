import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cart1ModalPage } from './cart1-modal.page';

describe('Cart1ModalPage', () => {
  let component: Cart1ModalPage;
  let fixture: ComponentFixture<Cart1ModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart1ModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cart1ModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
