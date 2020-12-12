import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cart5ModalPage } from './cart5-modal.page';

describe('Cart5ModalPage', () => {
  let component: Cart5ModalPage;
  let fixture: ComponentFixture<Cart5ModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart5ModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cart5ModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
