import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cart6ModalPage } from './cart6-modal.page';

describe('Cart6ModalPage', () => {
  let component: Cart6ModalPage;
  let fixture: ComponentFixture<Cart6ModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart6ModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cart6ModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
